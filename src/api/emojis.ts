import express, { Request, Response } from "express";
import EmojiResponse from "./types/EmojiResponse";

const router = express.Router();

router.get("/", (req: Request, res: Response<EmojiResponse>) => {
  res.status(200).json(["😐", "😉", "😎", "🤣"]);
});

export default router;
