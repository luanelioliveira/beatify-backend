import { User } from "@/modules/accounts/entities/user"
import { UserModel } from "../models/user.model"

export class UsersAdapters {
  static toEntity(model: UserModel): User {
    const entity = new User({
      id: model.id,
      name: model.name,
      username: model.username,
      password: model.password,
    })
    return entity
  }

  static toModel(entity: User): UserModel {
    const model = {
      id: entity.getId(),
      name: entity.getName(),
      username: entity.getUsername(),
      password: entity.getPassword(),
    }
    return model
  }
}
