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

export const getAllMessages = async () => {
  try {
    const allForms = await FormModel.find({});
    return {
      success: true,
      count: allForms.length,
      messages: allForms
    };
  } catch (error) {
    console.error('Error retrieving messages:', error);
    return {
      success: false,
      count: 0,
      messages: []
    };
  }
}