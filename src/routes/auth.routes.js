const express = require('express');
const UserModel = require('../models/user.model');
const jwt = require('jsonwebtoken');



const router = express.Router();


// register route //post
//login route //post
//user profile route //get

router.post('/register', async (req, res) => {
    const { username, password } = req.body;

    const existingUser = await UserModel.findOne({ username });

    if (existingUser) {
        return res.status(409).json({
            message: "username already exists"
        })

    }

    const user = await UserModel.create({
        username, password
    })

    const Token = jwt.sign({
        userid: user._id //._id is mongoose default id
    },process.env.jwt_secret,{
        expiresIn: '1h'
    })

    res.cookie('token',Token);

    

    res.status(201).json({
        message: "user created successfully",
        user
    })




})






module.exports = router;