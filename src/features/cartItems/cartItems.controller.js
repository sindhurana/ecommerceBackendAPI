import CartItemsRepository from "./cartItems.repository.js";

export default class CartItemsController{

    constructor(){
        this.cartItemsRepository=new CartItemsRepository();
    }

    async addToCart(req,res){
        await this.cartItemsRepository.addToCart(req.body.userId,req.body.productId,req.body.quantity);
        res.send("cart updated succesfully");
    }

    async get(req,res){
        const result=await this.cartItemsRepository.get(req.body.userId);
        if(!result){
            res.send("not found");
        }
        else
        res.send(result)
    }

    async delete(req,res){
        const result= await this.cartItemsRepository.delete(req.body.userId,req.body.cartItemId);
        if (!result) {
            res.send("not found");
        }
        else {
            res.send("deleted");
        }
    }
}