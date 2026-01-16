const express = require('express');
const {registerController, loginController} = require('../controllers/auth.controller');



const router = express.Router();


// register route //post
//login route //post
//user profile route //get

router.post('/register', registerController)
router.post('/login',loginController)


module.exports = router;