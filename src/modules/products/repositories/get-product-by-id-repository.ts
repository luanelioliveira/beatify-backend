import { Product } from "@/modules/products/entities/product"

export interface GetProductByIdRepository {
  get(id: string): Promise<Product | null>
}
