import { User } from "@/modules/accounts/entities/user"

export interface GetUserByIdRepository {
  get(id: string): Promise<User | null>
}
