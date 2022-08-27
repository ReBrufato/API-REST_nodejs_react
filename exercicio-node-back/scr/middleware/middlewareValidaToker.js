import jwt from "jsonwebtoken";

class MiddlewareValidarToken {
    static async middlewareValidarToken( request, response, next){
        const authHeader = request.headers["authorization"];//Pegando a authorization no headers 
        //const parts = authHeader && authHeader.split(" ")[1];// pegando a segunda parte do token
        //const authHeader = request.headers.authorization;

        if(!authHeader){
            return response.status(401).json({error: `Nenhum token fornecido!`})
        }

        const parts = authHeader.split(" ");

        if(!parts.length === 2){
            return response.status(401).json({error: 'Token error!'});
        }

        const [scheme, token] = parts;
        if(!/^Bearer$/i.test(scheme)){
            return response.status(401).json({error: 'Token com mau formatado!'});
        }
        const secret = process.env.SECRET;
        jwt.verify(token, secret, (err, decoded) => {
            if(err){ 
                return response.status(401).json({error: 'Token invalido!'});
            }
            
            request.userId = decoded.id;
            // request.headers['session'] = request.userId;
            next()
        });

        
        
    };
}
export default MiddlewareValidarToken;