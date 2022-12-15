import { Product } from "@/modules/products/entities/product"

export interface GetAllProductsRepository {
  get(): Promise<Product[]>
}
