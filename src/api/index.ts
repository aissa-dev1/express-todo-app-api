import express, { Request, Response } from "express";
import MessageResponse from "../interfaces/MessageResponse";
import emojisRouter from "./emojis";

const router = express.Router();

router.use("/emojis", emojisRouter);

router.get("/", (req: Request, res: Response<MessageResponse>) => {
  res.status(200).json({ message: "API - Aissa Bedr" });
});

export default router;
