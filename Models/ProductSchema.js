import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
   
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        
    },
    rating:{
        type:String
    },
    discountPercentage:{
        type:Number
    },
    price:{
        type:Number,
        required:true
    },
    productImg:{
        type:Array,
        required:true
    },
    thumbnail:{
        type:String
    },
    category:{
        type:String,
        required:true
    }
})

const Product = mongoose.model("Product",ProductSchema)

export {Product}