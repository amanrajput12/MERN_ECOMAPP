 import jwt from "jsonwebtoken"
 export const verifyJwt = async function(req,res,next){
     try {
      //   const token = req?.cookies?.token || req.header.token

      const cookies = req.headers.cookie.split(';').map(cookie => cookie.trim());
      console.log("Split cookies:", cookies);
      const specificCookie = cookies.find(cookie => cookie.includes('token'));
      const value = specificCookie.split('=')
      
      const token = value[1]
      console.log("user",value[1]);

      //   console.log("token in middle",token);
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