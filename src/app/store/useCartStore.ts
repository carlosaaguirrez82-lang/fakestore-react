import { create } from 'zustand'
import type { Product } from '../../domain/models/Product'

interface CartItem extends Product {
    quantity: number
}

interface CarState {
    items: CartItem[]
    //addToCart es una función que recibe un objeto de tipo Product y no devuelve nada
    modQuantity: (product: Product, symbol: string) => void
    removeFromCart: (id: number) => void
    clearCart: () => void
}

export const useCartStore = create<CarState>((set, get) => ({
    items: [],

    modQuantity: (product, symbol) => {
        const items = get().items
        const existing = items.find((i) => i.id === product.id)

        if (existing) {
            const newItems = items.map((i) => {
                if (i.id === product.id) {
                    return {
                        ...i, quantity: symbol === '+' ? i.quantity + 1 : i.quantity - 1
                    };
                }
                return i;
            });
            set({ items: newItems });
        } else {
            set({ items: [...items, { ...product, quantity: 1 }] })
        }
    },

    removeFromCart: (id) =>
        set({
            items: get().items.filter((i) => i.id !== id),
        }),


    clearCart: () => set({ items: [] }),
}))