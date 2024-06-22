import { Router } from "express";
import { addtoCart, changeQuantity, getCart, removetoCart } from "../Controller/CartController.js";



const CartRouter = Router()

CartRouter.route('/cart').post(addtoCart)
CartRouter.route('/cartdata').post(getCart)
CartRouter.route('/cartquantity').post(changeQuantity)
CartRouter.route('/removedata').post(removetoCart)


export  {CartRouter}