const mongoose = require("mongoose");

const userData = new mongoose.Schema(
    {
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
    },
    { timestamps: true }
);

const User = mongoose.model('User', userData);

module.exports = User;