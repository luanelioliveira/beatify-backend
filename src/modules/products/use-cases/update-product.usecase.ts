import { inject, injectable } from "tsyringe"
import { Product } from "@/modules/products/entities/product"
import { GetProductByIdRepository } from "@/modules/products/repositories/get-product-by-id-repository"
import { UpdateProductRepository } from "../repositories/update-product-repository"

interface IProductUpdate {
  productId: string
  name: string
  description: string
  price: number
}

@injectable()
export class UpdateProductUseCase {
  constructor(
    @inject("GetProductByIdRepository")
    readonly getProductByIdRepository: GetProductByIdRepository,
    @inject("UpdateProductRepository")
    readonly updateProductRepository: UpdateProductRepository
  ) {}

  async execute({
    productId,
    name,
    description,
    price,
  }: IProductUpdate): Promise<Product> {
    const productExists = await this.getProductByIdRepository.get(productId)

    if (!productExists) {
      throw new Error("Product does not exist")
    }

    productExists.setName(name)
    productExists.setDescription(description)
    productExists.setPrice(price)

    const productUpdated = await this.updateProductRepository.update(
      productExists
    )

    return productUpdated
  }
}
