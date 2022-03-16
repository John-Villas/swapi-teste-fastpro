import { Request, Response } from "express"
import fetch from "node-fetch"

export class GetCharactersController {
  async handle(req: Request, res: Response) {
    const result = await fetch(
      `https://swapi.dev/api/people/?page=${req.query.page}`
    )
      .then((res) => res.json())
      .then((json) => {
        return json
      })

    return res.json(result)
  }
}
