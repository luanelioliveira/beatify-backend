export default {
  token: {
    secretKey: process.env.TOKEN_SECRET_KEY || "f171e010b9d634d1fc0c6",
    expiresIn: process.env.TOKEN_EXPIRES_IN || "1d",
  },
}
