import mongoose from "mongoose";

const signUP = new mongoose.Schema({

  id: Number,
  name: String,
  email: String,
  age: Number,
  phone: String,
  address: String,
  password: String

});

export const userDTO = ( mongoose.models.users || mongoose.model('users',signUP));