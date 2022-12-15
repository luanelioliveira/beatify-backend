import { Entity } from "@/shared/domain/entity"

export interface ProductProps {
  id?: string
  name: string
  description: string
  price: number
}

export class Product extends Entity {
  private name: string
  private description: string
  private price: number

  constructor(props: ProductProps) {
    super(props.id)

    if (props.price < 0) {
      throw new Error("Price must be a positive value")
    }

    this.price = props.price
    this.name = props.name
    this.description = props.description
  }

  public getName(): string {
    return this.name
  }

  public getDescription(): string {
    return this.description
  }

  public getPrice(): number {
    return this.price
  }

  public setName(name: string): void {
    this.name = name
  }

  public setDescription(description: string): void {
    this.description = description
  }

  public setPrice(price: number): void {
    this.price = price
  }
}
