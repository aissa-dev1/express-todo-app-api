import { Request, Response } from "express";
import EmojiResponse from "./types/EmojiResponse";

export function getApi(req: Request, res: Response) {
  return res.status(200).json({ message: "API - Aissa Bedr" });
}

export function getEmojis(req: Request, res: Response<EmojiResponse>) {
  return res.status(200).json(["😐", "😉", "😎", "🤣"]);
}
