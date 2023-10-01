import { Router } from "express";
import emojisRouter from "./emojis";
import * as controller from "./controller";
import { connect } from "../app";

const router = Router();

connect();

router.use("/emojis", emojisRouter);

router.get("/", controller.getApi);

export default router;
