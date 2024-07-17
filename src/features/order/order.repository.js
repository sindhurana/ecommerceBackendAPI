import mongoose from "mongoose";
import { CartItem } from "../cartItems/cartItems.model.js";
import { Order } from "./order.model.js";



export default class OrderRepository{

    async placeOrder(userId) {
        let items = await this.getItemWithAmount(userId);

        const finalAmount = items.reduce((acc, item) => { return acc + item.totalAmount }, 0)
        // console.log(finalAmount)

        await Order.create({ userId, totalAmount: finalAmount });
    }
    
    

    async getItemWithAmount(userId){
        console.log(userId)
       const items= await CartItem.aggregate([
        [{
            $match: {
              "userId":new mongoose.Types.ObjectId(userId)
            },
            },
           {$lookup: {
              from: "products",
              localField: "productId",
              foreignField: "_id",
              as:"productInfo"
            } 
          },
           {$unwind: "$productInfo"},
           {$addFields: {
              totalAmount: {$multiply:["$quantity","$productInfo.price"]}
           }}]
       ])
return items;
       
    }



    
}