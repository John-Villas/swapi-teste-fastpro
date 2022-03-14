import "reflect-metadata"
import express from "express"
import { routes } from "./routes"
import "./database"

const port = 3003
const app = express()

app.use(express.json())

app.use(routes)

app.listen(port, () => {
  console.log(`listening on port ${port}...`)
})
