const { Shoe, User } = require('../models/persist');

exports.deleteController = async (req, res) => {
    const {_id} = req.body;
    try {
        await Shoe.findOneAndDelete({_id});
        res.json({
            successMessage: 'Delete item success.'
        });
    } catch (err) {
        console.log("Delete Item Error");
        res.status(500).json({
            errorMessage: 'Server error'
        });
    }
};

exports.addController = async (req, res) => {
    const {title, description, url} = req.body;
    try {
        const newShoe = new Shoe({
            shoe: title,
            title: description,
            media: {
                imageUrl: url,
                smallImageUrl: url,
                thumbUrl: url,
            }
        });
        await newShoe.save();
        res.json({
            successMessage: 'Add item success.'
        });
    } catch (err) {
        console.log("Add Item Error");
        res.status(500).json({
            errorMessage: 'Server error'
        });
    }
}

exports.getUsersController = async (req, res) => {
    try {
        const users = await User.find({});
        return res.json(users);
    } catch (err) {
        console.log("Get users Error");
        res.status(500).json({
            errorMessage: 'Server error'
        });
    }
}