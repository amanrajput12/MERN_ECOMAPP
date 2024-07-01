import {Router} from "express"
import { checkout, verify } from "../Controller/PaymentController.js"
import { verifyJwt } from "../Middleware/Auth.js"


const PaymentRouter = Router()

PaymentRouter.route('/checkout').post(verifyJwt,checkout)

// verify payment
PaymentRouter.route('/verify-payment').post(verifyJwt,verify)

export  {PaymentRouter}