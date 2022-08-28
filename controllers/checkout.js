const { User, Purchase } = require('../models/persist');

exports.purchaseController = async (req, res) => {
    const { user, shoes, totalPrice, itemsCount } = req.body;
    const date = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jerusalem' });
    const newPurchase = new Purchase({
        date,
        shoes,
        totalPrice,
        itemsCount
    });
    
    await (User.findOneAndUpdate({email: user.email}, {$push: {purchases: newPurchase}, $set: {cart: []}}));
    res.json({});
}
