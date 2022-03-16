import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken"
import { AuthService } from "../services/AuthService"

interface TokenPayload {
  id: string
  iat: number
  exp: number
}

export default async function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers

  try {
    if (!authorization) {
      throw new Error()
    }
    const token = authorization.replace("Bearer", "").trim()
    const { id } = jwt.verify(token, process.env.JWT_SECRET) as TokenPayload

    const service = new AuthService()
    req.user = await service.verify(id)
    return next()
  } catch (error) {
    console.log(error)
    return res.status(401).json("Unauthorized")
  }
}
