import express from "express";
import connectDb from "./Db/database.js";
import dotenv from "dotenv";
import { ProductRoute } from "./Router/ProductRouter.js";
import { UserRouter } from "./Router/UserRouter.js";
import cookieparser from "cookie-parser";
import bodyParser from "body-parser";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.static('Public'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieparser());

app.use("/v1/product", ProductRoute);
app.use('/v1/user', UserRouter);

connectDb();

app.get('/', (req, res) => {
  res.send("hello app");
});

app.listen(4000, () => {
  console.log(`app is listening at port 4000`);
});
