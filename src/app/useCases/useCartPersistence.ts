import { useEffect } from 'react';
import { useCartStore } from '../store/useCartStore'

export function useCartPersistence () {
    const productos = useCartStore((s) => s.items);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(productos));
    }, [productos])
}