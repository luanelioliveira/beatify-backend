import { Request, Response } from "express"
import { container } from "tsyringe"
import { CreateAccountUseCase } from "@/modules/accounts/use-cases/create-account.usecase"

export class CreateAccountController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, username, password } = request.body

    const createAccountUseCase = container.resolve(CreateAccountUseCase)

    const accountCreated = await createAccountUseCase.execute({
      name,
      username,
      password,
    })

    return response.status(201).json(accountCreated)
  }
}
