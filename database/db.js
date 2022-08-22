const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://michwa15:michwa20@store-final-project-idc.oisgeuh.mongodb.net/?retryWrites=true&w=majority", 
            {
                useUnifiedTopology: true,
                useNewUrlParser: true,
            }
        );
        console.log('Database connection success');
    } catch (err) {
        console.log(err)
    }
};

module.exports = connectDB;