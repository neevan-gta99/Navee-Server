import { userDTO } from '../schemas/usersSchema.js';

const getUsers = async (req,res)=>{
    
  res =  await userDTO.find();
  return res;
}
const user_Model = {getUsers};
export default user_Model;

