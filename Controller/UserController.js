import { User } from "../Models/LoginSchema.js";
import bcrypt from "bcrypt"
import jsonwebtoken from "jsonwebtoken"
export const Signup = async function(req,res){
    try {
        const {userName,password,email}= req.body
        if(!(userName,password,email)){
            res.status(401).json({
                message:"All field are required"
            })
        }
        const existingUser = await User.findOne({email})
        if(existingUser){
            res.status(401).json({
                message:"User already exist in db"
            })
        }
        const encryptpassword = await bcrypt.hash(password,10)
        const newUser = await User.create({
            userName,
            email,
            password:encryptpassword
        })
        const token =  jsonwebtoken.sign({
            id:newUser._id},'0000',{
                expiresIn:'2h'
            }
        )
        newUser.token = token

        await  newUser.save()
        newUser.password =undefined
        res.status(201).json({
            message:"user created sucessfully",
            data:newUser
        })

    } catch (error) {
        console.log("error on user singup",error.message);
        res.status(401).json({
            message:"something wrong on singup user"
        })
    }
}