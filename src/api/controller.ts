import { Request, Response } from "express";
import MessageResponse from "../interfaces/MessageResponse";
import EmojiResponse from "./types/EmojiResponse";

export function getApi(req: Request, res: Response<MessageResponse>) {
  return res.status(200).json({ message: "API - Aissa Bedr" });
}

export function getEmojis(req: Request, res: Response<EmojiResponse>) {
  return res.status(200).json(["😐", "😉", "😎", "🤣"]);
}
