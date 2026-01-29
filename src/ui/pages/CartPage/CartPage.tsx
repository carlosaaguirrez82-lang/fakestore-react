import { useCartStore } from '../../../app/store/useCartStore'
import MainLayout from '../../layouts/MainLayout'
import { CartList } from '../../components/cart/CartList'
import './CartPage.scss'

export function CartPage() {
  const { items, increment, decrement, removeFromCart, clearCart } = useCartStore()

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  return (
    <MainLayout>
      <section className="cart">
        <h2 className="cart__title">🛒 Tu carrito</h2>

        <CartList
          items={items}
          onIncrement={increment}
          onDecrement={decrement}
          onRemove={removeFromCart}
        />

        {items.length > 0 && (
          <footer className="cart__footer">
            <p className="cart__total">
              Total: <strong>${total.toFixed(2)}</strong>
            </p>

            <button className="cart__clear" onClick={clearCart}>
              Vaciar carrito
            </button>
          </footer>
        )}
      </section>
    </MainLayout>
  )
}
