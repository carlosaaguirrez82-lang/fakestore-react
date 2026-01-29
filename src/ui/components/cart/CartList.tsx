import type { CartItem as CartItemModel } from '../../../domain/models/CartItem'
import { CartItem } from './CartItem'
import './cart.scss'

interface Props {
  items: CartItemModel[]
  onIncrement: (id: number) => void
  onDecrement: (id: number) => void
  onRemove: (id: number) => void
}

export function CartList({
    items, 
    onIncrement,
    onDecrement,
    onRemove }: Props) {
  if (items.length === 0) {
    return <p className="cart-empty">Tu carrito está vacío</p>
  }

  return (
    <div className="cart-list">
      {items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onRemove={onRemove}
        />
      ))}
    </div>
  )
}
