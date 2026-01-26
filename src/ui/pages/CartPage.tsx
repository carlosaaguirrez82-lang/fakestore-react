import { useCartStore } from '../../app/store/useCartStore'
import  MainLayout from '../layouts/MainLayout'

export function CartPage() {
  const { items, removeFromCart, clearCart } = useCartStore()

  return (
    <MainLayout>
      <h2>Carrito</h2>

      {items.map((item) => (
        <div key={item.id}>
          <p>
            {item.title} x {item.quantity}
          </p>
          <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
        </div>
      ))}

      {items.length > 0 && <button onClick={clearCart}>Vaciar</button>}
    </MainLayout>
  )
}
