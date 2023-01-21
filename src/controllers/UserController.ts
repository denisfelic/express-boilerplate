import { Request, Response } from "express";
import { AppDataSource } from "../database/data-source";
import { User } from "../models/User";

const userRepository = AppDataSource.getRepository(User);

class CrudController {
  constructor() {}

  async index(req: Request, res: Response) {
    const user = new User();
    user.firstName = "Username";
    user.lastName = "Surname";
    user.age = 0.9;

    const newUser = await userRepository.save(user);
    const users = await userRepository.find();
    return res.json({ data: users.length });
  }

  async store(req: Request, res: Response) {}

  show(req: Request, res: Response) {}

  update(req: Request, res: Response) {}

  destroy(req: Request, res: Response) {}
}

export default CrudController;
