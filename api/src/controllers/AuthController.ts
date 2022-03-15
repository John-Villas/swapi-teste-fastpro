import { Request, Response } from "express"
import jwt from "jsonwebtoken"
import { User } from "../entities/User"
import { AuthService } from "../services/AuthService"

export class AuthController {
  async authenticate(req: Request, res: Response) {
    const { email, password } = req.body

    const service = new AuthService()
    const result = await service.login({ email, password })

    if (result instanceof Error) {
      return res.status(401).json(result.message)
    }

    const token = jwt.sign({ id: result.id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    })

    delete result.password

    return res.json({ result, token })
  }
}
