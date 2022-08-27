import users from "../models/User.js";
import bcrypt from "bcrypt";

class MiddlewaresAutentica {

    static middlewareAuthUser = async ( request, response, next) =>{
        const { username, password } = request.body;
        
        // checar se usuário obrigatório 
        if (!username) {
            return response.status(422).json({ message: "O email é obrigatório!" });
        }
        //checar que senha é obrigatória
        if (!password) {
            return response.status(422).json({ message: "A senha é obrigatória!" });
        }

        // check se usuário foi existe
        const user = await users.findOne({ passaword: password });
        if (!user) {
            return response.status(404).json({ message: "Usuario não encontrado!" });
        }

        const checarUsername = await (username, user.username);
        if(!checarUsername){
            return response.status(422).json({message: "E-mail inválida" });
        }
        //checar se a senha é válida
        const checarPassword = await bcrypt.compare(password, user.password);
        if(!checarPassword){
            return response.status(422).json({message: "Senha inválida" });
        }
        next();
    }
}

export default MiddlewaresAutentica;