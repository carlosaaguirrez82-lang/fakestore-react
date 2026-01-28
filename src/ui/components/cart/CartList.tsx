import type { CartItem as CartItemModel } from '../../../domain/models/CartItem'
import { CartItem } from './CartItem'
import './cart.scss'

interface Props {
  items: CartItemModel[]
  onRemove: (id: number) => void
}

export function CartList({ items, onRemove }: Props) {
  if (items.length === 0) {
    return <p className="cart-empty">Tu carrito está vacío</p>
  }

  return (
    <div className="cart-list">
      {items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onRemove={onRemove}
        />
      ))}
    </div>
  )
}
