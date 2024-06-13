const express = require('express');
const router = express.Router();
const cors = require('cors')
const { test, signupUser } = require('../controllers/autoController')

// middleware
router.use(
    cors({
        credentials: true,
        origin: true, // Allow request from any origin
    })
)

router.get('/', test)
router.post('/signup', signupUser)

module.exports = router