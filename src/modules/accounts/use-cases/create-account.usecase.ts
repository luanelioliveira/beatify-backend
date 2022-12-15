import { inject, injectable } from "tsyringe"
import { User } from "@/modules/accounts/entities/user"
import { encryptPassword } from "@/modules/accounts/utils/password"
import { GetUserByUsernameRepository } from "../repostories/get-user-by-username-repository"
import { SaveUserRepository } from "../repostories/save-user-repository"
import { AccountDetail } from "../entities/account-detail"

interface ICreateAccount {
  name: string
  username: string
  password: string
}

@injectable()
export class CreateAccountUseCase {
  constructor(
    @inject("GetUserByUsernameRepository")
    readonly getUserByUsernameRepository: GetUserByUsernameRepository,
    @inject("SaveUserRepository")
    readonly saveUserRepository: SaveUserRepository
  ) {}

  async execute({ name, username, password }: ICreateAccount) {
    const accountExists = await this.getUserByUsernameRepository.get(username)

    if (accountExists) {
      throw new Error("This account already exists")
    }

    const hashPassword = await encryptPassword(password)

    const newAccount = new User({ name, username, password: hashPassword })

    const accountCreated = await this.saveUserRepository.save(newAccount)

    const acountDetail = new AccountDetail({
      id: accountCreated.getId(),
      name: accountCreated.getName(),
      username: accountCreated.getUsername(),
    })

    return acountDetail
  }
}
