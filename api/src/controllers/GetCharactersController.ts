import { Request, Response } from "express"

export class GetCharactersController {
  async handle(req: Request, res: Response) {
    const result = { message: "foi" }

    // if (result instanceof Error) {
    //   return res.status(409).json(result)
    // }

    return res.json(req.user)
  }
}
