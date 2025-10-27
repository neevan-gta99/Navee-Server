import express from 'express';
import addProduct  from '../controllers/addProductsController.js';
import multer from 'multer';
import singleProductImageUploader from '../cloudinaryUploader/singleUploader.js'
import bulkProductsImagesUploader from '../cloudinaryUploader/bulkUploader.js'
import parser from '../middlewares/parserMiddleware.js';
import product_Validator from '../middlewares/productValidationMiddleware.js';


const router = express.Router();
const upload = multer({ dest: 'temp/' });

// For Single Product 
router.post('/men-topwear', upload.array("images", 10), singleProductImageUploader.menTopWearUploads, addProduct.menTopwear);
router.post('/men-bottomwear', upload.array("images", 10), singleProductImageUploader.menBottomWearUploads, addProduct.menBottomwear);
router.post('/men-footwear', upload.array("images", 10), singleProductImageUploader.menFootWearUploads, addProduct.menFootmwear);
router.post('/women-ethnic', upload.array("images", 10), singleProductImageUploader.womenEthnicUploads, addProduct.womenEthnic);
router.post('/women-western', upload.array("images", 10), singleProductImageUploader.womenWesternUploads, addProduct.womenWestern);
router.post('/women-footwear', upload.array("images", 10), singleProductImageUploader.womenFootWearUploads, addProduct.womenFootwear);
router.post('/boys-brands', upload.array("images", 10), singleProductImageUploader.boysBrandsUploads, addProduct.boysBrands);
router.post('/girls-grands', upload.array("images", 10), singleProductImageUploader.girlsGrandsUploads, addProduct.girlsGrands);
router.post('/mens-wa', upload.array("images", 10), singleProductImageUploader.menWAUploads, addProduct.menWA);
router.post('/womens-wa', upload.array("images", 10), singleProductImageUploader.womenWAUploads, addProduct.womenWA);
router.post('/boys-wa', upload.array("images", 10), singleProductImageUploader.boysWAUploads, addProduct.boysWA);
router.post('/girls-wa', upload.array("images", 10), singleProductImageUploader.girlsWAUploads, addProduct.girlsWA);
router.post('/bags', upload.array("images", 10), singleProductImageUploader.bagsUploads, addProduct.bags);
router.post('/suitcases', upload.array("images", 10), singleProductImageUploader.suitcaseUploads, addProduct.suitcases);
router.post('/luggage', upload.array("images", 10), singleProductImageUploader.luggageUploads, addProduct.luggage);



//For Bulk Product
router.post('/men-topwear/bulk', parser.busboyParser, parser.csvParser, product_Validator.sheetDataValidation, bulkProductsImagesUploader.menTopWearUploadsBulk, addProduct.menTopwear);

export default router;
