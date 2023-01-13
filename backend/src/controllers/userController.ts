import { Request, Response } from "express";

import jwt from "jsonwebtoken";
import * as authConfig from "../configs/auth";

import { User } from "../models/User";
import { Error } from "../utils/Error";

export class UserController {
  async create(req: Request, res: Response) {
    const { username, password } = req.body;

    const admin = new User({ username, password });
    await admin.save();

    return res.status(201).json();
  }

  async login(req: Request, res: Response) {
    const { username, password } = req.body;

    const user = await User.findOne({ username }).exec();
    if (!user) {
      throw new Error("Username e/ou senha incorreta!", 401);
    }
    if (user.password != password) {
      throw new Error("Username e/ou senha incorreta!", 401);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = jwt.sign({}, secret, {
      subject: String(user.id),
      expiresIn,
    });

    return res.status(201).json({ user, token });
  }
}
