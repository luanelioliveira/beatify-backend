import { Product } from "@/modules/products/entities/product"

export interface UpdateProductRepository {
  update(product: Product): Promise<Product>
}
