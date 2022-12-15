import { Router } from "express"
import { ensureAuthenticate } from "@/infra/http/middlewares/ensure-authenticate"

import { FindAllProductsController } from "@/infra/http/controllers/products/find-all-products.controller"
import { CreateProductController } from "@/infra/http/controllers/products/create-product.controller"
import { UpdateProductController } from "@/infra/http/controllers/products/update-product.controller"

const routes = Router()

routes.post("/", ensureAuthenticate, new CreateProductController().handle)
routes.get("/", ensureAuthenticate, new FindAllProductsController().handle)
routes.put("/:id", ensureAuthenticate, new UpdateProductController().handle)

export { routes }
