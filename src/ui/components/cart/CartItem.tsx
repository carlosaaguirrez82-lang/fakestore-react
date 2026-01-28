import type { CartItem as CartItemModel } from '../../../domain/models/CartItem'

interface Props {
  item: CartItemModel
  onRemove: (id: number) => void
}

export function CartItem({ item, onRemove }: Props) {
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
