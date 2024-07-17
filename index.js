import express from "express";
import { connectToMongoDB } from "./src/config/mongodb.js";
import userRouter from "./src/features/user/user.router.js";
import productRouter from "./src/features/products/product.router.js";
import { cartRouter } from "./src/features/cartItems/cartItems.route.js";
import orderRouter from "./src/features/order/order.route.js";

const server=express();

server.use(express.json())



server.get("/",(req,res)=>(res.send("Welcome to Ecommerce API............")));

server.use("/api/user",userRouter);
server.use("/api/products",productRouter);
server.use("/api/cart",cartRouter)
server.use("/api/order",orderRouter);

server.listen(3200,()=>{
    console.log("server is running.......");
    connectToMongoDB();
},)