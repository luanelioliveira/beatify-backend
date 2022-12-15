import "reflect-metadata"
import env from "../config/env"

import { app } from "./app"

app.listen(env.app.port, () =>
  console.log(`Server is running http://localhost:${env.app.port}`)
)
