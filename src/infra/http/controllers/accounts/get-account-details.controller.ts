import { Request, Response } from "express"
import { container } from "tsyringe"
import { GetAccountDetailsUseCase } from "@/modules/accounts/use-cases/get-account-details.usecase"

export class GetAccountDetailsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { userId } = request

    const getAccountDetailsUseCase = container.resolve(GetAccountDetailsUseCase)

    const customerDetails = await getAccountDetailsUseCase.execute({ userId })

    return response.json(customerDetails)
  }
}
