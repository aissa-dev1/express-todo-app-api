import { Request, Response } from "express";
import MessageResponse from "./interfaces/MessageResponse";

export function sayHello(req: Request, res: Response<MessageResponse>) {
  return res.status(200).json({ message: "Hello world!" });
}
