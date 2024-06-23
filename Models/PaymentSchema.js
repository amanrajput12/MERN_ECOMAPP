import mongoose from "mongoose"

const PayementSchema = new mongoose.Schema({
    orderDate:{
        type:Date,
        default:Date.now()
    },
    payStatus:{
        type:String
    }
},{
    strict:false
})

const Payment = mongoose.model("Payment",PayementSchema)

export {Payment}