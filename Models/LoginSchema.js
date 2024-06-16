import mongoose from "mongoose";


const loginSchema =  new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    userName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    token:{
        type:String
    }
})



const User = mongoose.model("User", loginSchema);

export { User }; // Correct way to export the User model
