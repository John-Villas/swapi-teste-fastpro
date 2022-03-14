import { Application, Router } from "express"
import { CreateUserController } from "./controllers/CreateUserController"

const routes = Router()

routes.post("/user", new CreateUserController().handle)

// export default function routes(app: Application): void {
//   app.get("/", (req, res) => {
//     res.send(`cavalo`)
//   })
//   app.post("/user", (req, res) => {
//     res.send(`boba`)
//   })
//   app.get("/borpa", (req, res) => {
//     res.send(`borpa`)
//   })
// }

export { routes }
