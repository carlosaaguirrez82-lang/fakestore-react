import type { CartItem as CartItemModel } from '../../../domain/models/CartItem'

interface Props {
  item: CartItemModel
  onIncrement: (id: number) => void
  onDecrement: (id: number) => void
  onRemove: (id: number) => void
}

export function CartItem({
   item, 
   onRemove,
   onIncrement,
   onDecrement}: Props) {
  return (
    <article className="cart-item">
      <img
        src={item.image}
        alt={item.title}
        className="cart-item__image"
      />

      <div className="cart-item__info">
        <h3 className="cart-item__title">{item.title}</h3>
        <p className="cart-item__price">
          ${item.price} × {item.quantity}
        </p>
        <div className="cart-item__actions">
          <button onClick={() => onDecrement(item.id)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => onIncrement(item.id)}>+</button>
        </div>
      </div>

      <button
        className="cart-item__remove"
        onClick={() => onRemove(item.id)}
      >
        ✕
      </button>
    </article>
  )
}
