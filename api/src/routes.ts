import { Router } from "express"
import { CreateUserController } from "./controllers/CreateUserController"
import { AuthController } from "./controllers/AuthController"
import { GetCharactersController } from "./controllers/GetCharactersController"
import authMiddleware from "./middlewares/authMiddleware"

const routes = Router()

routes.post("/user", new CreateUserController().handle)
routes.post("/auth", new AuthController().authenticate)
routes.get("/characters", authMiddleware, new GetCharactersController().handle)

export { routes }
