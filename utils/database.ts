import mongoose from "mongoose";
const uri = "mongodb+srv://paigauresh:shreepathishree7@cluster0.7blkaad.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

export const connectToDB = async () => {
  try{
    await mongoose.connect(uri);
  }catch(err){
    console.log(err);
  }
}