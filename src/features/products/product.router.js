import express from "express"
import ProductController from "./product.controller.js";
import { upload } from "../middlewares/fileupload.middleware.js";


const productRouter=express.Router();

const productController=new ProductController();

productRouter.get("/avg",(req,res)=>productController.averagePricePerCategory(req,res));

productRouter.get("/filter",(req,res)=>productController.filter(req,res));

productRouter.get("/:id",(req,res)=>productController.get(req,res));
productRouter.post("/rate",(req,res)=>productController.rateProduct(req,res));
productRouter.post("/",upload.single("imageUrl"),(req,res)=>productController.add(req,res));

productRouter.get("/",(req,res)=>productController.getAll(req,res))

export default productRouter;