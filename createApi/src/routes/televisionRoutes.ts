import express from "express";
import {
  createTelevisionController,
  deleteTelevisionByIdController,
  getTelevisionByIdController,
  getTelevisionsController,
  updateTelevisionByIdController,
} from "../controllers/televisionControllers";

const televisionsRouter = express.Router();

televisionsRouter.get("/", getTelevisionsController);
televisionsRouter.get("/:id", getTelevisionByIdController);
televisionsRouter.put("/update/:id", updateTelevisionByIdController);
televisionsRouter.post("/", createTelevisionController);
televisionsRouter.delete("/delete/:id", deleteTelevisionByIdController);

export default televisionsRouter;
