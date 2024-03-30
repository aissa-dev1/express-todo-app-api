import { Request, Response } from "express";

export function sayHello(req: Request, res: Response) {
  return res.status(200).json({ message: "Hello world!" });
}
