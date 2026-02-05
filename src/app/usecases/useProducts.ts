import { useQuery } from '@tanstack/react-query'
import { productApi } from '../../infrastructure/api/productApi'
import { SpecialCategories } from '../constants/categories';

export function useProducts(categoryName?: string) {
  return useQuery({
    queryKey: ['products'],
    queryFn: () => productApi.getAllProducts(),
    staleTime: 1000 * 60 * 5, // Los datos se consideran "frescos" por 5 minutos
    select: (allProducts) => {
      if (!categoryName) return allProducts;

      switch (categoryName) {
        case SpecialCategories.BetterRatings:
          return allProducts.filter(p => p.rating.rate >= 4.5);
        
        case SpecialCategories.LatestPieces:
          // Simulamos últimas piezas tomando los últimos 6
          return allProducts.slice(-6);

        case SpecialCategories.Sales:
          // Simulamos ofertas (productos de menos de $50)
          return allProducts.filter(p => p.price < 50);

        default:
          // Si es una categoría normal de la API (electronics, jewelery, etc.)
          return allProducts.filter(p => p.category === categoryName);
      }
    },
  })
}
