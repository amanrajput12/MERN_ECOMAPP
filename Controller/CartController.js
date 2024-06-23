import { Cart } from "../Models/CartSchema.js";
export const addtoCart = async function(req,res){
    try {
        
        const {user,product,quantity}= req.body
        console.log("req header for cookies",req.Cookie);
        if(!(user,product,quantity)){
            return res.status(400).json({
                sucess:false,
                message:"All field are required"
            })
        }
        const response  = await Cart.findOne({product})
        console.log(" response ",response);
        if(response){
            return res.status(200).json({
                sucess:true,
                message:"Proudct is already in the cart",
                data: response
            })
        }
        const add = await Cart.create({
            product:product,
            user:user,
            quantity
        })
        res.status(201).json({
            message:"product added in the cart",
            sucess:true,
            data:add
        })
    } catch (error) {
        console.log("error on add to cart",error.message);
        res.status(400).json({
            sucess:false,
            message:"not able to add to cart"
        })
    }
}

export const getCart= async function(req,res){
  
    try {
        const {user}= req.body
        console.log("req header for cookies",req.Cookie);
        console.log("user value are",user);
        const response = await Cart.find({user}).populate('product')
        let totalAmount =0
        if(response){
            response.map((data)=>{
                let discount = (data.product.discountPercentage*data.product.price*data.quantity)/100
                console.log("amount",data.product.price*data.quantity,"discount",discount,"quantity",data.quantity);
                totalAmount = totalAmount+ ((data.product.price*data.quantity)-discount)
            })
            console.log("CartAmout",totalAmount);
        }
        if(!response){
            return res.status(400).json({
                sucess:false,
                message:"No data in the cart",
            })
        }
        // console.log("resopnse in get cart",response);
        res.status(200).json({
            sucess:true,
            message:"All data of the cart",
            data:response,
            Amount:totalAmount
        })
    } catch (error) {
        console.log("error on getting the cartdata",);
    }
}

export const changeQuantity = async function(req,res){
    try {
        const {quantity,product}= req.body
        console.log("quantity",quantity,product);
        if(!(quantity,product)){
          return   res.status(400).json({
                sucess:false,
                message:"Quantity is required"
            })
        }
        const response = await Cart.findOneAndUpdate({product},{
            quantity
        })
        
     res.status(201).json({
        sucess:true,
        message:"Quantity change sucess",
        data:response
     })
    } catch (error) {
        console.log("error on change qunatity",error.message);
        res.status(400).json({
            sucess:false,
            message:"change quantity",
            dat:error.message
        })
    }
}

export const removetoCart = async function(req,res){
    try {
        const {product,user}= req.body
        if(!(product,user)){
            return res.status(400).json({
                sucess:false,
                message:"All field are required",
                
            })

        }
        const data = await Cart.findOneAndDelete({user,product})
        console.log("on the operation perform",data);
        if(data){
            res.status(200).json({
                sucess:true,
                message:"Product removed from the cart",
                data:data
            })
        }

    } catch (error) {
        console.log("error on remove the product",error.message);
        res.status(400).json({
            sucess:false,
            message:"product is not remove from the cart",
            error:error.message
        })
    }
}