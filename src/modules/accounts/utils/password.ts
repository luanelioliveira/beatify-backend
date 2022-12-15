import { compare, hash } from "bcrypt"

const SALT = 10

export async function encryptPassword(password: string): Promise<string> {
  const hashPassword = await hash(password, SALT)

  return hashPassword
}

export async function validatePassword(
  password: string,
  hashPassword: string
): Promise<boolean> {
  const passwordMatch = await compare(password, hashPassword)

  return passwordMatch
}
