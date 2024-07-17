import mongoose from "mongoose";
import { Product } from "./product.model.js";



export default class ProductRepository{

    async add(product){
        await Product.create(product);
        
    }

    async getAll(){
        const result=await Product.find();
        return result;
    }

    async get(id){
        return await Product.findOne({_id:id});
    }

    async filter(minPrice,maxPrice,category){
       return await Product.find({$and:[{price:{$gte:minPrice}},{price:{$lte:maxPrice}},{category:category}]})
    }

    async rateProduct(userId,productId,rating){
        // console.log(userId,productId,rating)
        await Product.updateOne({_id:productId},
            {$pull:{"ratings":{"userId":new mongoose.Types.ObjectId(userId)}}} );

            await Product.updateOne({_id:productId}
                ,{$push:{"ratings":{"userId":new mongoose.Types.ObjectId(userId),rating}}}
            )
    }

    async averagePricePerCategory(){
        return await Product.aggregate([{$group:{_id:"$category",averagePricePerCategory:
            {$avg:"$price"}}}])
    }
}