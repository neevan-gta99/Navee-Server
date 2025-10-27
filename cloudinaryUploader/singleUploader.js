import path from "path";
import fs from "fs/promises";
import cloudinary from "../utils/cloudinary.js";
import multer from "multer";
import ID_Generator from "../utils/sequenceIdGenerator.js";
import multer_Temp_Storage from "../utils/multerTempStorage.js";

const storage = multer_Temp_Storage.storage;

const upload = multer({ storage }).fields([
  { name: "gstDoc", maxCount: 1 },
  { name: "panDoc", maxCount: 1 },
]);

const menTopWearUploads = async function (req, res, next) {
  const folderName = req.body.collection || "Uncategorized";
  const subFolderName = req.body.subCategory;
  const proCategory = req.body.category;

  const productId = await ID_Generator.getNextId("mtr", proCategory.replace(/\s+/g, ""));

  req.body.productID = productId;

  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: "No files uploaded" });
    }

    const uploadResults = await Promise.all(
      req.files.map((file, index) => {
        const publicId = `${productId}img${index + 1}`;
        return cloudinary.uploader.upload(file.path, {
          public_id: publicId,
          folder: `${folderName}/${subFolderName}`,
          invalidate: true,
          overwrite: true,
        });
      })
    );

   
    await Promise.all(req.files.map(file => fs.unlink(file.path)));

    req.uploadedImages = uploadResults.map((r, index) => {
      const publicId = `${productId}img${index + 1}`;
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

    next(); 
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    res.status(500).json({ error: "Upload failed", details: error.message });
  }
};


const menBottomWearUploads = async function (req, res, next) {
  const folderName = req.body.collection || "Uncategorized";
  const proCategory = req.body.category;

  const productId = await ID_Generator.getNextId("mbr", proCategory.replace(/\s+/g, ""));

  req.body.productID = productId;
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: "No files uploaded" });
    }
    let count = 1;
    const uploadResults = await Promise.all(
      req.files.map((file, index) => {
        const publicId = `${productId}img${index + 1}`;

        return cloudinary.uploader.upload(file.path, {
          public_id: publicId,
          folder: folderName,
        });
      })
    );

    
    await Promise.all(req.files.map(file => fs.unlink(file.path)));

    req.uploadedImages = uploadResults.map((r, index) => {
      const publicId = `${productId}img${index + 1}`;
      const fullPublicId = `${folderName}/${publicId}`; 

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

    next(); 
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    res.status(500).json({ error: "Upload failed", details: error.message });
  }
};

const menFootWearUploads = async function (req, res, next) {
  const folderName = req.body.collection || "Uncategorized";
  const proCategory = req.body.category;

  const productId = await ID_Generator.getNextId("mfr", proCategory.replace(/\s+/g, ""));

  req.body.productID = productId;
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: "No files uploaded" });
    }
    let count = 1;
    const uploadResults = await Promise.all(
      req.files.map((file, index) => {
        const publicId = `${productId}img${index + 1}`;

        return cloudinary.uploader.upload(file.path, {
          public_id: publicId,
          folder: folderName,
        });
      })
    );

    await Promise.all(req.files.map(file => fs.unlink(file.path)));

    req.uploadedImages = uploadResults.map((r, index) => {
      const publicId = `${productId}img${index + 1}`;
      const fullPublicId = `${folderName}/${publicId}`; 

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

    next(); 
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    res.status(500).json({ error: "Upload failed", details: error.message });
  }
};

const womenEthnicUploads = async function (req, res, next) {
  const folderName = req.body.collection || "Uncategorized";
  const proCategory = req.body.category;

  const productId = await ID_Generator.getNextId("weth", proCategory.replace(/\s+/g, ""));

  req.body.productID = productId;
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: "No files uploaded" });
    }
    let count = 1;
    const uploadResults = await Promise.all(
      req.files.map((file, index) => {
        const publicId = `${productId}img${index + 1}`;

        return cloudinary.uploader.upload(file.path, {
          public_id: publicId,
          folder: folderName,
        });
      })
    );

    
    await Promise.all(req.files.map(file => fs.unlink(file.path)));

    req.uploadedImages = uploadResults.map((r, index) => {
      const publicId = `${productId}img${index + 1}`;
      const fullPublicId = `${folderName}/${publicId}`; 

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

    next();
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    res.status(500).json({ error: "Upload failed", details: error.message });
  }
};

