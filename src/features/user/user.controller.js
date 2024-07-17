import UserRepository from "./user.repository.js";
import bcrypt from "bcrypt";


export default class UserController{
    constructor(){
        this.userRepository=new UserRepository();
    }

    async signUp(req,res){
        console.log(req.body);
        const {name,email,type}=req.body;
        let password=await bcrypt.hash(req.body.password,12);
        const user= {name,email,password,type};
        await this.userRepository.signUp(user);
        res.send("User created")
    }

    async signIn(req,res){
        const user=await this.userRepository.findByEmail(req.body.email);
        
        if(!user){
            res.send("user not found")
        }
        else{
            const result=await bcrypt.compare(req.body.password,user.password);
            if(!result){
                res.send("incorrect password")
            }
            else{
                res.send("logged in")
            }
        }
    }
}