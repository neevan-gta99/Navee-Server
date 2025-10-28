import sellerDTO from '../schemas/sellerSchema.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const checkCred = async (req, res) => {  // Note: Added `res` parameter
  const { sellerId, password } = req.body;

  try {
    // 🔍 Step 1: Find seller by sellerId
    const foundSeller = await sellerDTO.findOne({ sellerId: sellerId });

    if (!foundSeller) {
      return res.status(404).json({ message: "Seller ID does not exist" });  // Updated response
    }

    // 🔐 Step 2: Compare password
    const isMatch = await bcrypt.compare(password, foundSeller.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Incorrect password" });  // Updated response
    }

    // 🪙 Step 3: Generate JWT token
    const token = jwt.sign(
      {
        sellerId: foundSeller.sellerId,
        sellerMongoId: foundSeller._id,
        sellerName: foundSeller.fullName,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: '1h' }
    );

    // � Step 4: Set HTTP-only cookie
    res.cookie('token', token, {
      httpOnly: true,      // Prevent XSS attacks
      secure: true,        // HTTPS-only (enable in production)
      sameSite: 'None',  // CSRF protection
      maxAge: 3600000,     // 1hr expiry (auto-deletes)
    });

    // ✅ Success response
    return res.status(200).json({
      message: "Login successful",
      sellerId: foundSeller.sellerId,
      sellerName: foundSeller.fullName,
      // Note: Token is NOT sent in response body (it's in the cookie)
    });

  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Internal Server Error" });  // Updated response
  }
};

const seller_Login_Model = { checkCred };
export default seller_Login_Model;