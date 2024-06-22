import { Order } from "../Models/OrderSchema.js";


export const CreateOrder = async function(req,res){
    try {
        const {user,address,paymentMethod,products,orderquantity}= req.body
        console.log(user,address,paymentMethod,products,orderquantity);
        if(!(user,address,paymentMethod,products)){
            return res.status(400).json({
                sucess:false,
                message:"All field are required"
            })
        }
        const response = await Order.create({
            user,
            address,
            paymentMethod,
            products,
            orderquantity
        })
        res.status(201).json({
            sucess:true,
            message:"Order created Sucessfully",
            data:response
        })

    } catch (error) {
        console.log("error on create order",error.message);
        res.status(400).json({
            sucess:false,
            message:"Order created failed",
            error:error.message
        })
    }
}


export const GetOrders = async function(req,res){
    try {
        const {user}= req.body
        if(!user){
            return res.status(400).json({
                sucess:false,
                message:"user is required"
            })
        }
        const orders = await Order.find({user}).populate('address').populate('products')
        console.log("on order data",orders);
        res.status(200).json({
            sucess:true,
            message:"sucessfully geting orders",
            data:orders
        })
    } catch (error) {
        console.log("error on getting orders",error.message);
        res.status(400).json({
            sucess:false,
            message:"error on getting orders",
            error:error.message
        })
    }
}