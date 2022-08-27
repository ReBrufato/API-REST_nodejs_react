import express from "express";
import cors from "cors"

class MiddlewaresCors {
    static middlewareCors = (request, response, next) =>{
        response.header("Access-Control-Allow-Origin", "http://localhost:3000/");
        app.use(cors());

        next()
    }
}

export default MiddlewaresCors;