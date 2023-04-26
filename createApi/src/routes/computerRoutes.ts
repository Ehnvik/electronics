import express from "express";
import {
  createComputerController,
  deleteComputerByIdController,
  getComputerByIdController,
  getComputersController,
  updateComputerByIdController,
} from "../controllers/computerControllers";

const computersRouter = express.Router();

computersRouter.get("/", getComputersController);
computersRouter.get("/:id", getComputerByIdController);
computersRouter.put("/update/:id", updateComputerByIdController);
computersRouter.post("/create", createComputerController);
computersRouter.delete("/delete/:id", deleteComputerByIdController);

export default computersRouter;
