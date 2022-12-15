import { NextFunction, Request, Response } from "express"
import "express-async-errors"

export default function handleError(
  err: Error,
  _request: Request,
  response: Response,
  _next: NextFunction
) {
  if (err instanceof Error) {
    return response.status(400).json({ status: 400, message: err.message })
  }

  return response
    .status(500)
    .json({ status: 500, message: "Internal server error" })
}
