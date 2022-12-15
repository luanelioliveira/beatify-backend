import { Request, Response } from "express"
import { container } from "tsyringe"
import { CreateNewSessionUseCase } from "@/modules/accounts/use-cases/create-new-session.usercase"

export class CreateNewSessionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { username, password } = request.body

    const createNewSessionUseCase = container.resolve(CreateNewSessionUseCase)

    const token = await createNewSessionUseCase.execute({ username, password })

    return response.json(token)
  }
}
