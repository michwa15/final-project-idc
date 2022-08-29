const connectDB = require('../database/db');
const { Shoe, Review } = require('../models/persist');
const { shoesItems } = require('../database/shoes-items');

const reviewsData = [
    {
        fullname: 'Omer Erlich',
        avatarSrc: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        stars: 5,
        comment: 'Really happy about my new pair of shoes. I love them and i\'ll probably buy a new one. Great experience about the contact with the staff, always kind, helpful and resolute. They answered all my questions. Thank you so much and keep doing this, you\'re doing well!',
        timestamp: '13 min ago'
    },
    {
        fullname: 'Noa David',
        avatarSrc: 'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGh1bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80',
        stars: 4,
        comment: 'I have received my shoes! They perfectly fit to my feet and feel so great. No doubt, I have tried them a shot a second time. That was excessively tight. Thank you so much for the entirety of your assistance with this buy. Much thanks to you for stunning client support.',
        timestamp: '7 min ago'
    }
]

connectDB();

const initialData = async () => {
    try {
        await Shoe.deleteMany({});
        await Shoe.insertMany(shoesItems);
        await Review.deleteMany({});
        await Review.insertMany(reviewsData);
        console.log('Items stored successfully');
        process.exit();
    } catch (err) {
        console.log('Error while trying to connect to database and insert the shoes items');
        process.exit(1);
    }
}

initialData();
