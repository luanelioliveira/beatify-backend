import auth from "@/infra/config/auth"
import { sign, verify } from "jsonwebtoken"

interface Payload {
  sub: string
}

export async function generateToken(value: string): Promise<string> {
  const token = sign({ value }, auth.token.secretKey, {
    subject: value,
    expiresIn: auth.token.expiresIn,
  })

  return token
}

export async function decryptToken(token: string): Promise<string> {
  const { sub } = verify(token, auth.token.secretKey) as Payload

  return sub
}
