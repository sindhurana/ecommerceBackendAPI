import mongoose from "mongoose";

export const connectToMongoDB=()=>{
    mongoose.connect("mongodb://localhost:27017/ecomdb2")
    .then(console.log("MongoDB is connected...."))
    .catch(err=>console.log("MongoDB Error:",err))
}