const womenWesternUploads = async function (req, res, next) {
  const folderName = req.body.collection || "Uncategorized";
  const proCategory = req.body.category;

  const productId = await ID_Generator.getNextId("wwtn", proCategory.replace(/\s+/g, ""));

  req.body.productID = productId;
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: "No files uploaded" });
    }
    let count = 1;
    const uploadResults = await Promise.all(
      req.files.map((file, index) => {
        const publicId = `${productId}img${index + 1}`;

        return cloudinary.uploader.upload(file.path, {
          public_id: publicId,
          folder: folderName,
        });
      })
    );

    
    await Promise.all(req.files.map(file => fs.unlink(file.path)));

    req.uploadedImages = uploadResults.map((r, index) => {
      const publicId = `${productId}img${index + 1}`;
      const fullPublicId = `${folderName}/${publicId}`; 

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
    next();

  } catch (error) {
    console.error("Cloudinary upload error:", error);
    res.status(500).json({ error: "Upload failed", details: error.message });
  }
};

const womenFootWearUploads = async function (req, res, next) {
  const folderName = req.body.collection || "Uncategorized";
  const proCategory = req.body.category;

  const productId = await ID_Generator.getNextId("wftr", proCategory.replace(/\s+/g, ""));

  req.body.productID = productId;
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: "No files uploaded" });
    }
    let count = 1;
    const uploadResults = await Promise.all(
      req.files.map((file, index) => {
        const publicId = `${productId}img${index + 1}`;

        return cloudinary.uploader.upload(file.path, {
          public_id: publicId,
          folder: folderName,
        });
      })
    );

    // Clean up temp files
    await Promise.all(req.files.map(file => fs.unlink(file.path)));

   req.uploadedImages = uploadResults.map((r, index) => {
      const publicId = `${productId}img${index + 1}`;
      const fullPublicId = `${folderName}/${publicId}`; 

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

    next(); 

  } catch (error) {
    console.error("Cloudinary upload error:", error);
    res.status(500).json({ error: "Upload failed", details: error.message });
  }
};

const boysBrandsUploads = async function (req, res, next) {
  const folderName = req.body.collection || "Uncategorized";
  const proCategory = req.body.category;

  const productId = await ID_Generator.getNextId("bbds", proCategory.replace(/\s+/g, ""));

  req.body.productID = productId;
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: "No files uploaded" });
    }
    let count = 1;
    const uploadResults = await Promise.all(
      req.files.map((file, index) => {
        const publicId = `${productId}img${index + 1}`;

        return cloudinary.uploader.upload(file.path, {
          public_id: publicId,
          folder: folderName,
        });
      })
    );

    // Clean up temp files
    await Promise.all(req.files.map(file => fs.unlink(file.path)));

   req.uploadedImages = uploadResults.map((r, index) => {
      const publicId = `${productId}img${index + 1}`;
      const fullPublicId = `${folderName}/${publicId}`; 

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

    next(); 

  } catch (error) {
    console.error("Cloudinary upload error:", error);
    res.status(500).json({ error: "Upload failed", details: error.message });
  }
};

const girlsGrandsUploads = async function (req, res, next) {
  const folderName = req.body.collection || "Uncategorized";
  const proCategory = req.body.category;

  const productId = await ID_Generator.getNextId("ggds", proCategory.replace(/\s+/g, ""));

  req.body.productID = productId;
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: "No files uploaded" });
    }
    let count = 1;
    const uploadResults = await Promise.all(
      req.files.map((file, index) => {
        const publicId = `${productId}img${index + 1}`;

        return cloudinary.uploader.upload(file.path, {
          public_id: publicId,
          folder: folderName,
        });
      })
    );

    // Clean up temp files
    await Promise.all(req.files.map(file => fs.unlink(file.path)));

   req.uploadedImages = uploadResults.map((r, index) => {
      const publicId = `${productId}img${index + 1}`;
      const fullPublicId = `${folderName}/${publicId}`; 

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

    next(); 

  } catch (error) {
    console.error("Cloudinary upload error:", error);
    res.status(500).json({ error: "Upload failed", details: error.message });
  }
};

