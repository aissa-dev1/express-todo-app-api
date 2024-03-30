import { Router } from "express";
import emojisRouter from "./emojis";
import tasksRouter from "./tasks";
import * as controller from "./controller";

const router = Router();

router.use("/emojis", emojisRouter);

router.use("/tasks", tasksRouter);

router.get("/", controller.getApi);

export default router;
