import express from "express";
import {
  createAudioDeviceController,
  deleteAudioDeviceByIdController,
  getAudioDeviceByIdController,
  getAudioDevicesController,
  updateAudioDeviceByIdController,
} from "../controllers/audioDeviceControllers";
import { authenticateUser } from "../middleware/authorizeMiddleware";

const audioDevicesRouter = express.Router();

audioDevicesRouter.get("/", getAudioDevicesController);
audioDevicesRouter.get("/:id", getAudioDeviceByIdController);
audioDevicesRouter.put(
  "/update/:id",
  authenticateUser,
  updateAudioDeviceByIdController
);
audioDevicesRouter.post(
  "/create",
  authenticateUser,
  createAudioDeviceController
);
audioDevicesRouter.delete(
  "/delete/:id",
  authenticateUser,
  deleteAudioDeviceByIdController
);

export default audioDevicesRouter;