const menWAUploads = async function (req, res, next) {
  const folderName = req.body.collection || "Uncategorized";
  const proCategory = req.body.category;

  const productId = await ID_Generator.getNextId("mwa", proCategory.replace(/\s+/g, ""));

  req.body.productID = productId;
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: "No files uploaded" });
    }
    let count = 1;
    const uploadResults = await Promise.all(
      req.files.map((file, index) => {
        const publicId = `${productId}img${index + 1}`;

        return cloudinary.uploader.upload(file.path, {
          public_id: publicId,
          folder: folderName,
        });
      })
    );

   
    await Promise.all(req.files.map(file => fs.unlink(file.path)));

   req.uploadedImages = uploadResults.map((r, index) => {
      const publicId = `${productId}img${index + 1}`;
      const fullPublicId = `${folderName}/${publicId}`; 

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

    next();

  } catch (error) {
    console.error("Cloudinary upload error:", error);
    res.status(500).json({ error: "Upload failed", details: error.message });
  }
};

const womenWAUploads = async function (req, res, next) {
  const folderName = req.body.collection || "Uncategorized";
  const proCategory = req.body.category;

  const productId = await ID_Generator.getNextId("wwa", proCategory.replace(/\s+/g, ""));

  req.body.productID = productId;
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: "No files uploaded" });
    }
    let count = 1;
    const uploadResults = await Promise.all(
      req.files.map((file, index) => {
        const publicId = `${productId}img${index + 1}`;

        return cloudinary.uploader.upload(file.path, {
          public_id: publicId,
          folder: folderName,
        });
      })
    );

    
    await Promise.all(req.files.map(file => fs.unlink(file.path)));

    req.uploadedImages = uploadResults.map((r, index) => {
      const publicId = `${productId}img${index + 1}`;
      const fullPublicId = `${folderName}/${publicId}`; 

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

    next(); 

  } catch (error) {
    console.error("Cloudinary upload error:", error);
    res.status(500).json({ error: "Upload failed", details: error.message });
  }
};

const boysWAUploads = async function (req, res, next) {
  const folderName = req.body.collection || "Uncategorized";
  const proCategory = req.body.category;

  const productId = await ID_Generator.getNextId("bwa", proCategory.replace(/\s+/g, ""));

  req.body.productID = productId;
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: "No files uploaded" });
    }
    let count = 1;
    const uploadResults = await Promise.all(
      req.files.map((file, index) => {
        const publicId = `${productId}img${index + 1}`;

        return cloudinary.uploader.upload(file.path, {
          public_id: publicId,
          folder: folderName,
        });
      })
    );

  
    await Promise.all(req.files.map(file => fs.unlink(file.path)));

    req.uploadedImages = uploadResults.map((r, index) => {
      const publicId = `${productId}img${index + 1}`;
      const fullPublicId = `${folderName}/${publicId}`; 

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

    next();
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    res.status(500).json({ error: "Upload failed", details: error.message });
  }
};
const girlsWAUploads = async function (req, res, next) {
  const folderName = req.body.collection || "Uncategorized";
  const proCategory = req.body.category;

  const productId = await ID_Generator.getNextId("mtr", proCategory.replace(/\s+/g, ""));

  req.body.productID = productId;
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: "No files uploaded" });
    }
    let count = 1;
    const uploadResults = await Promise.all(
      req.files.map((file, index) => {
        const publicId = `${productId}img${index + 1}`;

        return cloudinary.uploader.upload(file.path, {
          public_id: publicId,
          folder: folderName,
        });
      })
    );

    
    await Promise.all(req.files.map(file => fs.unlink(file.path)));

    req.uploadedImages = uploadResults.map((r, index) => {
      const publicId = `${productId}img${index + 1}`;
      const fullPublicId = `${folderName}/${publicId}`; 

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

    next(); 
    
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    res.status(500).json({ error: "Upload failed", details: error.message });
  }
};

const bagsUploads = async function (req, res, next) {
  const folderName = req.body.collection || "Uncategorized";
  const proCategory = req.body.category;

  const productId = await ID_Generator.getNextId("bgs", proCategory.replace(/\s+/g, ""));

  req.body.productID = productId;
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: "No files uploaded" });
    }
    let count = 1;
    const uploadResults = await Promise.all(
      req.files.map((file, index) => {
        const publicId = `${productId}img${index + 1}`;

        return cloudinary.uploader.upload(file.path, {
          public_id: publicId,
          folder: folderName,
        });
      })
    );

    // Clean up temp files
    await Promise.all(req.files.map(file => fs.unlink(file.path)));

    req.uploadedImages = uploadResults.map((r, index) => {
      const publicId = `${productId}img${index + 1}`;
      const fullPublicId = `${folderName}/${publicId}`; 

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

    next(); 

  } catch (error) {
    console.error("Cloudinary upload error:", error);
    res.status(500).json({ error: "Upload failed", details: error.message });
  }
};

