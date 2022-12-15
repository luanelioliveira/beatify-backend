import { inject, injectable } from "tsyringe"
import { AccountDetail } from "@/modules/accounts/entities/account-detail"
import { GetUserByIdRepository } from "../repostories/get-user-by-id-repository"

interface IGetCustomerDetails {
  userId: string
}

@injectable()
export class GetAccountDetailsUseCase {
  constructor(
    @inject("GetUserByIdRepository")
    readonly getUserByIdRepository: GetUserByIdRepository
  ) {}

  async execute({ userId }: IGetCustomerDetails): Promise<AccountDetail> {
    const userExists = await this.getUserByIdRepository.get(userId)

    if (!userExists) {
      throw new Error("User does not exist")
    }

    const accountDetail = new AccountDetail({
      id: userExists.getId(),
      name: userExists.getName(),
      username: userExists.getUsername(),
    })

    return accountDetail
  }
}
