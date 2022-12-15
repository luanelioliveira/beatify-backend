import { Request, Response } from "express"
import { container } from "tsyringe"
import { UpdateProductUseCase } from "@/modules/products/use-cases/update-product.usecase"

export class UpdateProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: productId } = request.params
    const { name, description, price } = request.body

    const updateProductUseCase = container.resolve(UpdateProductUseCase)

    const productUpdated = await updateProductUseCase.execute({
      productId,
      name,
      description,
      price,
    })

    return response.status(201).json(productUpdated)
  }
}
