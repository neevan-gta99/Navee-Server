import seller_Register_Model from '../models/sellerRegisterModel.js';

export const sellerRegister = async (req, res) => {
  try {
   
    // console.log("in controller");
    const sellerID = await seller_Register_Model.registerNewSeller(req,res);

    res.status(200).json({ message: "Registration Done!", sellerID });
  } catch (err) {
    res.status(500).json({ message: "Error in Registration: ", details: err.message });
  }
};
