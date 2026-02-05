// src/app/utils/productFilters.ts
import type { Product } from '../../domain/models/Product';
import { SpecialCategories } from '../constants/categories';

export const filterProductsByCategory = (products: Product[], categoryName: string): Product[] => {
  switch (categoryName) {
    case SpecialCategories.BetterRatings:
      return products.filter(p => p.rating.rate >= 4);

    case SpecialCategories.LatestPieces:
      return products.filter(p => p.rating.count <= 20);

    case SpecialCategories.Sales:
      return products.filter(p => p.price <= 100);

    default:
      return products.filter(p => p.category === categoryName);
  }
};