const { Review } = require('../models/persist');

exports.getReviewsController = async (req, res) => {
    try {
        const reviewsData = await Review.find({});
        res.json({reviewsData});
    } catch (err) {
        console.log('cant get reviews from db');
        res.status(500).json({
            errorMessage: 'Server error'
        });
    }
}

exports.addReviewController = async (req, res) => {
    try {
        const newReview = await new Review({
            ...req.body
        });
        await newReview.save();
        const updatedReviews = await Review.find({});
        res.json(updatedReviews);
    } catch (err) {
        console.log('can\'t add a new review');
        res.status(500).json({
            errorMessage: 'Server error'
        });
    }
}