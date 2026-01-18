const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');
const multer = require('multer');
// const userModel = require('../models/user.model');
// const cookieParser = require('cookie-parser');



const storage = multer.memoryStorage();


router.post('/',
    authMiddleware,
    upload.single('image'),
    createPostController
);

module.exports = router;
