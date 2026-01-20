import type { AuthResponse } from '../models/Auth'

export interface AuthRepository {
login(username: string, password: string): Promise<AuthResponse>
}