const mongoose = require ('mongoose');

const shoeData = new mongoose.Schema ({
    id: {
        type: String,
        default: "random-string"
    },
    brand: {
        type: String,
        default: "Nike"
    },
    colorway: {
        type: String,
        default: "Blue"
    },
    gender: {
        type: String,
        default: "unisex"
    },
    name: {
        type: String,
        default: "Air Jordan"
    },
    releaseDate: {
        type: String,
        default: "2022-01-01"
    },
    retailPrice: {
        type: Number,
        default: 150
    },
    shoe: {
        type: String,
        default: "Nike Shox"
    },
    styleId: {
        type: String,
        default: "empty"
    },
    title: {
        type: String,
        default: "Nike Shox"
    },
    year: {
        type: Number,
        default: 2022
    },
    media: {
        imageUrl: {
            type: String,
            default: ""
        },
        smallImageUrl: {
            type: String,
            default: ""
        },
        thumbUrl: {
            type: String,
            default: ""
        }
    }
})  

const Shoe = mongoose.model('Shoe', shoeData);

module.exports = Shoe;