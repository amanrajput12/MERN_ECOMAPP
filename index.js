import dotenv from "dotenv";
import cors from "cors"
import express from "express";
import connectDb from "./Db/database.js";
import { ProductRoute } from "./Router/ProductRouter.js";
import { UserRouter } from "./Router/UserRouter.js";
import cookieparser from "cookie-parser";
import bodyParser from "body-parser";
import { CartRouter } from "./Router/CartRouter.js";
import { AddressRouter } from "./Router/AddressRouter.js";
import { OrderRouter } from "./Router/OrderRouter.js";
import { PaymentRouter } from "./Router/PaymentRouter.js";



const app = express();
const port = process.env.PORT ||8000 ; // 
dotenv.config();
app.use(cors({
  origin: 'https://onlineecomapp.netlify.app', // Replace with your frontend's domain
  credentials: true
}));
console.log(process.env.key_Id);
app.use(express.json());
app.use(express.static('Public'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieparser());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

app.use("/v1/product", ProductRoute);
app.use('/v1/user', UserRouter);
app.use('/v1/proudctdetail',CartRouter)
app.use('/v1/address',AddressRouter),
app.use('/v1/order',OrderRouter)
app.use('/v1/payment',PaymentRouter)

connectDb();

app.get('/', (req, res) => {
  res.send("hello app");
});

app.listen(port, () => {
  console.log(`app is listening at port 4000`);
});
