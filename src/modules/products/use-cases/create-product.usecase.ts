import { inject, injectable } from "tsyringe"
import { Product } from "@/modules/products/entities/product"
import { AddProductRepository } from "../repositories/add-product-repository"

interface ICreateProduct {
  name: string
  description: string
  price: number
}
@injectable()
export class CreateProductUseCase {
  constructor(
    @inject("AddProductRepository")
    readonly addProductRepository: AddProductRepository
  ) {}

  async execute({
    name,
    description,
    price,
  }: ICreateProduct): Promise<Product> {
    const newProduct = new Product({
      name,
      description,
      price,
    })

    const productCreated = await this.addProductRepository.add(newProduct)

    return productCreated
  }
}
