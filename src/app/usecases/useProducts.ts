import { useQuery } from '@tanstack/react-query'
import { productApi } from '../../infrastructure/api/productApi'

export function useProducts() {
  return useQuery({
    queryKey: ['products'],
    queryFn: () => productApi.getAllProducts(),
    staleTime: 1000 * 60 * 5, // Los datos se consideran "frescos" por 5 minutos
  })
}
