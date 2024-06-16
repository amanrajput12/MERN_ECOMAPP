import { Product } from "../Models/ProductSchema.js";


export const  addProduct =  async function(req,res){
    try {
        const {id,title,price,category,productImg}= req.body
        console.log(title,price,category);
        const data = await Product.create({
            id,
            title,
            price,
            productImg,
            category
        })
        res.status(201).json({
            message:"data added sucessfully",
            result:data
        })
    } catch (error) {
        console.log("error on add product",error.message);
    }
}


export const getProduct = async function(req,res){
    try {
        const data = await Product.find()
        res.status(200).json({
            message:"get all product",
            result:data
        })
    } catch (error) {
        console.log("error on get product",error.message);
    }
}

export const getProductDetail = async function(req,res){
    try {
       const {id}= req.body
       console.log("id on the detail",id); 
       const productdetail = await Product.find({_id:id})
       res.status(200).json({
        message:"get detail sucess",
        data:productdetail
       })
    } catch (error) {
        console.log("error on get detail",error.message);
        res.status(400).json({
            message:"Not valid request"
        })
    }
}