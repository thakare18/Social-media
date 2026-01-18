const express = require('express');
const token = require('jsonwebtoken');
const router = express.Router();
const userModel = require('../models/user.model');



// post /api/posts/ {protected route}// protected route need token 


router.post('/', async (req,res)=>{
    const token = req.cookies.token;

    if (!token){
        return res.status(401).json({
            message: "Unauthorized access, please login first"
        })
    }

    try{
        const decoded = jwt.verify(token, process.env.jwt_secret);
        const user = await userModel.findOne({
            _id: decoded.userId
        })
        // req.user = user;// attach user to request object
    } catch(err){
        return res.status(401).json({
            message: "Invalid token, please login again"
        });
    }





})




module.exports = router;