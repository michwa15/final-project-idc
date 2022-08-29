const express = require('express');
const router = express.Router();
const { getReviewsController, addReviewController } = require ('../controllers/reviews');

router.get('/', getReviewsController);
router.post('/add', addReviewController);

module.exports = router;