import { Request, Response } from "express"
import { container } from "tsyringe"
import { FindAllProductsUseCase } from "@/modules/products/use-cases/find-all-products.usecase"

export class FindAllProductsController {
  async handle(_request: Request, response: Response): Promise<Response> {
    const findAllProductsUseCase = container.resolve(FindAllProductsUseCase)

    const products = await findAllProductsUseCase.execute()

    return response.json(products)
  }
}
