import express from "express"

import "@/infra/containers"

import errors from "./middlewares/errors"
import { routes } from "./routes"

const app = express()

app.use(express.json())

app.use(routes)
app.use(errors)

export { app }
