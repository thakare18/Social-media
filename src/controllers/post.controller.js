const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const userModel = require('../models/user.model');
// const cookieParser = require('cookie-parser');

router.post('/', async (req, res) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            message: "Unauthorized access, please login first"
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.jwt_secret);

        const user = await userModel.findOne({
            _id: decoded.userId
        });

    } catch (err) {
        return res.status(401).json({
            message: "Invalid token, please login again"
        });
    }
});

module.exports = router;
