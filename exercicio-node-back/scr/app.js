import express from "express";
import bd from "./config/bdConnect.js";
import routes from "./routes/index.js";
import chalk from "chalk";
import cors from "cors";
//import bodyParser from "bodyParser";

bd.on("error", console.log.bind(console, chalk.red('Erro de conexão: ')));
bd.once("open", ()=>{console.log(chalk.green('Conexão com o banco feita com sucesso'))});
const app = express();

app.use(express.json());


// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    app.use(cors());
    console.log("Acesso O middleware")
    next();
})

routes(app);

export default app;

//npm install bcrypt
//npm install dotenv
//npm install jsonwebtoken
//https://stackoverflow.com/questions/32500073/request-header-field-access-control-allow-headers-is-not-allowed-by-itself-in-pr