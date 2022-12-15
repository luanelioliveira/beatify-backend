import { Request, Response } from "express"
import { container } from "tsyringe"
import { CreateProductUseCase } from "@/modules/products/use-cases/create-product.usecase"

export class CreateProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description, price } = request.body

    const createProductUseCase = container.resolve(CreateProductUseCase)

    const productCreated = await createProductUseCase.execute({
      name,
      description,
      price,
    })

    return response.status(201).json(productCreated)
  }
}
