import express from "express";
import {
  createMobileController,
  deleteMobileByIdController,
  getMobileByIdController,
  getMobilesController,
  updateMobileByIdController,
} from "../controllers/mobileControllers";

const mobilesRouter = express.Router();

mobilesRouter.get("/", getMobilesController);
mobilesRouter.get("/:id", getMobileByIdController);
mobilesRouter.put("/update/:id", updateMobileByIdController);
mobilesRouter.post("/", createMobileController);
mobilesRouter.delete("/delete/:id", deleteMobileByIdController);

export default mobilesRouter;
