import { prisma } from "@/infra/database/prisma/prisma-client"
import { Product } from "@/modules/products/entities/product"
import { GetAllProductsRepository } from "@/modules/products/repositories/get-all-products-repositpry"
import { ProductAdapter } from "../../adapters/product.adapter"

export class PrismaGetAllProductsRepository
  implements GetAllProductsRepository
{
  async get(): Promise<Product[]> {
    const productsModel = await prisma.products.findMany()

    const products = productsModel.map(ProductAdapter.toEntity)

    return products
  }
}
