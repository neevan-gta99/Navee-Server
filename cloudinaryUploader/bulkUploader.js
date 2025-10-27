import path from "path";
import fs from "fs/promises";
import cloudinary from "../utils/cloudinary.js";
import ID_Generator from "../utils/sequenceIdGenerator.js";

const menTopWearUploadsBulk = async function (req, res, next) {
  
  try {
    
    req.products = await Promise.all(
      req.products.map(async (product, productIndex) => {
        const folderName = product.Category;
        const subFolderName = product.SubCategory;
        const proCategory = product.Category;
        
        product.productID = await ID_Generator.getNextId("mtr", proCategory.replace(/\s+/g, ""));
        product.gender = "Male";
        
        const matchedImages = req.files.images.filter((file) =>
          product.Images.includes(file.filename)
      );
      console.log( "ye rhi saari matched images", matchedImages);

        const uploadResults = await Promise.all(
          matchedImages.map((file, index) => {

            const publicId = `${product.productID}img${index + 1}`;
            const fullFolder = `${folderName}/${subFolderName}`;


            return new Promise((resolve, reject) => {
              const stream = cloudinary.uploader.upload_stream({
                public_id: publicId,
                folder: fullFolder,
                invalidate: true,
                overwrite: true,
              }, (error, result) => {
                if (error) return reject(error);
                resolve(result);
              });

              stream.end(file.data);
            });
          })
        );

        product.uploadedImages = uploadResults.map((r, index) => {
          const publicId = `${product.productID}img${index + 1}`;
          const fullPublicId = `${folderName}/${subFolderName}/${publicId}`;
          return {
            original: r.secure_url,
            optimizeUrl: cloudinary.url(fullPublicId, {
              version: r.version,
              fetch_format: "auto",
              quality: "auto",
              secure: true,
            }),
            autoCropUrl: cloudinary.url(fullPublicId, {
              version: r.version,
              crop: "auto",
              gravity: "auto",
              width: 500,
              height: 500,
              secure: true,
            }),
          };
        });

        console.log(product.uploadedImages);
        return product;
      })
    );
    req.productType = "bulk";
    next();
  }
  catch (error) {
    console.error("Cloudinary upload error:", error);
    res.status(500).json({ error: "Upload failed", details: error.message });
  }

};

const bulkProductsImagesUploader = { menTopWearUploadsBulk }
export default bulkProductsImagesUploader;