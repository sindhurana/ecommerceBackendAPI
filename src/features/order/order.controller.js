import OrderRepository from "./order.repository.js";


export default class productController{
    constructor(){
        this.orderRepository=new OrderRepository();
    }

    async placeOrder(req,res){
  await this.orderRepository.placeOrder(req.body.userId);
  
        res.status(201).send("Order is created");
    }

}