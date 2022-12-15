import { prisma } from "@/infra/database/prisma/prisma-client"
import { Product } from "@/modules/products/entities/product"
import { GetProductByIdRepository } from "@/modules/products/repositories/get-product-by-id-repository"
import { ProductAdapter } from "../../adapters/product.adapter"

export class PrismaGetProductByIdRepository
  implements GetProductByIdRepository
{
  async get(id: string): Promise<Product | null> {
    const productModel = await prisma.products.findFirst({
      where: { id },
    })

    if (!productModel) {
      return null
    }

    const product = ProductAdapter.toEntity(productModel)

    return product
  }
}
