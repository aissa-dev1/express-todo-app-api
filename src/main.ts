import express, { json } from "express";
import PORT from "./config/port";
import { listen } from "./app";
import cors from "cors";
import apiRouter from "./api";
import * as controller from "./controller";

const app = express();

app.use(json());

app.use(cors());

app.use("/api", apiRouter);

app.get("/", controller.sayHello);

app.listen(PORT, listen);
