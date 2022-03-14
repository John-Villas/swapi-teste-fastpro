import { getRepository } from "typeorm"
import { User } from "../entities/User"

interface UserRequest {
  name: string
  phone: string
  email: string
  password: string
}

export class CreateUserService {
  async execute({
    name,
    phone,
    email,
    password,
  }: UserRequest): Promise<User | Error> {
    const repo = getRepository(User)

    if (await repo.findOne({ email })) {
      return new Error("This email address is already in use")
    }

    const user = repo.create({
      name,
      phone,
      email,
      password,
    })

    await repo.save(user)

    return user
  }
}
