import { Router } from "express";
import { Login, Signup } from "../Controller/UserController.js";

const UserRouter = Router()

UserRouter.route('/singup').post(Signup)
UserRouter.route('/login').post(Login)

export {UserRouter}