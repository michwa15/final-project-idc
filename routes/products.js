const express =  require('express');
const router = express.Router();
const { getProductsController, AddToCartController, getCartController, removeCartItemController, getProductsByNameController } = require('../controllers/products');

router.get('/', getProductsController);
router.get('/cart', getCartController);
router.get('/search', getProductsByNameController);
router.put('/add-to-cart', AddToCartController);
router.put('/remove-cart-item', removeCartItemController);

module.exports = router;