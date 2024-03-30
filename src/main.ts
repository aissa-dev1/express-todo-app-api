import express, { json } from "express";
import cors from "cors";
import apiRouter from "./api";
import * as controller from "./controller";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { connect, listen } from "./app";

const app = express();
dotenv.config().parsed;

app.use(json());

app.use(cors());

connect();

app.use("/api", apiRouter);

app.get("/", controller.sayHello);

app.listen(process.env.PORT || 5555, listen);
