import admin_Login_Model from "../models/adminModel.js";


const getAdmin = async (req, res) => {

    try {
        console.log(req.query); // Log query parameters
        const resp = await admin_Login_Model.getAdmin(req);
        res.status(resp.code).json(resp.message);
    } catch {
        res.status(500).json({ error: "Server Error admin controller" });
    }
};

const adminLogin = async (req, res) => {

    console.log("aaya admin login k liye");
    
   const authRes = await admin_Login_Model.checkCred(req,res);

   res.status(authRes.code).json({message: authRes.message, adminId : authRes.adminId, fullName: authRes.adminName});


};

const Admin_Controller = {adminLogin,getAdmin};
export default Admin_Controller;






