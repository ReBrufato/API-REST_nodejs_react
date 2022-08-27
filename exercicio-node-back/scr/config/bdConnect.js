import mongoose from "mongoose";

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

//mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@exercicio-node.g3tbb.mongodb.net/exercicio-node`)
mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.pz13r9v.mongodb.net/`)
    
let bd = mongoose.connection;

export default bd;


//https://cloud.mongodb.com/v2/63016b13b553856e23f74ef7#clusters
//fagnerviana@gmail.com.br
//28061988
//fagnerviana
