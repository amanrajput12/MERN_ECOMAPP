import { Router } from "express";
import { CreateAddress, GetAddress } from "../Controller/AddressController.js";
import { verifyJwt } from "../Middleware/Auth.js";


const AddressRouter = Router()

AddressRouter.route("/add").post(verifyJwt,CreateAddress)
AddressRouter.route("/get").post(verifyJwt,GetAddress)

export {AddressRouter}