 import jwt from "jsonwebtoken"
 export const verifyJwt = async function(req,res,next){
     try {
        const token = req?.cookies?.token || req.headers.token

     

        console.log("token in middle",token);
        if(!token){
         return res.status(403).json({
            message:"Not valid token"
         })
        }
        const decode =  jwt.verify(token,'0000')
        console.log("in middlewared decode",decode);
        if(decode){
        req.user = decode
        return next()
        } 
        
     } catch (error) {
        console.log("on the middleware error",error.message);
     }
 } 


  export const Admin = async function(req,res,next){
   try {
      if(req.profile.role === 0){
         return res.status(403).json({
            sucess:false,
            message:"You are Admin Acess Denied",
         
         })


      }

      next()
   } catch (error) {
      console.log("error on admin middleware",error.message);
      return res.status(400).json({
         sucess:false,
         message:"error on admin middleware",
         data:error.message
      })
   }
  }