import { Request, Response } from "express"
import { CreateUserService } from "../services/CreateUserService"

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, phone, email, password } = req.body

    const service = new CreateUserService()
    const result = await service.execute({ name, phone, email, password })

    if (result instanceof Error) {
      return res.status(409).json(result.message)
    }

    delete result.password

    return res.json(result)
  }
}
