import express from "express"
import connectDb from "./Db/database.js"
import dotenv from "dotenv"
import { ProductRoute } from "./Router/ProductRouter.js"
import { UserRouter } from "./Router/UserRouter.js"
const app = express()
dotenv.config()
app.use(express.json())
app.use("/v1/product",ProductRoute)
app.use('/v1/user',UserRouter)
connectDb()
app.get('/',(req,res)=>{
    res.send("hello app")
})





app.listen(4000,(req,res)=>{
    console.log(`app is listen at port 400`);
})