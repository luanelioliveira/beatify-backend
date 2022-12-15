import { Product } from "@/modules/products/entities/product"

export interface AddProductRepository {
  add(product: Product): Promise<Product>
}
