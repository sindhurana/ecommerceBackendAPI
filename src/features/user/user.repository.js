import { User } from "./user.model.js";

export default class UserRepository{

    async signUp(user){
        await User.create(user);
    }

    async findByEmail(email){
        const user=await User.findOne({email});
        return user;
    }
}