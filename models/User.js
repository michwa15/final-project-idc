const mongoose = require("mongoose");
const { Shoe, Purchase } = require('./persist');

const userData = new mongoose.Schema(
    {
        fullname: {
            type: String,
            default: ''
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        // user/admin
        role: {
            type: String,
            default: "user",
        },
        cart: {
            type: [Shoe],
            default: []
        },
        purchases: {
            type: [Purchase],
            default: []
        },
        logInHistory: {
            type: Array,
            items: {
                type: String
            },
            default: []
        },
        logOutHistory: {
            type: Array,
            items: {
                type: String
            },
            default: []
        }
    },
    { timestamps: true }
);

const User = mongoose.model('User', userData);

module.exports = User;