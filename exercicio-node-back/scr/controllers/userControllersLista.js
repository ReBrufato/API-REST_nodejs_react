import users from "../models/User.js";

class UserListarUsers {
    
    static listarUsers = async (request, response) => {
        const user = users(request.body)
        console.log(user)
        users.find((err, users) => {//localhost:3000
            user.password = undefined;
            if(err){
                response.status(500).send({message: `${err.message} - Usuário não localizado.`})
            }else{
                response.status(200).send(users);
            }
        });
    }
}
export default UserListarUsers;