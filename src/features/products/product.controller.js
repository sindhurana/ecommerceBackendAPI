import ProductRepository from "./product.repository.js";


export default class ProductController{
    constructor(){
        this.productRepository=new ProductRepository();
    }

    async add(req,res){
        const {name,desc,price,category}= req.body;
        const product={name,desc,price,category,imageUrl:req.file.filename,
            sizes:req.body.sizes.split(",")}
        await this.productRepository.add(product);
        res.send("product added")
    }

    async getAll(req,res){
        const result= await this.productRepository.getAll();
        res.send(result);
    }

    async get(req,res){
        const result=await this.productRepository.get(req.params.id);
        res.send(result);
    }

    async filter(req,res){
        const result=await this.productRepository.filter(req.query.minPrice,req.query.maxPrice,req.query.category)
        res.send(result);
    }

    async rateProduct(req,res){
    //    console.log(req.body);
        await this.productRepository.rateProduct(req.body.userId,req.body.productId,req.body.rating);
        res.send("ratings added");
    }

    async averagePricePerCategory(req,res){
        const result=await this.productRepository.averagePricePerCategory();
        res.send(result);
    }

}