const express = require('express');
const router = express.Router();
const
{
    create,
    read,
    getWeblink,
    update,
    deleteWeblink
} = require('../controllers/workoutController')

router.get('/', read);

router.get('/:id', getWeblink);

router.post('/add', create);

router.patch('/:id', update);

router.delete('/:id', deleteWeblink);

module.exports = router;
