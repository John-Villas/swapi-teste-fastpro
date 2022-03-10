import express from "express"

const port = 3003
const app = express()

app.listen(port, () => {
  console.log(`listening on port ${port}...`)
})
