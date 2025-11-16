import products_Model from '../models/addProductsModel.js';

const commonController = (req, success, failed) => {

  let message = "";
  let statusCode;

  if (req.uploadType) {
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
  else {
    message =
      failed.length === 0 ? `${req.body.name}! upload successfully!` : "Upload failed!";
    statusCode =
      failed.length === 0 ? 200 : 400;

  }

  return {
    statusCode,
    message,
    successID: success,
    failedList: failed
  };


}

const menTopwear = async (req, res) => {
  try {
    const { success, failed } = await products_Model.addMenTopwear(req);

    const { statusCode, message, successID, failedList } = commonController(req, success, failed)
    res.status(statusCode).json({
      message,
      successID,
      failedList
    });

  } catch (err) {
    res.status(500).json({ message: "Error adding product", details: err.message });
  }
};


const menBottomwear = async (req, res) => {
  try {

    const { success, failed } = await products_Model.addMenBottomwear(req);

    const { statusCode, message, successID, failedList } = commonController(req, success, failed)
    res.status(statusCode).json({
      message,
      successID,
      failedList
    });

  } catch (err) {
    res.status(500).json({ message: "Error adding product", details: err.message });
  }
};
const menFootmwear = async (req, res) => {
  try {


    console.log("Men footwear mai call Ayy");
    
    const { success, failed } = await products_Model.addMenFootwear(req);

    const { statusCode, message, successID, failedList } = commonController(req, success, failed)
    res.status(statusCode).json({
      message,
      successID,
      failedList
    });

  } catch (err) {
    res.status(500).json({ message: "Error adding product", details: err.message });
  }
};
const womenEthnic = async (req, res) => {
  try {

    const { success, failed } = await products_Model.addWomenEthnic(req);

    const { statusCode, message, successID, failedList } = commonController(req, success, failed)
    res.status(statusCode).json({
      message,
      successID,
      failedList
    });

  } catch (err) {
    res.status(500).json({ message: "Error adding product", details: err.message });
  }
};
const womenWestern = async (req, res) => {
  try {

    const { success, failed } = await products_Model.addWomenWestern(req);

    const { statusCode, message, successID, failedList } = commonController(req, success, failed)
    res.status(statusCode).json({
      message,
      successID,
      failedList
    });

  } catch (err) {
    res.status(500).json({ message: "Error adding product", details: err.message });
  }
};
const womenFootwear = async (req, res) => {
  try {

    const { success, failed } = await products_Model.addWomenFootwear(req);

    const { statusCode, message, successID, failedList } = commonController(req, success, failed)
    res.status(statusCode).json({
      message,
      successID,
      failedList
    });

  } catch (err) {
    res.status(500).json({ message: "Error adding product", details: err.message });
  }
};
const boysBrands = async (req, res) => {
  try {

    const { success, failed } = await products_Model.addBoysBrands(req);

    const { statusCode, message, successID, failedList } = commonController(req, success, failed)
    res.status(statusCode).json({
      message,
      successID,
      failedList
    });

  } catch (err) {
    res.status(500).json({ message: "Error adding product", details: err.message });
  }
};
const girlsGrands = async (req, res) => {
  try {

    const { success, failed } = await products_Model.addGirlsGrands(req);

    const { statusCode, message, successID, failedList } = commonController(req, success, failed)
    res.status(statusCode).json({
      message,
      successID,
      failedList
    });

  } catch (err) {
    res.status(500).json({ message: "Error adding product", details: err.message });
  }
};
const menWA = async (req, res) => {
  try {

    const { success, failed } = await products_Model.addMenWA(req);

    const { statusCode, message, successID, failedList } = commonController(req, success, failed)
    res.status(statusCode).json({
      message,
      successID,
      failedList
    });

  } catch (err) {
    res.status(500).json({ message: "Error adding product", details: err.message });
  }
};
const womenWA = async (req, res) => {
  try {

    const { success, failed } = await products_Model.addWomenWA(req);

    const { statusCode, message, successID, failedList } = commonController(req, success, failed)
    res.status(statusCode).json({
      message,
      successID,
      failedList
    });

  } catch (err) {
    res.status(500).json({ message: "Error adding product", details: err.message });
  }
};
const boysWA = async (req, res) => {
  try {

    const { success, failed } = await products_Model.addBoyWA(req);

    const { statusCode, message, successID, failedList } = commonController(req, success, failed)
    res.status(statusCode).json({
      message,
      successID,
      failedList
    });

  } catch (err) {
    res.status(500).json({ message: "Error adding product", details: err.message });
  }
};
const girlsWA = async (req, res) => {
  try {

    const { success, failed } = await products_Model.addGirlWA(req);

    const { statusCode, message, successID, failedList } = commonController(req, success, failed)
    res.status(statusCode).json({
      message,
      successID,
      failedList
    });

  } catch (err) {
    res.status(500).json({ message: "Error adding product", details: err.message });
  }
};
const bags = async (req, res) => {
  try {

    const { success, failed } = await products_Model.addBag(req);

    const { statusCode, message, successID, failedList } = commonController(req, success, failed)
    res.status(statusCode).json({
      message,
      successID,
      failedList
    });

  } catch (err) {
    res.status(500).json({ message: "Error adding product", details: err.message });
  }
};
const suitcases = async (req, res) => {
  try {

    const { success, failed } = await products_Model.addSuitcase(req);

    const { statusCode, message, successID, failedList } = commonController(req, success, failed)
    res.status(statusCode).json({
      message,
      successID,
      failedList
    });

  } catch (err) {
    res.status(500).json({ message: "Error adding product", details: err.message });
  }
};
const luggage = async (req, res) => {
  try {

    const { success, failed } = await products_Model.addLuggage(req);

    const { statusCode, message, successID, failedList } = commonController(req, success, failed)
    res.status(statusCode).json({
      message,
      successID,
      failedList
    });

  } catch (err) {
    res.status(500).json({ message: "Error adding product", details: err.message });
  }
};

const addProducts = { menTopwear, menBottomwear, menFootmwear, womenEthnic, womenWestern, womenFootwear, boysBrands, girlsGrands, menWA, womenWA, boysWA, girlsWA, bags, suitcases, luggage };

export default addProducts;
