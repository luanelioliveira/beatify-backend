import { prisma } from "@/infra/database/prisma/prisma-client"
import { User } from "@/modules/accounts/entities/user"
import { SaveUserRepository } from "@/modules/accounts/repostories/save-user-repository"
import { UsersAdapters } from "../../adapters/users.adapter"

export class PrismaSaveUserRepository implements SaveUserRepository {
  async save(user: User): Promise<User> {
    const model = UsersAdapters.toModel(user)

    const modelCreated = await prisma.users.create({
      data: model,
    })

    const entity = UsersAdapters.toEntity(modelCreated)

    return entity
  }
}
