import { useQuery } from '@tanstack/react-query'
import { productApi } from '../../infrastructure/api/productApi'

export function useProducts() {
  return useQuery({
    queryKey: ['products'],
    queryFn: () => productApi.getAll(),
  })
}
