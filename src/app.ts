import { Request, Response } from "express";
import MessageResponse from "./interfaces/MessageResponse";
import PORT from "./config/port";
import mongoose from "mongoose";
import URI from "./config/uri";

export function sayHello(req: Request, res: Response<MessageResponse>): void {
  res.status(200).json({ message: "Hello world!" });
}

export function listen(): void {
  console.log(`App start at: http://localhost:${PORT}`);
}

export async function connect() {
  try {
    await mongoose.connect(URI);

    console.log("DB connected");
  } catch (error: any) {
    console.log(error.message);
  }
}
