import type {Product} from '../models/Product'

export interface ProductRepository {
  getAllProducts(): Promise<Product[]>
  getById(id: number): Promise<Product>
}