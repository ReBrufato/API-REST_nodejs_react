import users from "../models/User.js";

class UserControllersAtualiza{
    static atualizarUser = (request, response) => {
        const id = request.params.id;

        users.findByIdAndUpdate(id, {$set: request.body}, (err) => {
            if(!err){
                response.status(200).send({message: 'Usuário atualizado com sucesso'})
            }else{
                response.status(404).send({message: `${err.message} - Id do usuário não localizado.`})
            }
        })
    }
}

export default UserControllersAtualiza;