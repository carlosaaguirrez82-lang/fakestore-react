import type { AuthResponse } from '../models/Auth'

//Es parte de la capa de dominios
//Esto es la primera parte de la delegación de tareas, se encarga de llamar al método login
//Solo dice qué hacer, pero no cómo 
export interface AuthRepository {
    login(username: string, password: string): Promise<AuthResponse>
}