const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {jwtSecret, jwtExpire} = require('../config/keys');

exports.signUpController = async (req, res) => {
    const { username, password } = req.body;

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
        
        
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
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
        
        if(isRemembered) jwtExpire = 10;
        jwt.sign(payload, jwtSecret, { expiresIn: jwtExpire }, (err, token) => {
            if(err) {
                console.log('Token arror', err);
            }    
            const {_id, email, password, role} = user;
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