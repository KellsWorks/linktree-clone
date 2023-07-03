const express = require('express');
const router = express.Router();

router.get('/', function (req, res){
    res.json({ message: "all weblinks"});
});

router.get('/:id', function (req, res){
    res.json({ message: "single weblink"});
});

router.post('/add', function (req, res){
    res.json({ message: "add weblink"});
});

router.patch('/:id', function (req, res){
    res.json({ message: "update weblink"});
});

router.delete('/:id', function (req, res){
    res.json({ message: "delete weblink"});
});

module.exports = router;
