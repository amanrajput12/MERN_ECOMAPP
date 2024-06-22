import mongoose from "mongoose";


const AddressSchema = new mongoose.Schema({
  fullName:{
    type:String,
    required:true
  }  ,
  email:{
    type:String,
    required:true
  },
  phone:{
    type:Number,
    required:true
  },
  street:{
    type:String,
    required:true
  },
  city:{
    type:String,
    required:true
  },
  state:{
   type:String,
   required:true
  },
  postalcode:{
   type:String,
   required:true
  },
  user:{
    type:mongoose.Schema.ObjectId,
    ref:"User"
  }
})

const Address = mongoose.model("Address",AddressSchema)

export {Address}