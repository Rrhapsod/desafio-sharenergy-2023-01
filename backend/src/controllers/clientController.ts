import { Request, Response } from "express";

import { Client } from "../models/Client";

export class ClientController {
  async create(req: Request, res: Response) {
    const { name, email, telephone, address, cpf } = req.body;

    const client = new Client({ name, email, telephone, address, cpf });
    await client.save();

    return res.status(201).json();
  }

  async index(req: Request, res: Response) {
    const index = await Client.find().select("name").sort({ name: 1 }).exec();

    return res.json({
      index,
    });
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;

    const show = await Client.findById(id).exec();

    return res.json({
      show,
    });
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, email, telephone, address, cpf } = req.body;

    const query = { _id: id };
    await Client.findOneAndUpdate(query, {
      name,
      email,
      telephone,
      address,
      cpf,
    });

    return res.status(201).json();
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    await Client.findOneAndDelete({ _id: id });

    return res.status(201).json();
  }
}
