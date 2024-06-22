import { Router } from "express";
import { CreateAddress, GetAddress } from "../Controller/AddressController.js";


const AddressRouter = Router()

AddressRouter.route("/add").post(CreateAddress)
AddressRouter.route("/get").post(GetAddress)

export {AddressRouter}