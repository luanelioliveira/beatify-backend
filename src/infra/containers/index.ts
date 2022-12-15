import { container } from "tsyringe"

import { PrismaSaveUserRepository } from "@/infra/database/prisma/repositories/users/prisma-save-user-repository"
import { SaveUserRepository } from "@/modules/accounts/repostories/save-user-repository"
import { PrismaAddProductRepository } from "@/infra/database/prisma/repositories/products/prisma-add-product-repository"
import { GetUserByIdRepository } from "@/modules/accounts/repostories/get-user-by-id-repository"
import { GetUserByUsernameRepository } from "@/modules/accounts/repostories/get-user-by-username-repository"
import { PrismaGetUserByIdRepository } from "../database/prisma/repositories/users/prisma-get-user-by-id-repository"
import { PrismaGetUserByUsernameRepository } from "../database/prisma/repositories/users/prisma-get-user-by-username-repository"
import { AddProductRepository } from "@/modules/products/repositories/add-product-repository"
import { GetProductByIdRepository } from "@/modules/products/repositories/get-product-by-id-repository"
import { PrismaGetProductByIdRepository } from "../database/prisma/repositories/products/prisma-get-product-by-id-repository"
import { GetAllProductsRepository } from "@/modules/products/repositories/get-all-products-repositpry"
import { PrismaGetAllProductsRepository } from "../database/prisma/repositories/products/prisma-get-all-product-repository"
import { UpdateProductRepository } from "@/modules/products/repositories/update-product-repository"
import { PrismaUpdateProductRepository } from "../database/prisma/repositories/products/prisma-update-product-repository"

container.registerSingleton<AddProductRepository>(
  "AddProductRepository",
  PrismaAddProductRepository
)

container.registerSingleton<UpdateProductRepository>(
  "UpdateProductRepository",
  PrismaUpdateProductRepository
)

container.registerSingleton<GetProductByIdRepository>(
  "GetProductByIdRepository",
  PrismaGetProductByIdRepository
)

container.registerSingleton<GetAllProductsRepository>(
  "GetAllProductsRepository",
  PrismaGetAllProductsRepository
)

container.registerSingleton<SaveUserRepository>(
  "SaveUserRepository",
  PrismaSaveUserRepository
)

container.registerSingleton<GetUserByIdRepository>(
  "GetUserByIdRepository",
  PrismaGetUserByIdRepository
)

container.registerSingleton<GetUserByUsernameRepository>(
  "GetUserByUsernameRepository",
  PrismaGetUserByUsernameRepository
)
