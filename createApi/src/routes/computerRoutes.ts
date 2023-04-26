import express from "express";
import {
  createComputerController,
  deleteComputerByIdController,
  getComputerByIdController,
  getComputersController,
  updateComputerByIdController,
} from "../controllers/computerControllers";
import { authenticateUser } from "../middleware/authorizeMiddleware";

const computersRouter = express.Router();

computersRouter.get("/", getComputersController);
computersRouter.get("/:id", getComputerByIdController);
computersRouter.put(
  "/update/:id",
  authenticateUser,
  updateComputerByIdController
);
computersRouter.post("/create", authenticateUser, createComputerController);
computersRouter.delete(
  "/delete/:id",
  authenticateUser,
  deleteComputerByIdController
);

export default computersRouter;
