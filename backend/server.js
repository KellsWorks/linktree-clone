require('dotenv').config();

const express = require('express');
const weblinkRoutes = require('./routes/weblink')

const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.get('/', (req, res) => {
    res.json({message: `Express App is running on port ${port}`});
})

app.use('/api/weblink', weblinkRoutes)
require('./routes/auth')(app);

mongoose.connect(process.env.MONGODB)
.then(() => {
    app.listen(port, () => {
        console.log(`✅️ database connected`)
        console.log(`✅️ listening on port: ${port}`);
    });
})
.catch((error) => {
    console.error(error)
})
