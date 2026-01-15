const express = require('express');
const UserModel = require('../models/user.model');
const jwt = require('jsonwebtoken');



async function registerController(req, res) {
    const { username, password } = req.body;

    const isUserAlredyExist = await UserModel.findOne({ username })

    if (isUserAlredyExist) {
        return res.status(400).json({ message: "User already exists" })
    }

    const user = await UserModel.create({ username, password });
    const token = jwt.sign( { userId: user._id }, process.env.jwt_secret)
    res.cookie("token", token);

    return res.status(201).json({
        message: "user registered successfully"    });
}

async function loginController(req, res) {
    const { username, password } = req.body;

    const user = await UserModel.findOne({ username});

    if (!user) {
        return res.status(400).json({ message: "User not found" });
    }

    const isPasswordIsValid = user.password === password;

    if (!isPasswordIsValid) {
        return res.status(400).json({ message: "Invalid Password" });
    }

    const token = jwt.sign({userId: user._id}, process.env.jwt_secret);
    res.cookie("token", token);

    return res.status(200).json({ message: "User logged in successfully" });
}





module.exports = {
    registerController,
    loginController
}