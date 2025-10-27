import express from 'express';
import multer from "multer";
import { getAllUsers } from '../controllers/testController.js';
// import imageUploader from '../uploader/cloudinaryUpload.js'

const router = express.Router();

const upload = multer({ dest: "temp/" });

router.get('/getAllUsers', getAllUsers);
// router.post('/imageUpload', upload.array("images", 10) , imageUploader);

export default router;
