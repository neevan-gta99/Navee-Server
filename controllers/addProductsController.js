import products_Model from '../models/addProductsModel.js';

const menTopwear = async (req, res) => {
  try {
    const { success, failed } = await products_Model.addMenTopwear(req);

    let message = "";
    let statusCode;
    
    if(req.uploadType){
      message =
      failed.length === 0
        ? "Bulk upload completed successfully!"
        : success.length === 0
          ? "Bulk upload failed completely."
          : "Bulk upload completed with partial success";

    statusCode =
      failed.length === 0
        ? 200
        : success.length === 0
          ? 400
          : 207;
    }
    else{
      message =
      failed.length === 0 ? `${req.body.name}! upload successfully!` : "Upload failed!";
      statusCode =
      failed.length === 0 ? 200 : 400;

    }
        
    res.status(statusCode).json({
      message,
      success,
      failed
    });

  } catch (err) {
    res.status(500).json({ message: "Error adding product", details: err.message });
  }
};


const menBottomwear = async (req, res) => {
  try {

    const productID = await products_Model.addMenBottomwear(req);

    res.status(200).json({ message: "Product Added Successfully!", productID });
  } catch (err) {
    res.status(500).json({ message: "Error adding product", details: err.message });
  }
};
const menFootmwear = async (req, res) => {
  try {

    const productID = await products_Model.addMenFootwear(req);

    res.status(200).json({ message: "Product Added Successfully!", productID });
  } catch (err) {
    res.status(500).json({ message: "Error adding product", details: err.message });
  }
};
const womenEthnic = async (req, res) => {
  try {

    const productID = await products_Model.addWomenEthnic(req);

    res.status(200).json({ message: "Product Added Successfully!", productID });
  } catch (err) {
    res.status(500).json({ message: "Error adding product", details: err.message });
  }
};
const womenWestern = async (req, res) => {
  try {

    const productID = await products_Model.addWomenWestern(req);

    res.status(200).json({ message: "Product Added Successfully!", productID });
  } catch (err) {
    res.status(500).json({ message: "Error adding product", details: err.message });
  }
};
const womenFootwear = async (req, res) => {
  try {

    const productID = await products_Model.addWomenFootwear(req);

    res.status(200).json({ message: "Product Added Successfully!", productID });
  } catch (err) {
    res.status(500).json({ message: "Error adding product", details: err.message });
  }
};
const boysBrands = async (req, res) => {
  try {

    const productID = await products_Model.addBoysBrands(req);

    res.status(200).json({ message: "Product Added Successfully!", productID });
  } catch (err) {
    res.status(500).json({ message: "Error adding product", details: err.message });
  }
};
const girlsGrands = async (req, res) => {
  try {

    const productID = await products_Model.addGirlsGrands(req);

    res.status(200).json({ message: "Product Added Successfully!", productID });
  } catch (err) {
    res.status(500).json({ message: "Error adding product", details: err.message });
  }
};
const menWA = async (req, res) => {
  try {

    const productID = await products_Model.addMenWA(req);

    res.status(200).json({ message: "Product Added Successfully!", productID });
  } catch (err) {
    res.status(500).json({ message: "Error adding product", details: err.message });
  }
};
const womenWA = async (req, res) => {
  try {

    const productID = await products_Model.addWomenWA(req);

    res.status(200).json({ message: "Product Added Successfully!", productID });
  } catch (err) {
    res.status(500).json({ message: "Error adding product", details: err.message });
  }
};
const boysWA = async (req, res) => {
  try {

    const productID = await products_Model.addBoyWA(req);

    res.status(200).json({ message: "Product Added Successfully!", productID });
  } catch (err) {
    res.status(500).json({ message: "Error adding product", details: err.message });
  }
};
const girlsWA = async (req, res) => {
  try {

    const productID = await products_Model.addGirlWA(req);

    res.status(200).json({ message: "Product Added Successfully!", productID });
  } catch (err) {
    res.status(500).json({ message: "Error adding product", details: err.message });
  }
};
const bags = async (req, res) => {
  try {

    const productID = await products_Model.addBag(req);

    res.status(200).json({ message: "Product Added Successfully!", productID });
  } catch (err) {
    res.status(500).json({ message: "Error adding product", details: err.message });
  }
};
const suitcases = async (req, res) => {
  try {

    const productID = await products_Model.addSuitcase(req);

    res.status(200).json({ message: "Product Added Successfully!", productID });
  } catch (err) {
    res.status(500).json({ message: "Error adding product", details: err.message });
  }
};
const luggage = async (req, res) => {
  try {

    const productID = await products_Model.addLuggage(req);

    res.status(200).json({ message: "Product Added Successfully!", productID });
  } catch (err) {
    res.status(500).json({ message: "Error adding product", details: err.message });
  }
};

const addProducts = { menTopwear, menBottomwear, menFootmwear, womenEthnic, womenWestern, womenFootwear, boysBrands, girlsGrands, menWA, womenWA, boysWA, girlsWA, bags, suitcases, luggage };

export default addProducts;
