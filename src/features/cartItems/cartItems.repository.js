import { CartItem } from "./cartItems.model.js";


export default class CartItemsRepository{

    async addToCart(userId,productId,quantity){
      await CartItem.updateOne({userId,productId},
        {$inc:{"quantity":quantity}},
    {upsert:true} )
    }

    async get(userId){
       const result= await CartItem.find({userId});
       return result;
    }

    async delete(userId,cartItemId){
       const result= await CartItem.deleteOne({_id:cartItemId,userId});
       return result.deletedCount;
    }
}