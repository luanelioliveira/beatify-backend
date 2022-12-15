import { Product } from "./product"

describe("Product", () => {
  test("should able to create a new product with ID", () => {
    const actual = new Product({
      id: "any-id",
      name: "any-name",
      description: "any-description",
      price: 1,
    })

    expect(actual.getId()).toEqual("any-id")
    expect(actual.getName()).toEqual("any-name")
    expect(actual.getDescription()).toEqual("any-description")
    expect(actual.getPrice()).toEqual(1)
  })

  test("should able to create a new product without ID", () => {
    const actual = new Product({
      name: "any-name",
      description: "any-description",
      price: 1,
    })

    expect(actual.getId()).not.toBeNull()
    expect(actual.getName()).toEqual("any-name")
    expect(actual.getDescription()).toEqual("any-description")
    expect(actual.getPrice()).toEqual(1)
  })

  test("should not able to create a new product with negative price", () => {
    expect(
      () =>
        new Product({
          name: "any-name",
          description: "any-description",
          price: -1,
        })
    ).toThrowError()
  })
})
