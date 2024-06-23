




import dotenv from 'dotenv';
import Razorpay from 'razorpay';
import {Payment} from "../Models/PaymentSchema.js"
// Load environment variables
dotenv.config();

const key_id = process.env.key_Id; // Corrected to match the variable name in your .env file
const key_secret = process.env.key_secret;

console.log("dotenv", key_id, key_secret);

const razorpay = new Razorpay({
  key_id,
  key_secret, // Example of another key you might have in your .env
});



// // checkout
export const checkout = async function(req,res){
    try {
        const {amount,cartItems,userShipping,userId} = req.body
        console.log("req header for cookies",req.Cookie);

        var options = {
            amount: amount*100,  // amount in the smallest currency unit
            currency: "INR",
            receipt: `recipt_${Date.now()}`
          };
        const order =  await  razorpay.orders.create(options);
        res.json({  
            orderId:order.id,
            amount:amount,
            cartItems,
            userShipping,
            userId,
            paystatus:"Created"
        })
    } catch (error) {
        console.log("error on payment checkout",error.mesaage);
        res.status(400).json({
            sucess:false,
            message:"error on checkout payment",
            error:error.message
        })
    }
}

export const verify = async function(req,res){
    try {
        console.log("req header for cookies",req.Cookie);
        const {orderId,
            paymentId,
            signature,
            amount,
            cartItems,
            userId,
            userShipping} = req.body
    
            let orderconfirm = await Payment.create({
                orderId,
            paymentId,
            signature,
            amount,
            cartItems,
            userId,
            userShipping,
            payStatus:"paid"
            })
            if(orderconfirm){
                res.status(200).json({
                    sucess:true,
                    message:"payment verified ",
                    data:orderconfirm
                })
            }

    } catch (error) {
         console.log("error on create payment confirm",error.mesaage);
         res.status(400).json({
            sucess:false,
            message:"error on payment confirm page",
            error:error.mesaage
         })
    }
}