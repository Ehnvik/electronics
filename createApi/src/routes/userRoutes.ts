import express from "express";
import {
  createUserController,
  getUsersController,
  loginUserController,
} from "../controllers/userControllers";

const usersRouter = express.Router();

usersRouter.get("/", getUsersController);
usersRouter.post("/register", createUserController);
usersRouter.post("/login", loginUserController);

export default usersRouter;
