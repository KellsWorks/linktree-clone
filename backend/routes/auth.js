require('dotenv').config();

const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const dbName = 'authDB';
const collectionName = 'users';

const secretKey = 'linktree-cline-example-jwt';

const transporter = nodemailer.createTransport({
  service: 'your-email-service',
  auth: {
    user: 'your-email',
    pass: 'your-email-password',
  },
});

router.post('/register', (req, res) => {
  const { name, email, password } = req.body;

  const hashedPassword = bcrypt.hashSync(password, 10);

  const user = {
    name,
    email,
    password: hashedPassword,
  };

  MongoClient.connect(process.env.MONGODB, (err, client) => {
    if (err) {
      console.log('Error connecting to MongoDB:', err);
      res.status(500).json({ error: 'Failed to connect to database' });
      return;
    }

    const db = client.db(dbName);

    db.collection(collectionName)
      .findOne({ email })
      .then((existingUser) => {
        if (existingUser) {
          res.status(409).json({ error: 'User already exists' });
          client.close();
          return;
        }

        db.collection(collectionName)
          .insertOne(user)
          .then(() => {
            res.status(201).json({ message: 'User registered successfully' });
            client.close();
          })
          .catch((error) => {
            console.log('Error registering user:', error);
            res.status(500).json({ error: 'Failed to register user' });
            client.close();
          });
      })
      .catch((error) => {
        console.log('Error checking existing user:', error);
        res.status(500).json({ error: 'Failed to register user' });
        client.close();
      });
  });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  MongoClient.connect(process.env.MONGODB, (err, client) => {
    if (err) {
      console.log('Error connecting to MongoDB:', err);
      res.status(500).json({ error: 'Failed to connect to database' });
      return;
    }

    const db = client.db(dbName);

    db.collection(collectionName)
      .findOne({ email })
      .then((user) => {
        if (!user) {
          res.status(401).json({ error: 'Invalid credentials' });
          client.close();
          return;
        }

        const passwordMatch = bcrypt.compareSync(password, user.password);
        if (!passwordMatch) {
          res.status(401).json({ error: 'Invalid credentials' });
          client.close();
          return;
        }

        const token = jwt.sign({ email: user.email }, secretKey);

        res.status(200).json({ token });
        client.close();
      })
      .catch((error) => {
        console.log('Error logging in:', error);
        res.status(500).json({ error: 'Failed to log in' });
        client.close();
      });
  });
});

router.post('/forgot-password', (req, res) => {
  const { email } = req.body;

  MongoClient.connect(process.env.MONGODB, (err, client) => {
    if (err) {
      console.log('Error connecting to MongoDB:', err);
      res.status(500).json({ error: 'Failed to connect to database' });
      return;
    }

    const db = client.db(dbName);

    db.collection(collectionName)
      .findOne({ email })
      .then((user) => {
        if (!user) {
          res.status(404).json({ error: 'User not found' });
          client.close();
          return;
        }

        const newPassword = Math.random().toString(36).slice(-8);

        const hashedPassword = bcrypt.hashSync(newPassword, 10);

        db.collection(collectionName)
          .updateOne({ email }, { $set: { password: hashedPassword } })
          .then(() => {

            transporter.sendMail({
              from: 'your-email',
              to: user.email,
              subject: 'Password Reset',
              text: `Your new password: ${newPassword}`,
            });

            res.status(200).json({ message: 'Password reset email sent' });
            client.close();
          })
          .catch((error) => {
            console.log('Error resetting password:', error);
            res.status(500).json({ error: 'Failed to reset password' });
            client.close();
          });
      })
      .catch((error) => {
        console.log('Error finding user:', error);
        res.status(500).json({ error: 'Failed to reset password' });
        client.close();
      });
  });
});

module.exports = router;
