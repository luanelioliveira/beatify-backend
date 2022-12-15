import { User } from "@/modules/accounts/entities/user"

export interface GetUserByUsernameRepository {
  get(username: string): Promise<User | null>
}
