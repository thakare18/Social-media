const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');
// const userModel = require('../models/user.model');
// const cookieParser = require('cookie-parser');

router.post('/',authMiddleware);

module.exports = router;
