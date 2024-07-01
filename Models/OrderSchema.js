import mongoose from "mongoose"

const OrderSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User"
    },
    address:{
      type:mongoose.Schema.ObjectId ,  
      ref:"Address"
    },
    paymentMethod:{
        type:String,
        enum:["Cash","Card Payment"]
    },
    orderquantity:[
        {
       product:  {
            type:String,
    
        },
        
        quantity:{
        type:Number
        }
    }
    ],
    products:[
        {
            type:mongoose.Schema.ObjectId,
            ref:"Product"
        }
    ],
    BillAmount:{
      type:Number
    },
    BillStatus:{
        type:String
    },
    paymentId:{
        type:mongoose.Schema.ObjectId,
        ref:"Payment"
    }
},{
    timestamps:true
})

const Order = mongoose.model("Order",OrderSchema)

export {Order}