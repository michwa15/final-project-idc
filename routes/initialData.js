const connectDB = require('../database/db');
const { Shoe } = require('../models/persist');
const { shoesItems } = require('../database/shoes-items');

connectDB();

const initialData = async () => {
    try {
        await Shoe.deleteMany({});
        await Shoe.insertMany(shoesItems);
        console.log('Items stored successfully');
        process.exit();
    } catch (err) {
        console.log('Error while trying to connect to database and insert the shoes items');
        process.exit(1);
    }
}

initialData();
