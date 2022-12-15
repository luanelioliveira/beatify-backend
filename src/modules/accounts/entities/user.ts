import { Entity } from "@/shared/domain/entity"

export interface UserProps {
  id?: string
  name: string
  username: string
  password: string
}

export class User extends Entity {
  private name: string
  private username: string
  private password: string

  constructor(props: UserProps) {
    super(props.id)
    this.name = props.name
    this.username = props.username
    this.password = props.password
  }

  public getName(): string {
    return this.name
  }

  public getUsername(): string {
    return this.username
  }

  public getPassword(): string {
    return this.password
  }
}
