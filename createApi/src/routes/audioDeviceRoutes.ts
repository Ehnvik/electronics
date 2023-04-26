import express from "express";
import {
  createAudioDeviceController,
  deleteAudioDeviceByIdController,
  getAudioDeviceByIdController,
  getAudioDevicesController,
  updateAudioDeviceByIdController,
} from "../controllers/audioDeviceControllers";

const audioDevicesRouter = express.Router();

audioDevicesRouter.get("/", getAudioDevicesController);
audioDevicesRouter.get("/:id", getAudioDeviceByIdController);
audioDevicesRouter.put("/update/:id", updateAudioDeviceByIdController);
audioDevicesRouter.post("/create", createAudioDeviceController);
audioDevicesRouter.delete("/delete/:id", deleteAudioDeviceByIdController);

export default audioDevicesRouter;
