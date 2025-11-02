import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectTotalCount } from '../slices/cartSlice'

export default function Header() {
  const count = useSelector(selectTotalCount)
  return (
    <header className="header">
      <nav className="nav">
        <div className="brand">
          <Link to="/products">Product Plant</Link>
        </div>
        <div className="nav-links">
          <Link to="/products">Products</Link>
          <Link to="/cart" className="cart-link">
            <span role="img" aria-label="cart">🛒</span>
            <span className="cart-badge">{count}</span>
          </Link>
        </div>
      </nav>
    </header>
  )
}
