import { httpClient } from './httpClient'
import type { AuthRepository } from '../../domain/repositories/AuthRepository'

export const authApi: AuthRepository = {
    async login(username, password) {
        const { data } = await httpClient.post('auth/login', {
            username,
            password,
            //username: username, 
            //password: password
        })
        return data;
    },
}
