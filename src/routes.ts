import express from "express";
import CrudController from "./controllers/UserController";

const Routes = express.Router();

Routes.get("/api/v1/users", (new CrudController()).index);
Routes.post("/api/v1/users", (new CrudController()).index);

export default Routes;
