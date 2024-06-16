import mongoose from "mongoose";

const connectDb = async()=>{
    try {
        const db = await mongoose.connect(process.env.MONGODB_URI)
        console.log("Datbase connection sucessfully");
    } catch (error) {
        console.log("database not connect",error.message);
    }
}

export default connectDb