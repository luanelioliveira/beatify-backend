import { inject, injectable } from "tsyringe"
import { Session } from "@/modules/accounts/entities/session"
import { validatePassword } from "@/modules/accounts/utils/password"
import { generateToken } from "@/modules/accounts/utils/token"
import { GetUserByUsernameRepository } from "../repostories/get-user-by-username-repository"

interface ILogin {
  username: string
  password: string
}

@injectable()
export class CreateNewSessionUseCase {
  constructor(
    @inject("GetUserByUsernameRepository")
    private getUserByUsernameRepository: GetUserByUsernameRepository
  ) {}

  async execute({ username, password }: ILogin): Promise<Session> {
    const userExists = await this.getUserByUsernameRepository.get(username)

    if (!userExists) {
      throw new Error("Username or password invalid!")
    }

    const passwordMatch = await validatePassword(
      password,
      userExists.getPassword()
    )

    if (!passwordMatch) {
      throw new Error("Username or password invalid!")
    }

    const userId = userExists.getId() as string

    const token = await generateToken(userId)

    const newSession = new Session({ token })

    return newSession
  }
}
