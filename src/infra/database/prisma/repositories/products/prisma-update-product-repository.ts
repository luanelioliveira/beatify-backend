import { prisma } from "@/infra/database/prisma/prisma-client"
import { Product } from "@/modules/products/entities/product"
import { UpdateProductRepository } from "@/modules/products/repositories/update-product-repository"
import { ProductAdapter } from "../../adapters/product.adapter"

export class PrismaUpdateProductRepository implements UpdateProductRepository {
  async update(productToUpdate: Product): Promise<Product> {
    const productUpdated = await prisma.products.update({
      where: { id: productToUpdate.getId() },
      data: {
        name: productToUpdate.getName(),
        description: productToUpdate.getDescription(),
        price: productToUpdate.getPrice(),
        updated_at: new Date(),
      },
    })

    const productCreated = ProductAdapter.toEntity(productUpdated)

    return productCreated
  }
}
