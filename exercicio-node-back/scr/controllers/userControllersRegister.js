import users from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class UserRegisterUser {
    static registerUser = async (request, response) =>{
        const { name, username, password } = request.body;
        console.log(username);
        //criar passaword
        const saltRound = await bcrypt.genSalt(12);
        const passwordHash = await bcrypt.hash(password, saltRound) 
        
        // criar user
        const user = new users({
            name,
            username,
            password: passwordHash,
        });
        
        try {
            const secret = process.env.SECRET;
            const token = jwt.sign({id: user._id}, secret, {expiresIn: 86400,});

            await user.save();
            user.password = undefined;
            response.status(201).json({ msg: "Usuário criado com sucesso!", user, auth: true, token});
        }catch (error) {
            response.status(500).send({ msg: error });
        }
    }
}
export default UserRegisterUser;