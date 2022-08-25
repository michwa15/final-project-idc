const { User, Shoe } = require('../models/persist');
const {shoesItems} = require('../database/shoes-items');

exports.getProductsController = async (req, res) => {
    try {
        const shoes = await Shoe.find({});
        res.json({shoes});
    } catch (err) {
        console.log('cant find shoes on db');
        res.status(500).json({
            errorMessage: 'Server error'
        });
    }
}

exports.getCartController = async (req, res) => {
    try {
        const { user } = req.query;
        const userEmail = JSON.parse(user).email;
        const cartShoes = (await User.findOne({email: userEmail})).cart;
        res.json({cartShoes});
    } catch (err) {
        console.log('cant get cart elements');
        res.status(500).json({
            errorMessage: 'Server error'
        });
    }
}

exports.AddToCartController = async (req, res) => {
    try {
        const {shoe, user} = req.body;
        const userCart = (await User.findOne({email: user.email})).cart;
        if(userCart.some(item => item._id === shoe._id)) {
            res.status(500).json({
                errorMessage: 'Item already in cart'
            });
        } else {
            await User.findOneAndUpdate({email: user.email}, {$push: {cart: shoe}});
            res.json({});
        }
    } catch (err) {
        console.log('cant add shoe to cart');
        res.status(500).json({
            errorMessage: 'Server error'
        });
    }
}

exports.removeCartItemController = async (req, res) => {
    try {
        const {shoe, user} = req.body;
        User.findOne({email: user.email}, async (err, userData) => {
            if(err) {
                console.log('cant find this item in db');
                res.status(500).json({
                    errorMessage: 'Server error'
                });
            } else {
                const idOfRemove = shoe._id;
                await User.findOneAndUpdate({email: user.email}, {$pull: {cart: {_id: idOfRemove}}});
                const updatedCart = (await User.findOne({email: user.email})).cart;
                res.json({updatedCart});
            }
        })
    } catch (err) {
        console.log('cant remove item from cart');
        res.status(500).json({
            errorMessage: 'Server error'
        });
    }
}

exports.getProductsByNameController = async (req, res) => {
    const { value } = req.query;
    const shoesBySearch = shoesItems.filter(shoe => shoe.shoe.toLowerCase().includes(value));
    res.json({shoesBySearch})
}