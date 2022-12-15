import { decryptToken, generateToken } from "./token"

describe("Token Generator", () => {
  test("should be able to generate a token", async () => {
    const actual = await generateToken("any")

    expect(actual).not.toBeNull()
  })
  test("should be able to decrypt a token", async () => {
    const token = await generateToken("any")

    const actual = await decryptToken(token)

    expect(actual).toEqual("any")
  })
})
