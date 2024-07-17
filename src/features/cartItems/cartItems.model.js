import mongoose, { model } from "mongoose"

const cartItemsSchema=mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required:true
    },
    quantity:{
        type:Number,
        required:true
    }
},{timstamps:true});

export  const CartItem=mongoose.model("CartItem",cartItemsSchema);