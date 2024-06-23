import {Router} from "express"
import { checkout, verify } from "../Controller/PaymentController.js"


const PaymentRouter = Router()

PaymentRouter.route('/checkout').post(checkout)

// verify payment
PaymentRouter.route('/verify-payment').post(verify)

export  {PaymentRouter}