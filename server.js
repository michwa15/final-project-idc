const express = require("express");
const app = express();
const connectDB = require('./database/db');
const authRoutes = require('./routes/auth');
const productsRoutes = require('./routes/products');

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/products', productsRoutes);

connectDB();

const PORT = process.env.PORT || 3001;

app.listen(PORT, console.log(`Server listening on ${PORT}`));
