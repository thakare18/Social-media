const express = require('express');
const token = require('jsonwebtoken');
const router = express.Router();
const userModel = require('../models/user.model');
const authMiddleware = require('../middlewares/auth.middleware');
const multer = require('multer');
const { createPostController } = require('../controllers/post.controller');


// post /api/posts/ {protected route}// protected route need token 

const upload = multer({ storage: multer.memoryStorage() });

router.post('/',authMiddleware,
upload.single('image'),
    createPostController// route level middleware
)




module.exports = router;