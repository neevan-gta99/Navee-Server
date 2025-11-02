import Size_Variant_Regex_Checker from "../utils/bulkUploadSizeVariantRegex.js";

async function sheetDataValidation(req, res, next) {

    if (!req.failedUploads) req.failedUploads = [];

    const validProducts = [];
    const failedProducts = [];

    const allResults = await Promise.all(
        req.products.map(async (product, productIndex) => {

            const expectedImageNames = product.Images.split(",").map(name => name.trim());

            const matchedImages = req.files.images.filter((file) =>
                expectedImageNames.includes(file.filename)
            );

            if (matchedImages.length !== expectedImageNames.length) {
                failedProducts.push({
                    ProductName: product.ProductName,
                    reason: "Images mismatch: May be Image Name wrong in sheet so this will mismatch from Image File",
                });

                return null;
            }

            try {
                const sizesString = product.Sizes;
                const allSizes = sizesString.split(",");
                Size_Variant_Regex_Checker.sizeVariantsRegex(allSizes);

                let totalStock = 0;

                product.variants = allSizes.map((sizeBlock) => {
                    const [size, ...colorChunks] = sizeBlock.split("-");
                    const colorPairs = colorChunks.join("-").split("/");

                    const variants = colorPairs.map((pair) => {
                        const [color, stockStr] = pair.split("=");
                        const stock = Number(stockStr);
                        const safeStock = isNaN(stock) ? 0 : stock;

                        totalStock += safeStock;

                        return {
                            color: color?.trim() || "Unknown",
                            stock: safeStock,
                        };
                    });

                    return { size: size.trim(), variants };
                });

                product.totalStock = totalStock;

                validProducts.push(product);
                 
            } catch (err) {
                failedProducts.push({
                    ProductName: product.ProductName,
                    reason: `Size variant error: ${err.message}`,
                });

                return null;

            }
        })
    );

    req.products = validProducts;
    req.failedUploads.push(...failedProducts);
    next();
}

const product_Validator = { sheetDataValidation };
export default product_Validator; 
