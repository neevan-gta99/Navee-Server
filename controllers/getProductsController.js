import products_Model_For_Show from "../models/getProductsModel.js";

const allMenTopWear = async (req, res) => {

  try {

    const productInfo = await products_Model_For_Show.getAllMenTopwear(req);

    res.status(200).json({ message: "Product is Here!", productInfo });
  } catch (err) {
    res.status(500).json({ message: "Error to fetch product", details: err.message });
  }
};


const showcaseMenTopWear = async (req, res) => {

  try {

    const productInfo = await products_Model_For_Show.getshowcaseMenTopWear(req);

    res.status(200).json({ message: "Products is Here!", productInfo });
  } catch (err) {
    res.status(500).json({ message: "Error to fetch product", details: err.message });
  }

}

export const showcaseLazyLoad = async (req, res) => {
  try {

    const productInfo = await products_Model_For_Show.getShowcaseLazyLoad(req);

    res.status(200).json({ message: "Products is Here!", productInfo });

   
  } catch (error) {
    console.error("Error in showcaseLazyLoad:", error);
        res.status(500).json({ message: "Error to fetch product", details: err.message });

  }
};


const getProducts = { allMenTopWear, showcaseMenTopWear, showcaseLazyLoad };

export default getProducts;

