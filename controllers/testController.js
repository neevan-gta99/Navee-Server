import test_Model from '../models/testModel.js'

export const getAllUsers = async (req, res) => {
  
    // console.log("ye hai ----------------");
    const users = await test_Model.getUsers()
    // console.log("ye hai users===========", users);
  res.json(users);
};






