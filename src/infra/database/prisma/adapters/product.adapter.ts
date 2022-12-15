import { Product } from "@/modules/products/entities/product"
import { ProductModel } from "../models/product.model"

export class ProductAdapter {
  static toEntity(productModel: ProductModel): Product {
    const entity = new Product({
      id: productModel.id,
      name: productModel.name,
      description: productModel.description,
      price: productModel.price,
    })
    return entity
  }

  static toModel(entity: Product): ProductModel {
    const model = {
      id: entity.getId(),
      name: entity.getName(),
      description: entity.getDescription(),
      price: entity.getPrice(),
    }
    return model
  }
}
