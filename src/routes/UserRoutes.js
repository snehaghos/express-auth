const express = require('express');
const { getAllUsers, getUserById, updateUser, deleteUser } = require('../controllers/UserController');
const { authenticateToken } = require('../middlewares/AuthMiddleware');

const router = express.Router();

router.get('/', authenticateToken, getAllUsers);
router.get('/:id', authenticateToken, getUserById);
router.put('/:id', authenticateToken, updateUser);
router.delete('/:id', authenticateToken, deleteUser);

module.exports = router;