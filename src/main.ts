import express, { json } from "express";
import cors from "cors";
import apiRouter from "./api";
import * as controller from "./controller";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
dotenv.config().parsed;

app.use(json());

app.use(cors());

function listen(): void {
  console.log(`App start at: http://localhost:${process.env.PORT || 5555}`);
}

async function connect() {
  try {
    await mongoose.connect(process.env.URI as string, {
      dbName: "task_manager",
    });

    console.log("DB connected");
  } catch (error: any) {
    console.log(error.message);
  }
}

connect();

app.use("/api", apiRouter);

app.get("/", controller.sayHello);

app.listen(process.env.PORT || 5555, listen);
