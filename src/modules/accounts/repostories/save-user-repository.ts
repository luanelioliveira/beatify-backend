import { User } from "@/modules/accounts/entities/user"

export interface SaveUserRepository {
  save(user: User): Promise<User>
}
