import type{ User } from '../models/User'

export interface UserRepository {
getAll(): Promise<User[]>
getById(id: number): Promise<User>
}