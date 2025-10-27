import { testDTO } from '../schemas/testSchema.js';

const getUsers = async (req,res)=>{
    
    // console.log("ye hai model---");
    
    res =  await testDTO.find();
    // console.log("ye hai res",res);
  return res;
}
const test_Model = {getUsers};
export default test_Model;

