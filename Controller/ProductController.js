import { Product } from "../Models/ProductSchema.js";
import { uploadOnCloudinary } from "../Utils/Cloudinary.js";

export const  addProduct =  async function(req,res){
    try {
        const {title,price,category,description,rating,discountPercentage}= req.body
        console.log("req header for cookies",req.headers);
        // console.log("files",req.files);
        console.log("in the body",title,price,category,req.body,);
        if(!(title,price,category,req.files)) {
            return res.status(400).json({
                sucess:false,
                message:"All filed requird"
            })
        }
       
      let i 
      const imageUrls = [];
      for(i=0;i<5;i++){
        console.log("image path",i,req.files[i].path); 
        const data = await uploadOnCloudinary(req.files[i].path)
        console.log("response back from the cloduniary",data.url);
        imageUrls.push(data.url);
      }
         console.log("image url to store db",imageUrls);
        const data = await Product.create({
           
            title,
            price,
            productImg:imageUrls,
            category,
            description,
            rating,
            discountPercentage
        })
        res.status(201).json({
            sucess:true,
            message:"data added sucessfully",
            result:data
        })
    } catch (error) {
        console.log("error on add product",error.message);
    }
}


export const getProduct = async function(req,res){
    try {
       
        console.log("req header for cookies",req.headers.cookie,req.headers.token);
        const data = await Product.find()
        res.status(200).json({
            sucess:true,
            message:"get all product",
            result:data
        })
    } catch (error) {
        console.log("error on get product",error.message);
    }
}

export const getProductDetail = async function(req,res){
    try {
        console.log("req header for cookies",req.Cookie,req.header);
       const {id}= req.body
       console.log("id on the detail",id); 
       const productdetail = await Product.find({_id:id})
       res.status(200).json({
        sucess:true,
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