import { Router } from "express";
import { CreateOrder, GetOrders } from "../Controller/OrderController.js";
import { verifyJwt } from "../Middleware/Auth.js";


const OrderRouter = Router()

OrderRouter.route('/add').post(verifyJwt,CreateOrder)
OrderRouter.route('/get').post(verifyJwt,GetOrders)

export {OrderRouter}