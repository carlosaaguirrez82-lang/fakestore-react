import { Link } from 'react-router-dom'
import { useCartStore } from '../../../app/store/useCartStore'
import './ NavBar.scss'

export function NavBar() {
  const totalItems = useCartStore((s) =>
    s.items.reduce((acc, item) => acc + item.quantity, 0)
  )

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">FakeStore</Link>
      </div>

      <ul className="navbar__links">
        <li>
          <Link to="/products">Productos</Link>
        </li>
        <li className="navbar__cart">
          <Link to="/cart">
            🛒 Carrito
            {totalItems > 0 && (
              <span className="navbar__badge">{totalItems}</span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  )
}
