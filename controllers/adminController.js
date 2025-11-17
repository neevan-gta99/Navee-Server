import admin_Model from "../models/adminModel.js";


const getAdmin = async (req, res) => {

  try {
    console.log(req.query); // Log query parameters
    const resp = await admin_Model.getAdmin(req);
    res.status(resp.code).json(resp.message);
  } catch {
    res.status(500).json({ error: "Server Error admin controller" });
  }
};

const adminLogin = async (req, res) => {

  console.log("aaya admin login k liye");

  const authRes = await admin_Model.checkCred(req, res);

  res.status(authRes.code).json({ message: authRes.message, adminId: authRes.adminId, fullName: authRes.adminName });


};

const dbMigrate = async (req, res) => {

  try {

    await admin_Model.dbMigrate();
    res.status(200).json({ message: "Migration successful" });

  } catch (err) {
    console.error("Migration failed:", err);
    res.status(500).json({ error: "Migration failed", details: err.message });
  }

}

const Admin_Controller = { adminLogin, getAdmin, dbMigrate };
export default Admin_Controller;






