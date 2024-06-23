"use server"
import { FormModel } from "@/models/Form"

export const saveFormSubmit = async(form)=>{
  try{
    console.log(await FormModel.find({}));
    await FormModel.create(form);
    return true;
  }catch{
    return false;
  }
}