const suitcaseUploads = async function (req, res, next) {
  const folderName = req.body.collection || "Uncategorized";
  const proCategory = req.body.category;

  const productId = await ID_Generator.getNextId("sts", proCategory.replace(/\s+/g, ""));

  req.body.productID = productId;
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: "No files uploaded" });
    }
    let count = 1;
    const uploadResults = await Promise.all(
      req.files.map((file, index) => {
        const publicId = `${productId}img${index + 1}`;

        return cloudinary.uploader.upload(file.path, {
          public_id: publicId,
          folder: folderName,
        });
      })
    );

    
    await Promise.all(req.files.map(file => fs.unlink(file.path)));

    req.uploadedImages = uploadResults.map((r, index) => {
      const publicId = `${productId}img${index + 1}`;
      const fullPublicId = `${folderName}/${publicId}`; 

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

    next(); 

  } catch (error) {
    console.error("Cloudinary upload error:", error);
    res.status(500).json({ error: "Upload failed", details: error.message });
  }
};

const luggageUploads = async function (req, res, next) {
  const folderName = req.body.collection || "Uncategorized";
  const proCategory = req.body.category;

  const productId = await ID_Generator.getNextId("lgs", proCategory.replace(/\s+/g, ""));

  req.body.productID = productId;
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: "No files uploaded" });
    }
    let count = 1;
    const uploadResults = await Promise.all(
      req.files.map((file, index) => {
        const publicId = `${productId}img${index + 1}`;

        return cloudinary.uploader.upload(file.path, {
          public_id: publicId,
          folder: folderName,
        });
      })
    );

    
    await Promise.all(req.files.map(file => fs.unlink(file.path)));

   req.uploadedImages = uploadResults.map((r, index) => {
      const publicId = `${productId}img${index + 1}`;
      const fullPublicId = `${folderName}/${publicId}`; 

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

    next();
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    res.status(500).json({ error: "Upload failed", details: error.message });
  }
};


export const sellerRegisterUploads = async (req, res, next) => {
  upload(req, res, async function (err) {
    if (err) {
      return res.status(400).json({ message: "File upload error", error: err.message });
    }

    req.body = req.body || {};

    const sellerId = await ID_Generator.getNextId("slr", "NaveeSeller");
    req.body.sellerID = sellerId;

    try {
      const gstFile = req.files?.gstDoc?.[0];
      const panFile = req.files?.panDoc?.[0];

      if (!gstFile || !panFile) {
        return res.status(400).json({ message: "Missing GST or PAN document" });
      }

      const nameOfSeller = req.body.fullName;
      const gstUpload = await cloudinary.uploader.upload(gstFile.path, {
        folder: `SellerDocs/${nameOfSeller}`,
        public_id: `${sellerId}_gst`,
      });

      const panUpload = await cloudinary.uploader.upload(panFile.path, {
        folder: `SellerDocs/${nameOfSeller}`,
        public_id: `${sellerId}_pan`,
      });

      // ✅ Inject URLs into req.body
      req.body.gstDoc = gstUpload.secure_url;
      req.body.panDoc = panUpload.secure_url;

      // ✅ Cleanup temp files
      await Promise.all([
        fs.unlink(gstFile.path),
        fs.unlink(panFile.path),
      ]);

      next(); // ✅ Pass control to DB logic
    } catch (error) {
      console.error("Upload middleware error:", error);
      res.status(500).json({ message: "Upload failed", error: error.message });
    }
  });
};


const singleProductImageUploader = { menTopWearUploads, menBottomWearUploads, menFootWearUploads, womenEthnicUploads, womenWesternUploads, womenFootWearUploads, boysBrandsUploads, girlsGrandsUploads, menWAUploads, womenWAUploads, boysWAUploads, girlsWAUploads, bagsUploads, suitcaseUploads, luggageUploads, sellerRegisterUploads }
export default singleProductImageUploader;
