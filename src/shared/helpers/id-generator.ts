import { ObjectID } from "bson"

export class IdGenerator {
  static new(): string {
    return new ObjectID().toString()
  }
}
