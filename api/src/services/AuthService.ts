import { getRepository } from "typeorm"
import { User } from "../entities/User"
import bcrypt from "bcryptjs"

interface AuthRequest {
  email: string
  password: string
}

export class AuthService {
  async login({ email, password }: AuthRequest): Promise<User | Error> {
    const repo = getRepository(User)

    const user = await repo.findOne({ email })

    if (!user) {
      return new Error("Unauthorized")
    }

    const isValidPassword = await bcrypt.compare(password, user.password)

    if (!isValidPassword) {
      return new Error("Unauthorized")
    }

    return user
  }

  async verify(id: string): Promise<User | Error> {
    const repo = getRepository(User)

    const user = await repo.findOne({ id })

    if (!user) {
      throw new Error("Unauthorized")
    }

    delete user.password

    return user
  }
}
