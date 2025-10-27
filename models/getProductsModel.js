// getProductsModel.ts

import { mensTopwearDTO } from '../schemas/productsSchema/menTopWearSchema.js'; // adjust path as needed

const getAllMenTopwear = async () => {
  try {
    const products = await mensTopwearDTO.find({ status: "Active" }).lean();
    return products;
  } catch (error) {
    console.error("Error fetching men's topwear:", error);
    throw new Error("Failed to fetch men's topwear");
  }
};

const getshowcaseMenTopWear = async () => {
  try {
    const showcaseProducts = await mensTopwearDTO.find().limit(6);

    return showcaseProducts;
  } catch (error) {
    console.error("Error fetching men's shocase topwear:", error);
    throw new Error("Failed to fetch men's showcase topwear");
  }
};

export const showcaseLazyLoad = async (req) => {
  try {
    const { subCategory, offset } = req.query;

    // Validate or sanitize inputs
    const parsedOffset = parseInt(offset, 10) || 0;
    const limit = 9; // You can adjust this as needed

    // Query your DB based on subCategory and offset
    const products = await mensTopwearDTO.find({ subCategory })
      .skip(parsedOffset)
      .limit(limit);

    res.status(200).json({ productInfo: products });
  } catch (error) {
    console.error("Error in showcaseLazyLoad:", error);
    res.status(500).json({ message: "Server error" });
  }
};


const products_Model_For_Show = { getAllMenTopwear, getshowcaseMenTopWear };
export default products_Model_For_Show;
