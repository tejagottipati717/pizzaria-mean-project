const express = require('express');
const User = require('../models/User');

const router = express.Router();


// REGISTER

router.post('/register', async (req, res) => {

    try {

        const { name, email, password } = req.body;

        const existingUser =
            await User.findOne({ email });

        if (existingUser) {

            return res.status(400).json({
                message: 'User already exists'
            });

        }

        const user =
            await User.create({
                name,
                email,
                password
            });

        res.status(201).json(user);

    }
    catch (err) {

        console.log(err);

        res.status(500).json({
            message: 'Server Error'
        });

    }

});


// LOGIN

router.post('/login', async (req, res) => {

    try {

        const { email, password } = req.body;

        const user =
            await User.findOne({
                email,
                password
            });

        if (!user) {

            return res.status(401).json({
                message: 'Invalid Credentials'
            });

        }

        res.json({
            message: 'Login Successful',
            user
        });

    }
    catch (err) {

        console.log(err);

        res.status(500).json({
            message: 'Server Error'
        });

    }

});

module.exports = router;