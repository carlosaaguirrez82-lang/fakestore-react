import { create } from 'zustand'
import type { Product } from '../../domain/models/Product'

interface CartItem extends Product {
  quantity: number
}

interface CartState {
  items: CartItem[]
  addToCart: (product: Product) => void
  removeFromCart: (id: number) => void
  clearCart: () => void
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],

  addToCart: (product) => {
    const items = get().items
    const existing = items.find((i) => i.id === product.id)

    if (existing) {
      set({
        items: items.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        ),
      })
    } else {
      set({
        items: [...items, { ...product, quantity: 1 }],
      })
    }
    console.log('Carrito actualizado:', get().items);
  },
  
  removeFromCart: (id) =>
    set({
      items: get().items.filter((i) => i.id !== id),
    }),

  clearCart: () => set({ items: [] }),
}))
