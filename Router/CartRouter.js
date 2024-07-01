import { Router } from "express";
import { addtoCart, changeQuantity, getCart, removetoCart } from "../Controller/CartController.js";
import { verifyJwt } from "../Middleware/Auth.js";



const CartRouter = Router()

CartRouter.route('/cart').post(verifyJwt,addtoCart)
CartRouter.route('/cartdata').post(verifyJwt,getCart)
CartRouter.route('/cartquantity').post(verifyJwt,changeQuantity)
CartRouter.route('/removedata').post(verifyJwt,removetoCart)


export  {CartRouter}