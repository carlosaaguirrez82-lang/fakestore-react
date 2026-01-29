import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Product } from '../../domain/models/Product'

interface CartItem extends Product {
  quantity: number
}

interface CartState {
  items: CartItem[]
  addToCart: (product: Product) => void
  increment: (id: number) => void
  decrement: (id: number) => void
  removeFromCart: (id: number) => void  
  clearCart: () => void
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addToCart: (product) => {
        const items = get().items
        const existing = items.find((i) => i.id === product.id)

        if (existing) {
          set({
            items: items.map((i) =>
              i.id === product.id
                ? { ...i, quantity: i.quantity + 1 }
                : i
            ),
          })
        } else {
          set({
            items: [...items, { ...product, quantity: 1 }],
          })
        }
      },

      increment: (id: number) =>
      set({
        items: get().items.map((i) =>
        i.id === id ? { ...i, quantity: i.quantity + 1 } : i
        ),
       }),

      decrement: (id:number) =>
      set({
      items: get().items
        .map((i) =>
          i.id === id ? { ...i, quantity: i.quantity - 1 } : i
        )
        .filter((i) => i.quantity > 0),
      }),

      removeFromCart: (id) =>
        set({
          items: get().items.filter((i) => i.id !== id),
        }),

      clearCart: () => set({ items: [] }),
    }),
    {
      name: 'cart-storage', // 👈 clave en localStorage
    }
  )
)
