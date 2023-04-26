import express from "express";
import {
  createTelevisionController,
  deleteTelevisionByIdController,
  getTelevisionByIdController,
  getTelevisionsController,
  updateTelevisionByIdController,
} from "../controllers/televisionControllers";
import { authenticateUser } from "../middleware/authorizeMiddleware";

const televisionsRouter = express.Router();

televisionsRouter.get("/", getTelevisionsController);
televisionsRouter.get("/:id", getTelevisionByIdController);
televisionsRouter.put(
  "/update/:id",
  authenticateUser,
  updateTelevisionByIdController
);
televisionsRouter.post("/", authenticateUser, createTelevisionController);
televisionsRouter.delete(
  "/delete/:id",
  authenticateUser,
  deleteTelevisionByIdController
);

export default televisionsRouter;
