import { Router } from "express"

import { CreateAccountController } from "@/infra/http/controllers/accounts/create-account.controller"
import { GetAccountDetailsController } from "@/infra/http/controllers/accounts/get-account-details.controller"
import { CreateNewSessionController } from "@/infra/http/controllers/accounts/create-new-session.controller"
import { ensureAuthenticate } from "@/infra/http/middlewares/ensure-authenticate"

const routes = Router()

routes.post("/", new CreateAccountController().handle)
routes.post("/sessions", new CreateNewSessionController().handle)
routes.get("/me", ensureAuthenticate, new GetAccountDetailsController().handle)

export { routes }
