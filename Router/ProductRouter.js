import { Router } from "express";
import { addProduct, getProduct, getProductDetail } from "../Controller/ProductController.js";
import { verifyJwt } from "../Middleware/Auth.js";
import { upload } from "../Middleware/Multer.js";
const ProductRoute = Router()

ProductRoute.route('/addProduct').post(
    verifyJwt,
    (req, res, next) => {
      console.log('Request received:');
      console.log(req.body);
      console.log(req.files);
      next();
    },
    upload.array('productImg',5),
    addProduct
  );
  
ProductRoute.route('/getProduct').get(verifyJwt,getProduct)
ProductRoute.route('/getProductDetail').post(verifyJwt,getProductDetail)

export {ProductRoute}