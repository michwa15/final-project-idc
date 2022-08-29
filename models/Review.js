const mongoose = require("mongoose");

const reviewData = new mongoose.Schema({
    fullname: {
        type: String,
        default: ''
    },
    avatarSrc: {
        type: String,
        default: ''
    },
    comment: {
        type: String,
        default: ''
    },
    stars: {
        type: Number,
        default: 5
    },
    timestamp: {
        type: String,
        default: ''
    }
});

const Review = mongoose.model('Review', reviewData);

module.exports = Review;