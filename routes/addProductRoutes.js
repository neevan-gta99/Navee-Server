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
router.post('/men-topwear', upload.array("images", 10), singleProductImageUploader.singleUploads, addProduct.menTopwear);
router.post('/men-bottomwear', upload.array("images", 10), singleProductImageUploader.singleUploads, addProduct.menBottomwear);
router.post('/men-footwear', upload.array("images", 10), singleProductImageUploader.singleUploads, addProduct.menFootmwear);
router.post('/women-ethnic', upload.array("images", 10), singleProductImageUploader.singleUploads, addProduct.womenEthnic);
router.post('/women-western', upload.array("images", 10), singleProductImageUploader.singleUploads, addProduct.womenWestern);
router.post('/women-footwear', upload.array("images", 10), singleProductImageUploader.singleUploads, addProduct.womenFootwear);
router.post('/boys-brands', upload.array("images", 10), singleProductImageUploader.singleUploads, addProduct.boysBrands);
router.post('/girls-grands', upload.array("images", 10), singleProductImageUploader.singleUploads, addProduct.girlsGrands);
router.post('/mens-wa', upload.array("images", 10), singleProductImageUploader.singleUploads, addProduct.menWA);
router.post('/womens-wa', upload.array("images", 10), singleProductImageUploader.singleUploads, addProduct.womenWA);
router.post('/boys-wa', upload.array("images", 10), singleProductImageUploader.singleUploads, addProduct.boysWA);
router.post('/girls-wa', upload.array("images", 10), singleProductImageUploader.singleUploads, addProduct.girlsWA);
router.post('/bags', upload.array("images", 10), singleProductImageUploader.singleUploads, addProduct.bags);
router.post('/suitcases', upload.array("images", 10), singleProductImageUploader.singleUploads, addProduct.suitcases);
router.post('/luggage', upload.array("images", 10), singleProductImageUploader.singleUploads, addProduct.luggage);



//For Bulk Product
router.post('/men-topwear/bulk/csv', parser.busboyParserForCSV, parser.csvParser, product_Validator.sheetDataValidation, bulkProductsImagesUploader.allBulkUploader, addProduct.menTopwear);
router.post('/men-topwear/bulk/xlsx', parser.busboyParserForXL,bulkProductsImagesUploader.allBulkUploader, addProduct.menTopwear);


router.post('/men-bottomwear/bulk/csv', parser.busboyParserForCSV, parser.csvParser, product_Validator.sheetDataValidation, bulkProductsImagesUploader.allBulkUploader, addProduct.menBottomwear);
router.post('/men-bottomwear/bulk/xlsx', parser.busboyParserForXL,bulkProductsImagesUploader.allBulkUploader, addProduct.menBottomwear);

router.post('/men-footwear/bulk/csv', parser.busboyParserForCSV, parser.csvParser, product_Validator.sheetDataValidation, bulkProductsImagesUploader.allBulkUploader, addProduct.menFootmwear);
router.post('/men-footwear/bulk/xlsx', parser.busboyParserForXL,bulkProductsImagesUploader.allBulkUploader, addProduct.menFootmwear);

export default router;
