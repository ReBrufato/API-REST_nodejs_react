import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
        
        name: {
            type: String, 
            required: true
        },
        username: {
            type: String, 
            required: true, 
            unique: true, 
            lowercase: true
        },
        password: {
            type: String, 
            required: true
        },
        createdAt:{
            type:Date,
            default:Date.now
        },
    });

const users  = mongoose.model('users', userSchema)
export default users;