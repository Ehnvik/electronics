import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import {
  audioDevicesRouter,
  computersRouter,
  mobilesRouter,
  router,
  televisionsRouter,
} from "./routes";

const app = express();

app.use(
  cors({
    methods: ["GET", "PUT", "DELETE", "POST"],
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  "/",
  router,
  audioDevicesRouter,
  computersRouter,
  mobilesRouter,
  televisionsRouter
);

const port = process.env.PORT;

const run = () => {
  try {
    app.listen(port, () => {
      console.log(`Server is listening on http://localhost:${port}`);
    });
  } catch (error) {
    console.error(error);
  }
};

run();
