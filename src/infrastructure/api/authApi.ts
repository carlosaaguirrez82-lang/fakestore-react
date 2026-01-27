import { httpClient } from './httpClient'
import type { AuthRepository } from '../../domain/repositories/AuthRepository'

export const authApi: AuthRepository = {
async login(username, password) {

    try {
      const { data } = await httpClient.post('/auth/login', {
        username,
        password,
      })
      return data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
    } catch (error: any) {      
      throw new Error(error.response?.data || 'Usuario o contraseña incorrectos')
    }
 },
}