const express = require('express');
const router = express.Router();
const { purchaseController } = require('../controllers/checkout');

router.post('/purchase', purchaseController)

module.exports = router;