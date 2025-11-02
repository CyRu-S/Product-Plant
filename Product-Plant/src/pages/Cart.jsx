import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectItemsArray, selectTotalCount, selectTotalCost, increaseQty, decreaseQty, removeItem } from '../slices/cartSlice'

export default function Cart() {
  const dispatch = useDispatch()
  const items = useSelector(selectItemsArray)
  const totalCount = useSelector(selectTotalCount)
  const totalCost = useSelector(selectTotalCost)

  return (
    <div className="page">
      <h2>Your Cart</h2>
      <div className="cart-summary">
        <div>Total items: <strong>{totalCount}</strong></div>
        <div>Total cost: <strong>${totalCost.toFixed(2)}</strong></div>
      </div>

      {items.length === 0 ? (
        <div className="empty">Your cart is empty. <Link to="/products">Continue shopping</Link></div>
      ) : (
        <div className="cart-list">
          {items.map(item => (
            <div key={item.id} className="cart-row">
              <img src={item.image} alt={item.name} className="cart-thumb" />
              <div className="cart-info">
                <div className="name">{item.name}</div>
                <div className="unit">Unit: ${item.price.toFixed(2)}</div>
              </div>
              <div className="cart-controls">
                <button className="qty-btn" onClick={() => dispatch(decreaseQty(item.id))}>-</button>
                <span className="qty">{item.qty}</span>
                <button className="qty-btn" onClick={() => dispatch(increaseQty(item.id))}>+</button>
              </div>
              <div className="row-total">${(item.qty * item.price).toFixed(2)}</div>
              <button className="delete-btn" onClick={() => dispatch(removeItem(item.id))}>Delete</button>
            </div>
          ))}
        </div>
      )}

      <div className="cart-actions">
        <button className="btn" onClick={() => alert('Checkout Coming Soon')}>Checkout</button>
        <Link to="/products" className="btn secondary">Continue Shopping</Link>
      </div>
    </div>
  )
}
