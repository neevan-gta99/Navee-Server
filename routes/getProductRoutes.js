import express from 'express';
import getProducts from '../controllers/getProductsController.js';
const router = express.Router();


router.get('/get-showcase-men-topwears', getProducts.showcaseMenTopWear);
router.get('/get-all-men-topwears', getProducts.allMenTopWear);
router.get('/showcase-lazy-load', getProducts.showcaseLazyLoad);

export default router;