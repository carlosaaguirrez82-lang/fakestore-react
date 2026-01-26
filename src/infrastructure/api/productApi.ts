import { httpClient } from './httpClient'
import type { ProductRepository } from '../../domain/repositories/ProductRepository'

export const productApi: ProductRepository = {

    async getAllProducts() {
        const { data } = await httpClient.get('/products')
        return data
      },

    async getById(id) {
        const { data } = await httpClient.get(`/products/${id}`)
        return data
    },
}