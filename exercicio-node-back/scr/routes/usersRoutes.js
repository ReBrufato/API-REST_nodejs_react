import express from "express";
import UserListarPorId from "../controllers/userControllersListaPorId.js";
import UserListarUsers from "../controllers/userControllersLista.js";
import UserRegisterUser from "../controllers/userControllersRegister.js";
import UserAutentica from "../controllers/userControllersAutentica.js";
import UserControllersAtualiza from "../controllers/userControllersAtualiza.js";
import UserControllerRemover from "../controllers/userControllersRemover.js";
import MiddlewaresAutentica from "../middleware/middlewareAutentica.js";
import MiddlewareRegister from "../middleware/middlewareRegister.js";
import MiddlewareValidarToken from "../middleware/middlewareValidaToker.js";

const router = express.Router()

router
    .get("/users", MiddlewareValidarToken.middlewareValidarToken, UserListarUsers.listarUsers)
    .get("/users/:id", MiddlewareValidarToken.middlewareValidarToken, UserListarPorId.listarUsersPorId)
    .post("/users/register", MiddlewareRegister.middlewareRegisterUser, UserRegisterUser.registerUser)
    .put("/users/:id", UserControllersAtualiza.atualizarUser)
    .delete("/users/:id", UserControllerRemover.removerUserPorId)
    .post("/users/login", MiddlewaresAutentica.middlewareAuthUser, MiddlewareValidarToken.middlewareValidarToken, UserAutentica.authUser)

export default router;
//https://expressjs.com/pt-br/guide/routing.html
//https://www.youtube.com/watch?v=Ntgs4gVYB9A&list=PLmY5AEiqDWwBHJ3i_8MDSszXXRTcFdkSu&index=25