import users from "../models/User.js";

class UserControllerRemover {

    static removerUserPorId = (request, response) =>{
        const id = request.params.id;

        users.findByIdAndDelete(id, (err) => {
            if(!err){
                response.status(200).send({message: 'Usuário removido com sucesso'})
            }else{
                response.status(404).send({message: `${err.message} - Id do usuário não localizado.`})
            }
        })
    }
} 

export default UserControllerRemover;