import mongoose from "mongoose";


const productSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    sizes:{
        type:Array
    }
},{timestamps:true,strict:false});

export const Product=mongoose.model("Product",productSchema);