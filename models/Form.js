import { Schema, model, models } from 'mongoose';
import { connectToDB } from '../utils/database';
connectToDB()

const FormSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
    },
    email: {
        type: email,
        required: [true, 'Email is required!'],
    },
    message: {
        type: String,
        required: [true, 'Message is required!'],
    },

});

const Form = models.Form || model("Form", FormSchema);