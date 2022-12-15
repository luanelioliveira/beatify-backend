export interface TokenService {
  generateToken(value: string): Promise<string>
  decryptToken(token: string): Promise<string>
}
