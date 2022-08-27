import users from "../models/User.js";

class MiddlewareRegister {
    static middlewareRegisterUser = async ( request, response, next) =>{
        const { name, username, password} = request.body;

        if (!name) {
            return response.status(422).json({ message: "O nome é obrigatório!" });
        }

        if (!username) {
            return response.status(422).json({ message: "O email é obrigatório!" });
        }

        if (!password) {
            return response.status(422).json({ message: "A senha é obrigatória!" });
        }

        // check if user exists
        const userExists = await users.findOne({ username: username });
        
        if (userExists) {

            return response.status(422).json({message: "Por favor, utilize outro e-mail!" });
        }
        next();
    }
}

export default MiddlewareRegister; 