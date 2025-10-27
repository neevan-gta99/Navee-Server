import fs from "fs";
import csv from "csv-parser";
import { Readable } from "stream";
import Busboy from "busboy";

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
        // if (!header) return `column_${index}`;

        // ✅ Step 1: Trim
        let cleanedHeader = header.trim();

        // ✅ Step 2: Remove spaces and convert to PascalCase
        cleanedHeader = cleanedHeader
          .split(" ")
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join("");

        // Fallback if still empty
        // if (!cleanedHeader) return `column_${index}`;

        return cleanedHeader;
      },
      mapValues: ({ value }) => {
        if (typeof value === "string") {
          let cleanedValue = value.trim();

          // ✅ Only convert numeric strings
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
      // Inject global fields
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
      // ✅ Image count validation
      const validProducts = [];
      const failedProducts = [];

      results.forEach((product) => {
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

      console.log("✅ Parsed products:", validProducts.length);
      console.log("❌ Failed products:", failedProducts.length);

      next();
    })
    .on("error", (err) => {
      console.error("CSV parse error:", err);
      res.status(500).json({ error: "Failed to parse CSV" });
    });

};

function busboyParser(req, res, next) {
  const busboy = Busboy({ headers: req.headers });

  req.body = {};
  req.files = {};

  busboy.on("field", (name, value) => {
    req.body[name] = value;
  });

  busboy.on("file", (fieldname, file, info) => {
    const { filename, encoding, mimeType } = info;
    const chunks = [];

    file.on("data", (chunk) => chunks.push(chunk));

    file.on("end", () => {
      const buffer = Buffer.concat(chunks);

      if (fieldname === "sheet") {
        // ✅ Only one CSV expected — store as single object
        req.files.sheet = {
          filename,
          encoding,
          mimetype: mimeType,
          data: buffer,
          size: buffer.length,
        };
      } else if (fieldname === "images") {
        // ✅ Multiple images — store as array
        if (!req.files.images) req.files.images = [];
        req.files.images.push({
          filename,
          encoding,
          mimetype: mimeType,
          data: buffer,
          size: buffer.length,
        });
      } else {
        // Optional: handle other fields or log unknown ones
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

const parser = { csvParser, busboyParser };
export default parser;