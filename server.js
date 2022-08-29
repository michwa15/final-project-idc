const express = require("express");
const app = express();
const connectDB = require('./database/db');
const authRoutes = require('./routes/auth');
const productsRoutes = require('./routes/products');
const checkoutRoutes = require('./routes/checkout');
const adminRoutes = require('./routes/admin');
const reviewsRoutes = require('./routes/reviews');

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/products', productsRoutes);
app.use('/checkout', checkoutRoutes);
app.use('/admin', adminRoutes);
app.use('/reviews', reviewsRoutes);

connectDB();

const PORT = process.env.PORT || 3001;

app.listen(PORT, console.log(`Server listening on ${PORT}`));
