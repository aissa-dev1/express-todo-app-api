import express from "express";
import PORT from "./config/port";
import { connect, listen, sayHello } from "./app";
import cors from "cors";
import apiRouter from "./api";

const app = express();

app.use(express.json());

app.use(cors());

app.use("/api", apiRouter);

connect();

app.get("/", sayHello);

app.listen(PORT, listen);
