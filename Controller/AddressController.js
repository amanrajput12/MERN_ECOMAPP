import { Address } from "../Models/AddressSchema.js";



export const CreateAddress = async function(req,res){
try {
    console.log("req header for cookies",req.Cookie);
    const {fullName,email,phone,street,city,state,postalcode,user}= req.body
   if(!(fullName,email,phone,street,city,state,postalcode,user)){
    return res.status(400).json({
        sucess:false,
        message:"All field are required to  add Address"
    })
   }
   const response = await Address.create({
    fullName,
    email,
    phone,
    street,
    city,
    state,
    postalcode,
    user
   })

   if(response){
    res.status(201).json({
        sucess:true,
        message:"Address Added Sucessfully",
        data:response
    })
   }

} catch (error) {
    console.log("error on create address",error.message);
    res.status(400).json({
        sucess:false,
        message:'Error on create Address',
        error:error.message
    })
}
}


export const GetAddress = async function(req,res){
    try {
        const {user}= req.body
        console.log("req header for cookies",req.Cookie,req.header);
        if(!user){
          return  res.status(400).json({
                sucess:false,
                message:"User is required"
            })
        }
        const info = await Address.find({user})
        if(info){
            res.status(200).json({
                sucess:true,
                message:"Sucessfully get Info",
                data:info
            })
        }
    } catch (error) {
        console.log("error on get the info",error.message);
        res.status(400).json({
            sucess:false,
            message:"Not able to get the user",
            error:error.message
        })
    }
}

