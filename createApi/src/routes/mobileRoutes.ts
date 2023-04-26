import express from "express";
import {
  createMobileController,
  deleteMobileByIdController,
  getMobileByIdController,
  getMobilesController,
  updateMobileByIdController,
} from "../controllers/mobileControllers";
import { authenticateUser } from "../middleware/authorizeMiddleware";

const mobilesRouter = express.Router();

mobilesRouter.get("/", getMobilesController);
mobilesRouter.get("/:id", getMobileByIdController);
mobilesRouter.put("/update/:id", authenticateUser, updateMobileByIdController);
mobilesRouter.post("/", authenticateUser, createMobileController);
mobilesRouter.delete(
  "/delete/:id",
  authenticateUser,
  deleteMobileByIdController
);

export default mobilesRouter;
