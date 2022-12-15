import { Router } from "express"

import { routes as accountRoutes } from "./accounts"
import { routes as productRoutes } from "./products"

const routes = Router()

routes.use("/accounts", accountRoutes)
routes.use("/products", productRoutes)

routes.get("/", (_request, response) => {
  return response.json({
    status: "OK",
  })
})

export { routes }
