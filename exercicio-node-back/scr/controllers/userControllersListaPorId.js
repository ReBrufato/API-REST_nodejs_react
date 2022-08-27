import users from "../models/User.js";

class UserListarPorId {

static listarUsersPorId = async ( request, response ) =>{
        const id = request.params.id;
        const teste = "-password";
        users.findById(id, teste, (err, users) => {
            if(err){
                response.status(400).send({message: `- Usuário não localizado.`})
            }else{
                response.status(200).send(users)
            }
        })
    }
}

export default UserListarPorId;
