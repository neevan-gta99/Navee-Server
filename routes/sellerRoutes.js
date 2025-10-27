import express from 'express';
import { sellerRegister } from '../controllers/sellerRegisterController.js';
import { sellerLogin } from '../controllers/sellerLoginController.js';
import { getSeller } from '../controllers/sellerController.js';
import imageUploader from '../cloudinaryUploader/singleUploader.js'
import sellerAuths from '../middlewares/sellerAuthMiddleware.js'


const router = express.Router();

router.post('/register/check', sellerAuths.isSellerAlreadyRegistered);
router.post('/register', imageUploader.sellerRegisterUploads, sellerRegister);
router.post('/login', sellerLogin);
router.post('/logout', sellerAuths.logout);
router.get('/authentication', sellerAuths.checkAuthStatus );
router.get('/getInfo', sellerAuths.isTokenUserWithCookie, getSeller);

export default router;
