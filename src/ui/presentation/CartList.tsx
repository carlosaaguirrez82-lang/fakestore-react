import type { CartItem } from '../../domain/models/CartItem'

interface Props {
  items: CartItem[]
  onRemove: (id: number) => void
}

export function CartList({ items, onRemove }: Props) {
  return (
    <>
      {items.map((item) => (
        <div key={item.id}>
          <p>
            {item.title} x {item.quantity}
          </p>
          <button onClick={() => onRemove(item.id)}>Eliminar</button>
        </div>
      ))}
    </>
  )
}
