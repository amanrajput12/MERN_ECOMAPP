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
        res.cookie('token',token,{
          
            maxAge: 2 * 60 * 60 * 1000 
        })
        res.status(201).json({
            sucess:true,
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

export const Login = async function(req,res){
    try {
        const {email,password} = req.body
        if(!(email,password)){
            res.status(400).json({
                message:"both filed requied"
            })
        }
        const validUser = await User.findOne({email})
        if(!validUser){
            res.status(400).json({
                message:"user not exist in the db"
            })
        }
        const Validpassword =  await bcrypt.compare(password,validUser.password)
        console.log("validpassword",Validpassword);
        if(!Validpassword){
            return res.status(400).json({
                message:"invalid User"
            })
        }
        const token = jsonwebtoken.sign(
            {
                id:validUser._id},
                '0000',{
                    expiresIn:'2h'
                }
        )
        res.cookie('token', token, {
         
            expires: new Date(Date.now()+ 2 * 60 * 60 * 1000) , // 2 hours
          
            
            secure: true 
        });
        const cartId = String(validUser._id)
        console.log("id of login",cartId.split("'")[0],typeof(cartId));
        res.cookie('user',cartId.split("'")[0],{
            expires: new Date(Date.now()+ 2 * 60 * 60 * 1000) , // 2 hours
          
          
            secure: true 
        })
        validUser.token = token
        await validUser.save()
        
        validUser.password = undefined;
       
      
        res.status(200).json({
            sucess:true,
            message:"user login sucess",
            data:validUser,
            cartId:validUser._id
        })
    
    
    } catch (error) {
         console.log("error on the login user",error.message);    
    }    
}