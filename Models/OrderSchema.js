import mongoose from "mongoose"

const OrderSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User"
    },
    address:{
      type:mongoose.Schema.ObjectId   
    },
    paymentMethod:{
        type:String,
        enum:["Cash","Card Payment"]
    },
    products:[
        {
            type:mongoose.Schema.ObjectId,
            ref:"Product"
        }
    ]
})

const Order = mongoose.model("Order",OrderSchema)

export {Order}