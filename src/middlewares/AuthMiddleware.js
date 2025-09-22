const User = require('../models/User');
const { verifyAccessToken } = require('../utils/generateToken');

const authenticateToken = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      return res.status(401).json({ error: 'A=ccess token needed' });
    }

    const decoded = verifyAccessToken(token); //  verifyAccessToken
    const user = await User.findById(decoded.id).select('-password'); 
    
    if (!user) {
      return res.status(401).json({ error: 'Invalid token' });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error('Token verification error:', error.message);
    return res.status(403).json({ error: 'Invalid or expired token' });
  }
};

module.exports = {
  authenticateToken
};