import { prisma } from "@/infra/database/prisma/prisma-client"
import { User } from "@/modules/accounts/entities/user"
import { GetUserByIdRepository } from "@/modules/accounts/repostories/get-user-by-id-repository"
import { UsersAdapters } from "../../adapters/users.adapter"

export class PrismaGetUserByIdRepository implements GetUserByIdRepository {
  async get(id: string): Promise<User | null> {
    const model = await prisma.users.findFirst({
      where: { id },
    })

    if (!model) {
      return null
    }

    const entity = UsersAdapters.toEntity(model)

    return entity
  }
}
