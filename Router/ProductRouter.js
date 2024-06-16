import { Router } from "express";
import { addProduct, getProduct, getProductDetail } from "../Controller/ProductController.js";

const ProductRoute = Router()

ProductRoute.route('/addProduct').post(addProduct)
ProductRoute.route('/getProduct').get(getProduct)
ProductRoute.route('/getProductDetail').post(getProductDetail)

export {ProductRoute}