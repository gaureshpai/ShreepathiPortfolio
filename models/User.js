import { Schema, model, models } from 'mongoose';
import { connectToDB } from '../utils/database';
connectToDB()

const UserSchema = new Schema({
    email: {
        type: String,
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
    },

});

const User = models.User || model("User", UserSchema);