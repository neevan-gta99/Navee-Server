import fs from "fs";
import csv from "csv-parser";
import { Readable } from "stream";
import Busboy from "busboy";
import all_Codes from "../utils/codes.js";

const csvParser = (req, res, next) => {
  const csvFile = req.files.sheet;

  if (!csvFile || !csvFile.data) {
    return res.status(400).json({ error: "Sheet file missing or invalid" });
  }

  const results = [];
  const stream = Readable.from(csvFile.data);

  stream
    .pipe(csv({
      mapHeaders: ({ header, index }) => {

        let cleanedHeader = header.trim();
        cleanedHeader = cleanedHeader
          .split(" ")
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join("");

        return cleanedHeader;
      },
      mapValues: ({ value }) => {
        if (typeof value === "string") {
          let cleanedValue = value.trim();

          if (!isNaN(cleanedValue) && cleanedValue !== "") {
            return Number(cleanedValue);
          }

          return cleanedValue;
        }

        return value;
      }
      ,
      skipEmptyLines: true,
      strict: false
    }))
    .on("data", (row) => {
      results.push(row);
    })
    .on("end", () => {

      if (req.body && Object.keys(req.body).length > 0) {
        results.forEach((product) => {
          for (const key in req.body) {
            
            if (!product.hasOwnProperty(key)) {
              product[key] = req.body[key];
            }
          }
        });
      }

      if (!req.failedUploads) req.failedUploads = [];

      const validProducts = [];
      const failedProducts = [];

      results.forEach((product) => {

        product.Sizes = product.Sizes.replace(/\s+/g, "");
        

        const imageNames = typeof product.Images === "string"
          ? product.Images.split(",").map(name => name.trim())
          : [];

        if (imageNames.length > 10) {
          failedProducts.push({
            ProductName: product.ProductName || product.name || "Unknown",
            reason: "Upload failed because product has more than 10 images",
          });
        } else {
          validProducts.push(product);
        }
      });

      req.products = validProducts;
      req.failedUploads.push(...failedProducts);

      const withoutSpacedProCategory = req.body.collection.replace(/\s+/g, "");

      if (all_Codes.miniCategoryMap[withoutSpacedProCategory]) {
        validProducts.map((product) => {
          if (product.Category) {
            product.Category = all_Codes.miniCategoryMap[withoutSpacedProCategory];
          }
        });
      }

      next();
    })
    .on("error", (err) => {
      console.error("CSV parse error:", err);
      res.status(500).json({ error: "Failed to parse CSV" });
    });

};

function busboyParserForCSV(req, res, next) {
  const busboy = Busboy({ headers: req.headers });

  req.body = {};
  req.files = {};

  busboy.on("field", (name, value) => {
    if (name === "features") {
      req.body.features = value.split(",").map(f => f.trim()); // ✅ Convert to array
    } else {
      req.body[name] = value;
    }
  });


  busboy.on("file", (fieldname, file, info) => {
    const { filename, encoding, mimeType } = info;
    const chunks = [];

    file.on("data", (chunk) => chunks.push(chunk));

    file.on("end", () => {
      const buffer = Buffer.concat(chunks);

      if (fieldname === "sheet") {
        req.files.sheet = {
          filename,
          encoding,
          mimetype: mimeType,
          data: buffer,
          size: buffer.length,
        };
      } else if (fieldname === "images") {
        if (!req.files.images) req.files.images = [];
        req.files.images.push({
          filename,
          encoding,
          mimetype: mimeType,
          data: buffer,
          size: buffer.length,
        });
      } else {
        console.warn(`Unexpected file field: ${fieldname}`);
      }
    });

    file.on("error", (err) => {
      console.error("File stream error:", err);
    });
  });


  busboy.on("finish", () => {
    console.log("Busboy finished, files:", Object.keys(req.files));

    next();
  });

  busboy.on("error", (err) => {
    console.error("Busboy error:", err);
    res.status(500).json({ error: "File upload failed" });
  });

  req.pipe(busboy);
}

function busboyParserForXL(req, res, next) {
  const busboy = Busboy({ headers: req.headers });

  req.body = {};
  req.files = {};


  busboy.on("field", (name, value) => {
    console.log("Bus boy in XL");

    if (name === "failedUploadsFromClient") {
      req.failedUploadsFromClient = JSON.parse(value);
      console.log(req.failedUploadsFromClient);
    } else if (name === "products") {
      try {
        req.products = JSON.parse(value);
      } catch (err) {
        console.error("❌ Invalid products JSON");
        return res.status(400).json({ error: "Invalid products JSON" });
      }
    } else if (name === "features") {
      try {
        req.body.features = JSON.parse(value); // ✅ Parse array
      } catch (err) {
        console.error("❌ Invalid features JSON");
        req.body.features = []; // fallback
      }
    } else {
      req.body[name] = value;
    }
  });


  busboy.on("file", (fieldname, file, info) => {
    const { filename, encoding, mimeType } = info;
    const chunks = [];

    file.on("data", (chunk) => chunks.push(chunk));

    file.on("end", () => {
      const buffer = Buffer.concat(chunks);

      if (fieldname === "images") {
        if (!req.files.images) req.files.images = [];
        req.files.images.push({
          filename,
          encoding,
          mimetype: mimeType,
          data: buffer,
          size: buffer.length,
        });
      } else {
        console.warn(`⚠️ Unexpected file field: ${fieldname}`);
      }
    });

    file.on("error", (err) => {
      console.error("❌ File stream error:", err);
    });
  });

  busboy.on("finish", () => {
    if (Array.isArray(req.products)) {
      req.products.forEach((product) => {
        product.sellerID = req.body.sellerID;
      });
    }
    // console.log("✅ Busboy finished. Products:", Object.keys(req.files));
    next();
  });

  busboy.on("error", (err) => {
    console.error("❌ Busboy error:", err);
    res.status(500).json({ error: "File upload failed" });
  });

  req.pipe(busboy);
}





const parser = { csvParser, busboyParserForCSV, busboyParserForXL };
export default parser;