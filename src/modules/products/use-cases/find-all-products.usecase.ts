import { inject, injectable } from "tsyringe"
import { Product } from "@/modules/products/entities/product"
import { GetAllProductsRepository } from "../repositories/get-all-products-repositpry"

@injectable()
export class FindAllProductsUseCase {
  constructor(
    @inject("GetAllProductsRepository")
    readonly getAllProductsRepository: GetAllProductsRepository
  ) {}

  async execute(): Promise<Product[]> {
    const products = await this.getAllProductsRepository.get()

    return products
  }
}
