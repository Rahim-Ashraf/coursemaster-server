const express = require('express');
const router = express.Router();
const authController = require('../../controllers/authController');
const { validateLogin, validateUser } = require('../../middleware/validator');

router.get('/', (req, res) => {
    res.send("dlfk jsdfkj sdkfj")
})

router.post(
    '/register',
    validateUser,
    authController.registerUser
)

router.post('/login', validateLogin, authController.loginUser)

module.exports = router;
