const express = require('express');
const { register, login, getProfile } = require('../controllers/AuthController');
const { authenticateToken } = require('../middlewares/AuthMiddleware');

const router = express.Router();

router.post('/register', register);

router.post('/login', login);

router.get('/me', authenticateToken, getProfile);

module.exports = router;