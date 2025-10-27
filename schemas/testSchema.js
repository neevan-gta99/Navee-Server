import mongoose from "mongoose";

const testU = new mongoose.Schema({

  
  name: String,
  

});

export const testDTO = ( mongoose.models.test || mongoose.model('test',testU));