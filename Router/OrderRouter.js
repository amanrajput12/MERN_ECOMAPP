import { Router } from "express";
import { CreateOrder, GetOrders } from "../Controller/OrderController.js";


const OrderRouter = Router()

OrderRouter.route('/add').post(CreateOrder)
OrderRouter.route('/get').post(GetOrders)

export {OrderRouter}