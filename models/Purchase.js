const mongoose = require("mongoose");
const { Shoe } = require('./persist');

const purchaseData = new mongoose.Schema({
    date: {
        type: String,
        default: ''
    },
    shoes: {
        type: Array,
        items: {
            type: Shoe
        },
        default: [],
    },
    totalPrice: {
        type: Number,
        default: 0
    },
    itemsCount: {
        type: Number,
        default: 0
    }
})

const Purchase = mongoose.model('Purchase', purchaseData);

module.exports = Purchase;