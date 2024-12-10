const express = require('express')
// controller function 

const {loginUser, signupUser} = require('../controllers/userContoller')

const router = express.Router()


// login
router.post('/login', loginUser)
// sign up
router.post('/signup', signupUser)


module.exports = router