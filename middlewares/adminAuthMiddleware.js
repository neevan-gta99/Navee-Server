import jwt from 'jsonwebtoken';

const logout = (req, res) => {
  try {
    res.clearCookie('adminToken', {
      httpOnly: true,
      secure: false, // सीधे false सेट करें
      sameSite: 'strict'
    });
    res.status(200).json({ success: true, message: 'Logged out successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Logout failed' });
  }
};

const isTokenUserWithCookie = async (req, res, next) => {

  try {
    const token = req.cookies.adminToken;
    
    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'No authentication token provided'
      });
    }
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    
    if (!req.query.adminId) {
      req.admin = {
        adminId: decoded.adminId,
      };
      // console.log("auth mai aaye",decoded.sellerId)
    }

    // Security check if both query param and token exist
    // if (req.query.sellerId !== decoded.sellerId) {
    //   return res.status(403).json({
    //     success: false,
    //     message: 'Unauthorized access'
    //   });
    // }

    next();

  } catch (error) {
    res.clearCookie('adminToken');

    if (error instanceof jwt.TokenExpiredError) {
      return res.status(401).json({
        success: false,
        message: 'Session expired. Please login again.'
      });
    }

    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({
        success: false,
        message: 'Invalid session'
      });
    }

    console.error('Authentication error:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

const admin_Auths = {logout, isTokenUserWithCookie};
export default admin_Auths;