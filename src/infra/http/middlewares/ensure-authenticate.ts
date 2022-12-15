import { decryptToken } from "@/modules/accounts/utils/token"
import { NextFunction, Request, Response } from "express"

export async function ensureAuthenticate(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    return response.status(401).json({ message: "Token is missing" })
  }

  const [, token] = authHeader.split(" ")

  if (!token) {
    return response.status(401).json({ message: "Token is missing" })
  }

  try {
    const userId = await decryptToken(token)

    request.userId = userId

    return next()
  } catch (error) {
    console.log(error)
    return response.status(401).json({ message: "Invalid token" })
  }
}
