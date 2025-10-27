import user_Model from '../models/userModel.js'

export const getAllUsers = async (req, res) => {
  
  const users = await user_Model.getUsers()
  console.log(users);
  res.json(users);
};






