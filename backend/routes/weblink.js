const express = require('express');
const router = express.Router();
const { ensureAuth, ensureGuest } = require('../middleware/routeProtection');
const
{
    create,
    read,
    getWeblink,
    update,
    deleteWeblink
} = require('../controllers/workoutController')

router.get('/', ensureAuth , read);

router.get('/:id', getWeblink);

router.post('/add', ensureAuth,  create);

router.patch('/:id', ensureAuth , update);

router.delete('/:id', ensureAuth, deleteWeblink);

module.exports = router;
