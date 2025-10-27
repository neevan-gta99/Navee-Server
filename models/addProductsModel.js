import { mensTopwearDTO } from '../schemas/productsSchema/menTopWearSchema.js';
import { mensBottomwearDTO } from '../schemas/productsSchema/menBottomWearSchema.js';
import { mensFootwearDTO } from '../schemas/productsSchema/menFootWearSchema.js';
import { womensEthnicDTO } from '../schemas/productsSchema/womenEthnicSchema.js';
import { womensWesternDTO } from '../schemas/productsSchema/womenWesternSchema.js';
import { womensFootwearDTO } from '../schemas/productsSchema/womenFootwearSchema.js';
import { boysBrandsDTO } from '../schemas/productsSchema/boysBrandsSchema.js';
import { girlsGrandsDTO } from '../schemas/productsSchema/girlsGrandsSchema.js';
import { mensWADTO } from '../schemas/productsSchema/mensWASchema.js';
import { womensWADTO } from '../schemas/productsSchema/womensWASchema.js';
import { boysWADTO } from '../schemas/productsSchema/boysWASchema.js';
import { girlsWADTO } from '../schemas/productsSchema/girlsWASchema.js';
import { bagsDTO } from '../schemas/productsSchema/bagsSchema.js';
import { suitcasesDTO } from '../schemas/productsSchema/suitcasesSchema.js';
import { luggageDTO } from '../schemas/productsSchema/luggageSchema.js';

import buildDTO from '../DTOs/productDTOs.js';
import Size_Variant_Regex_Checker from '../utils/bulkUploadSizeVariantRegex.js';

const addMenTopwear = async (req) => {
    if (req.productType === "bulk") {
        const rejectedProducts = [];

        const results = await Promise.allSettled(
            req.products.map(async (product) => {
                try {
                    console.log("Yaha aaya Model mai");
                    console.log(product.ProductName);
                    const menTop = await buildDTO.buildMensTopwearDTO(product, product.uploadedImages);
                    await menTop.save();
                    return menTop.productID;
                } catch (err) {
                    console.log("Error pakad li", err);
                    const identifier = product.ProductName || product.productID || "Unknown Product";
                    rejectedProducts.push(product);
                    throw new Error(`Product "${identifier}" failed: ${err.message}`);
                }
            })
        );

        const success = results
            .filter(r => r.status === "fulfilled")
            .map(r => r.value);

        const failedFromSave = results
            .filter(r => r.status === "rejected")
            .map(r => r.reason.message);

        const failedFromValidation = req.failedUploads.map(r => `${r.ProductName} failed: ${r.reason}`);

        const failed = [...failedFromValidation, ...failedFromSave];

        console.log("Success:", success);
        console.log("Failed:", failed);

        return { success, failed };
    }


    // Single product flow
    else {
        const body = req.body;

        if (typeof body.variants === "string") {
            try {
                body.variants = JSON.parse(body.variants);
            } catch (err) {
                throw new Error("Invalid variants format");
            }
        }

        body.price = Number(body.price);
        body.discount = Number(body.discount);

        const menTop = buildDTO.buildMensTopwearDTO(body, body.uploadedImages);
        await menTop.save();

        return { success: [menTop.productID], failed: [] };
    }
};



