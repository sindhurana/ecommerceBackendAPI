import mongoose from "mongoose";



const orderSchema=new mongoose.Schema({

    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    totalAmount:{
        type:Number
    }

},{timestamps:true});

export const Order=mongoose.model("Order",orderSchema)