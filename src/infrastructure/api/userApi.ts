import { httpClient } from './httpClient'
import type { UserRepository } from '../../domain/repositories/UserRepository'

export const userApi: UserRepository = {
async getAll() {
const { data } = await httpClient.get('/users')
return data
},
async getById(id) {
const { data } = await httpClient.get(`/users/${id}`)
return data
},
}