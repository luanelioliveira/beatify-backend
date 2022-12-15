import { prisma } from "@/infra/database/prisma/prisma-client"
import { Product } from "@/modules/products/entities/product"
import { AddProductRepository } from "@/modules/products/repositories/add-product-repository"
import { ProductAdapter } from "../../adapters/product.adapter"

export class PrismaAddProductRepository implements AddProductRepository {
  async add(productToCreate: Product): Promise<Product> {
    const model = ProductAdapter.toModel(productToCreate)

    const productModelCreated = await prisma.products.create({
      data: model,
    })

    const productCreated = ProductAdapter.toEntity(productModelCreated)

    return productCreated
  }
}
