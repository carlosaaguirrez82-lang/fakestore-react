import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { ProductCard } from '../ProductCard'
import type { Product } from '../../../../domain/models/Product'

// 🔹 Mock del store Zustand
const addToCartMock = vi.fn()

vi.mock('../../../../app/store/useCartStore', () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  useCartStore: (selector: any) =>
    selector({
      addToCart: addToCartMock,
    }),
}))

describe('ProductCard', () => {
  
   const product: Product = {
    id: 1,
    title: 'Product',
    price: 199,
    description: 'Test description',
    category: 'electronics',
    image: 'https://test.com/image.png',
  }

  it('debe mostrar la información del producto', () => {
    render(<ProductCard product={product} />)

    expect(screen.getByText('Product')).toBeInTheDocument()
    expect(screen.getByText('$199')).toBeInTheDocument()

    const img = screen.getByRole('img')
    expect(img).toHaveAttribute('src', product.image)
  })

  it('debe llamar addToCart cuando se hace click en Agregar', () => {
    render(<ProductCard product={product} />)

    const button = screen.getByRole('button', { name: /agregar/i })
    fireEvent.click(button)

    expect(addToCartMock).toHaveBeenCalledOnce()
    expect(addToCartMock).toHaveBeenCalledWith(product)
  })
})
