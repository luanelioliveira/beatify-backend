import { IdGenerator } from "../helpers/id-generator"

export abstract class Entity {
  private id: string

  constructor(id?: string) {
    this.id = id ? id : IdGenerator.new()
  }

  public getId(): string {
    return this.id
  }
}
