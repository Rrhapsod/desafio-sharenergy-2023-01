import { Request, Response } from "express";

import { User } from "../models/User";

export class UserController {
  async create(req: Request, res: Response) {
    const { username, password } = req.body;

    const admin = new User({ username, password });
    await admin.save();

    return res.status(201).json();
  }
}