const addMenBottomwear = async (req) => {


    const body = req.body;

    console.log(body);

    if (typeof body.variants === "string") {
        try {
            body.variants = JSON.parse(body.variants);
        } catch (err) {
            throw new Error("Invalid variants format");
        }
    }

    body.price = Number(body.price);
    body.discount = Number(body.discount);

    const menBottom = new mensBottomwearDTO({
        sellerID: body.sellerID,
        productID: body.productID,
        name: body.name,
        brand: body.brand,
        category: body.category,
        subCategory: body.subCategory,
        price: body.price,
        discount: body.discount,
        material: body.material,
        fit: body.fit,
        waistRise: body.waistRise,
        status: "Active",
        isOnSale: true,
        gender: body.gender,
        totalStock: body.totalStock,
        variants: body.variants,
        images: req.uploadedImages,
    });

    await menBottom.save();

    return menBottom.productID;
};
const addMenFootwear = async (req) => {
    const body = req.body;

    if (typeof body.variants === "string") {
        try {
            body.variants = JSON.parse(body.variants);
        } catch (err) {
            throw new Error("Invalid variants format");
        }
    }

    body.price = Number(body.price);
    body.discount = Number(body.discount);

    const menFoot = new mensFootwearDTO({
        sellerID: body.sellerID,
        productID: body.productID,
        name: body.name,
        brand: body.brand,
        category: body.category,
        subCategory: body.subCategory,
        price: body.price,
        discount: body.discount,
        outerMaterial: body.outerMaterial,
        soleMaterial: body.soleMaterial,
        closure: body.closure,
        pattern: body.pattern,
        occasion: body.occasion,
        status: "Active",
        isOnSale: true,
        gender: body.gender,
        totalStock: body.totalStock,
        variants: body.variants,
        images: req.uploadedImages,
    });

    await menFoot.save();

    return menFoot.productID;
};
const addWomenEthnic = async (req) => {
    const body = req.body;

    if (typeof body.variants === "string") {
        try {
            body.variants = JSON.parse(body.variants);
        } catch (err) {
            throw new Error("Invalid variants format");
        }
    }

    body.price = Number(body.price);
    body.discount = Number(body.discount);
    body.isOnSale = body.isOnSale === "true";

    const womenEthnic = new womensEthnicDTO({
        sellerID: body.sellerID,
        productID: body.productID,
        name: body.name,
        brand: body.brand,
        category: body.category,
        subCategory: body.subCategory,
        price: body.price,
        discount: body.discount,
        material: body.material,
        fit: body.fit,
        sleeve: body.sleeve,
        neck: body.neck,
        pattern: body.pattern,
        status: "Active",
        isOnSale: true,
        gender: body.gender,
        totalStock: body.totalStock,
        variants: body.variants,
        images: req.uploadedImages,
    });

    await womenEthnic.save();

    return womenEthnic.productID;
};
const addWomenWestern = async (req) => {
    const body = req.body;

    if (typeof body.variants === "string") {
        try {
            body.variants = JSON.parse(body.variants);
        } catch (err) {
            throw new Error("Invalid variants format");
        }
    }

    body.price = Number(body.price);
    body.discount = Number(body.discount);
    body.isOnSale = body.isOnSale === "true";

    const womenWestern = new womensWesternDTO({
        sellerID: body.sellerID,
        productID: body.productID,
        name: body.name,
        brand: body.brand,
        category: body.category,
        subCategory: body.subCategory,
        price: body.price,
        discount: body.discount,
        material: body.material,
        fit: body.fit,
        sleeve: body.sleeve,
        neck: body.neck,
        pattern: body.pattern,
        status: "Active",
        isOnSale: true,
        gender: body.gender,
        totalStock: body.totalStock,
        variants: body.variants,
        images: req.uploadedImages,
    });

    await womenWestern.save();

    return womenWestern.productID;
};
const addWomenFootwear = async (req) => {
    const body = req.body;

    if (typeof body.variants === "string") {
        try {
            body.variants = JSON.parse(body.variants);
        } catch (err) {
            throw new Error("Invalid variants format");
        }
    }

    body.price = Number(body.price);
    body.discount = Number(body.discount);
    body.isOnSale = body.isOnSale === "true";

    const womenFoot = new womensFootwearDTO({
        sellerID: body.sellerID,
        productID: body.productID,
        name: body.name,
        brand: body.brand,
        category: body.category,
        subCategory: body.subCategory,
        price: body.price,
        discount: body.discount,
        outerMaterial: body.outerMaterial,
        soleMaterial: body.soleMaterial,
        closure: body.closure,
        heelHeight: body.heelHeight,
        occasion: body.occasion,
        status: "Active",
        isOnSale: true,
        gender: body.gender,
        totalStock: body.totalStock,
        variants: body.variants,
        images: req.uploadedImages,
    });

    await womenFoot.save();

    return womenFoot.productID;
};
const addBoysBrands = async (req) => {
    const body = req.body;

    if (typeof body.variants === "string") {
        try {
            body.variants = JSON.parse(body.variants);
        } catch (err) {
            throw new Error("Invalid variants format");
        }
    }

    body.price = Number(body.price);
    body.discount = Number(body.discount);
    body.isOnSale = body.isOnSale === "true";

    const boysBrand = new boysBrandsDTO({
        sellerID: body.sellerID,
        productID: body.productID,
        name: body.name,
        brand: body.brand,
        category: body.category,
        productType: body.productType,
        subCategory: body.subCategory,
        price: body.price,
        discount: body.discount,
        material: body.material,
        outerMaterial: body.outerMaterial,
        sleeve: body.sleeve,
        neck: body.neck,
        status: "Active",
        isOnSale: true,
        gender: body.gender,
        totalStock: body.totalStock,
        variants: body.variants,
        images: req.uploadedImages,
    });

    await boysBrand.save();

    return boysBrand.productID;
};
const addGirlsGrands = async (req) => {
    const body = req.body;
    if (typeof body.variants === "string") {
        try {
            body.variants = JSON.parse(body.variants);
        } catch (err) {
            throw new Error("Invalid variants format");
        }
    }

    body.price = Number(body.price);
    body.discount = Number(body.discount);
    body.isOnSale = body.isOnSale === "true";

    const girlsGrand = new girlsGrandsDTO({
        sellerID: body.sellerID,
        productID: body.productID,
        name: body.name,
        brand: body.brand,
        category: body.category,
        productType: body.productType,
        subCategory: body.subCategory,
        price: body.price,
        discount: body.discount,
        material: body.material,
        outerMaterial: body.outerMaterial,
        sleeve: body.sleeve,
        neck: body.neck,
        status: "Active",
        isOnSale: true,
        gender: body.gender,
        totalStock: body.totalStock,
        variants: body.variants,
        images: req.uploadedImages,
    });

    await girlsGrand.save();

    return girlsGrand.productID;
};
const addMenWA = async (req) => {
    const body = req.body;

    if (typeof body.variants === "string") {
        try {
            body.variants = JSON.parse(body.variants);
        } catch (err) {
            throw new Error("Invalid variants format");
        }
    }

    body.price = Number(body.price);
    body.discount = Number(body.discount);
    body.isOnSale = body.isOnSale === "true";

    const mensWA = new mensWADTO({
        sellerID: body.sellerID,
        productID: body.productID,
        name: body.name,
        brand: body.brand,
        category: body.category,
        productType: body.productType,
        subCategory: body.subCategory,
        price: body.price,
        discount: body.discount,
        material: body.material,
        dialShape: body.dialShape,
        strapMaterial: body.strapMaterial,
        movement: body.movement,
        status: "Active",
        isOnSale: true,
        gender: body.gender,
        totalStock: body.totalStock,
        variants: body.variants,
        images: req.uploadedImages,
    });

    await mensWA.save();

    return mensWA.productID;
};
const addWomenWA = async (req) => {
    const body = req.body;

    if (typeof body.variants === "string") {
        try {
            body.variants = JSON.parse(body.variants);
        } catch (err) {
            throw new Error("Invalid variants format");
        }
    }

    body.price = Number(body.price);
    body.discount = Number(body.discount);
    body.isOnSale = body.isOnSale === "true";

    const womensWA = new womensWADTO({
        sellerID: body.sellerID,
        productID: body.productID,
        name: body.name,
        brand: body.brand,
        category: body.category,
        productType: body.productType,
        subCategory: body.subCategory,
        price: body.price,
        discount: body.discount,
        material: body.material,
        dialShape: body.dialShape,
        strapMaterial: body.strapMaterial,
        movement: body.movement,
        status: "Active",
        isOnSale: true,
        gender: body.gender,
        variants: body.variants,
        totalStock: body.totalStock,
        images: req.uploadedImages,
    });

    await womensWA.save();

    return womensWA.productID;
};
const addBoyWA = async (req) => {
    const body = req.body;
    console.log(body);

    if (typeof body.variants === "string") {
        try {
            body.variants = JSON.parse(body.variants);
        } catch (err) {
            throw new Error("Invalid variants format");
        }
    }

    body.price = Number(body.price);
    body.discount = Number(body.discount);
    body.isOnSale = body.isOnSale === "true";

    const boysWA = new boysWADTO({
        sellerID: body.sellerID,
        productID: body.productID,
        name: body.name,
        brand: body.brand,
        category: body.category,
        productType: body.productType,
        subCategory: body.subCategory,
        price: body.price,
        discount: body.discount,
        material: body.material,
        dialShape: body.dialShape,
        strapMaterial: body.strapMaterial,
        movement: body.movement,
        status: "Active",
        isOnSale: true,
        gender: body.gender,
        totalStock: body.totalStock,
        variants: body.variants,
        images: req.uploadedImages,
    });

    await boysWA.save();

    return boysWA.productID;
};
const addGirlWA = async (req) => {
    const body = req.body;

    if (typeof body.variants === "string") {
        try {
            body.variants = JSON.parse(body.variants);
        } catch (err) {
            throw new Error("Invalid variants format");
        }
    }

    body.price = Number(body.price);
    body.discount = Number(body.discount);
    body.isOnSale = body.isOnSale === "true";

    const girlsWA = new girlsWADTO({
        sellerID: body.sellerID,
        productID: body.productID,
        name: body.name,
        brand: body.brand,
        category: body.category,
        productType: body.productType,
        subCategory: body.subCategory,
        price: body.price,
        discount: body.discount,
        material: body.material,
        dialShape: body.dialShape,
        strapMaterial: body.strapMaterial,
        movement: body.movement,
        status: "Active",
        isOnSale: true,
        gender: body.gender,
        variants: body.variants,
        totalStock: body.totalStock,
        images: req.uploadedImages,
    });

    await girlsWA.save();

    return girlsWA.productID;
};
const addBag = async (req) => {
    const body = req.body;

    if (typeof body.variants === "string") {
        try {
            body.variants = JSON.parse(body.variants);
        } catch (err) {
            throw new Error("Invalid variants format");
        }
    }

    body.price = Number(body.price);
    body.discount = Number(body.discount);
    body.isOnSale = body.isOnSale === "true";

    const bags = new bagsDTO({
        sellerID: body.sellerID,
        productID: body.productID,
        name: body.name,
        brand: body.brand,
        category: body.category,
        subCategory: body.subCategory,
        gender: body.gender,
        price: body.price,
        discount: body.discount,
        material: body.material,
        capacity: body.capacity,
        features: body.features,
        status: "Active",
        isOnSale: true,
        variants: body.variants,
        images: req.uploadedImages,
    });

    await bags.save();

    return bags.productID;
};
const addSuitcase = async (req) => {
    const body = req.body;
    console.log(body);

    if (typeof body.variants === "string") {
        try {
            body.variants = JSON.parse(body.variants);
        } catch (err) {
            throw new Error("Invalid variants format");
        }
    }

    body.price = Number(body.price);
    body.discount = Number(body.discount);
    body.isOnSale = body.isOnSale === "true";

    const suitcases = new suitcasesDTO({
        sellerID: body.sellerID,
        productID: body.productID,
        name: body.name,
        brand: body.brand,
        category: body.category,
        gender: body.gender,
        price: body.price,
        discount: body.discount,
        material: body.material,
        capacity: body.capacity,
        features: body.features,
        shellType: body.shellType,
        numWheels: body.numWheels,
        lockType: body.lockType,
        status: "Active",
        isOnSale: true,
        variants: body.variants,
        totalStock: body.totalStock,
        images: req.uploadedImages,
    });

    await suitcases.save();

    return suitcases.productID;
};
const addLuggage = async (req) => {
    const body = req.body;

    if (typeof body.variants === "string") {
        try {
            body.variants = JSON.parse(body.variants);
        } catch (err) {
            throw new Error("Invalid variants format");
        }
    }

    body.price = Number(body.price);
    body.discount = Number(body.discount);
    body.isOnSale = body.isOnSale === "true";

    const luggage = new luggageDTO({
        sellerID: body.sellerID,
        productID: body.productID,
        name: body.name,
        brand: body.brand,
        category: body.category,
        subCategory: body.subCategory,
        gender: body.gender,
        price: body.price,
        discount: body.discount,
        material: body.material,
        capacity: body.capacity,
        features: body.features,
        numWheels: body.numWheels,
        lockType: body.lockType,
        status: "Active",
        isOnSale: true,
        variants: body.variants,
        totalStock: body.totalStock,
        images: req.uploadedImages,
    });

    await luggage.save();

    return luggage.productID;
};

const products_Model = { addMenTopwear, addMenBottomwear, addMenFootwear, addWomenEthnic, addWomenWestern, addWomenFootwear, addBoysBrands, addGirlsGrands, addMenWA, addWomenWA, addBoyWA, addGirlWA, addBag, addSuitcase, addLuggage }
export default products_Model;
