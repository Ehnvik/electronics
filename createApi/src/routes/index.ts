import { Router } from "express";
import audioDevicesRouter from "./audioDeviceRoutes";
import computersRouter from "./computerRoutes";
import mobilesRouter from "./mobileRoutes";
import televisionsRouter from "./televisionRoutes";

const router = Router();

router.use("/audio-devices", audioDevicesRouter);
router.use("/computers", computersRouter);
router.use("/mobiles", mobilesRouter);
router.use("/televisions", televisionsRouter);

export {
  router,
  audioDevicesRouter,
  computersRouter,
  mobilesRouter,
  televisionsRouter,
};
