import { Entity } from "@/shared/domain/entity"

export interface AccountDetailProps {
  id: string
  name: string
  username: string
}

export class AccountDetail extends Entity {
  private name: string
  private username: string

  constructor(props: AccountDetailProps) {
    super(props.id)
    this.name = props.name
    this.username = props.username
  }

  public getName(): string {
    return this.name
  }

  public getUsername(): string {
    return this.username
  }
}
