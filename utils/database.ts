"use server"
import mongoose from "mongoose";

export const connectToDB = async () => {
  try{
    await mongoose.connect(process.env.MONGODB_URL);
  }catch(err){
    console.log(err);
  }
}