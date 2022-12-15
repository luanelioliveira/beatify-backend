import { prisma } from "@/infra/database/prisma/prisma-client"
import { User } from "@/modules/accounts/entities/user"
import { GetUserByUsernameRepository } from "@/modules/accounts/repostories/get-user-by-username-repository"
import { UsersAdapters } from "../../adapters/users.adapter"

export class PrismaGetUserByUsernameRepository
  implements GetUserByUsernameRepository
{
  async get(username: string): Promise<User | null> {
    const model = await prisma.users.findFirst({
      where: { username },
    })

    if (!model) {
      return null
    }

    const entity = UsersAdapters.toEntity(model)

    return entity
  }
}
