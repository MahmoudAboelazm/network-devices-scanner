import { Request, Response } from "express";
import find from "local-devices";

export function getWelcome(req: Request, res: Response) {
  res.render("index", { baseUrl: process.env.BASE_URL });
}
export function update(req: Request, res: Response) {
  find().then((devices) => {
    res.send(devices);
  });
}
