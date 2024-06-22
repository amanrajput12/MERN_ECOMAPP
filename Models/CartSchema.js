import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({
    quantity:{
        type:String,
        required:true
    },
    product:{
        type:mongoose.Schema.ObjectId,
        ref:"Product"
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User"
    }
})

const Cart = mongoose.model("Cart",CartSchema)
export {Cart}