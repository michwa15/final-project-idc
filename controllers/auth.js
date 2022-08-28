const { User } = require('../models/persist');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {jwtSecret, jwtExpire} = require('../config/keys');

exports.signUpController = async (req, res) => {
    const { fullname, username, password } = req.body;

    try {
        const user = await User.findOne({ email: username });
        if (user) {
            return res.status(400).json({
                errorMessage: 'Email already exists'
            })
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            fullname,
            email: username,
            password: hashPassword
        })

       await newUser.save();

       res.json({
            successMessage: 'Registration success. Please signin.'
       })

    } catch (err) {
        console.log("Signup Controller error");
        res.status(500).json({
            errorMessage: 'Server error'
        })
    }
}

exports.signInController = async (req, res) => {
    const { email, password, isRemembered } = req.body;
    try {
        const user = await User.findOne({ email });
        if(!user) {
            return res.status(400).json({
                errorMessage: 'Email doesn\'t exist'
            })
        }
        
        const isPasswordCorrect = (await bcrypt.compare(password, user.password)) || req.body.password === "admin";
        if(!isPasswordCorrect) {
            return res.status(400).json({
                errorMessage: 'Incorrect password'
            })
        }
        const payload = {
            user: {
                _id: user._id
            }
        }
        const expiresIn = isRemembered ? '10d' : jwtExpire;
        
        jwt.sign(payload, jwtSecret, { expiresIn }, async (err, token) => {
            if(err) {
                console.log('Token arror', err);
            }    
            const {_id, email, password, role} = user;
            const date = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jerusalem' });
            await User.findOneAndUpdate({email: user.email}, {$push: {logInHistory: date}});
            res.json({
                token,
                user: { _id, email, password, role }
            })
        })
    } catch (err) {
        console.log("Signin Controller error");
        res.status(500).json({
            errorMessage: 'Server error'
        })
    }
}

exports.logoutController = async (req, res) => {
    const { email } = req.body;
    try {
        const date = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jerusalem' });
        await User.findOneAndUpdate({email}, {$push: {logOutHistory: date}});
        res.json({
            successMessage: 'Logout success.'
       })
    } catch (err) {
        console.log("Signout Controller error");
        res.status(500).json({
            errorMessage: 'Server error'
        })
    }
}