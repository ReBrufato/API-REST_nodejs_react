import users from "../models/User.js";
import jwt from "jsonwebtoken";

class UserAutentica {
    static authUser = async (request, response) => {
        const {username, password} = request.body;
        const user = await users.findOne({ username: username });

        try {
            const secret = process.env.SECRET;

            const token = jwt.sign({id: user.id}, secret, {expiresIn: 86400,});
            user.password = undefined;
            response.status(200).json({ msg: "Usuário autenticado com sucesso!", user, auth: true, token, user: request.userId });

        }catch (error) {
            response.status(403).send({ message: error });
        }
    }
}

export default UserAutentica;
