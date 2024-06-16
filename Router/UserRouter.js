import { Router } from "express";
import { Signup } from "../Controller/UserController.js";

const UserRouter = Router()

UserRouter.route('/singup').post(Signup)

export {UserRouter}