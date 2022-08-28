const express = require('express');
const router = express.Router();
const { deleteController, addController, getUsersController } = require('../controllers/admin');

router.delete('/delete', deleteController);
router.post('/add', addController);
router.get('/get-users', getUsersController);

module.exports = router;