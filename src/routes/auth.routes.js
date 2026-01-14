const express = require('express');
const UserModel = require('../models/user.model');



const router = express.Router();


// register route //post
//login route //post
//user profile route //get

router.post('/register',  async (req,res)=>{
    const {username,password} = req.body;

    const user = await UserModel.create({
        username,password
    }) 


    res.status(201).json({
        message : "user created successfully",
        user
    })




})






module.exports = router;