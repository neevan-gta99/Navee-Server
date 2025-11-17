import express from 'express';

import Admin_Controller from '../controllers/adminController.js';
import admin_Auths from '../middlewares/adminAuthMiddleware.js';

const router = express.Router();

router.post('/login', Admin_Controller.adminLogin);
router.post('/logout', admin_Auths.logout);
// router.get('/authentication', sellerAuths.checkAuthStatus );
router.get('/getInfo', admin_Auths.isTokenUserWithCookie, Admin_Controller.getAdmin);
// router.get('/db-migrate', Admin_Controller.dbMigrate);

export default router;