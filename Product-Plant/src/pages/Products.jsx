import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, selectItemsObject } from '../slices/cartSlice'
import plants from '../data/plants'

export default function Products() {
  const dispatch = useDispatch()
  const items = useSelector(selectItemsObject)

  const categories = useMemo(() => Array.from(new Set(plants.map(p => p.category))), [])

  return (
    <div className="page">
      <h2>Our Houseplants</h2>
      {categories.map(cat => (
        <section key={cat} className="category-section">
          <h3 className="category-title">{cat}</h3>
          <div className="grid">
            {plants.filter(p => p.category === cat).map(p => {
              const disabled = Boolean(items[p.id])
              return (
                <div key={p.id} className="card">
                  <img src={p.image} alt={p.name} className="thumb" />
                  <div className="card-body">
                    <div className="card-title">{p.name}</div>
                    <div className="price">${p.price.toFixed(2)}</div>
                    <button
                      className="btn"
                      disabled={disabled}
                      onClick={() => dispatch(addToCart(p))}
                    >{disabled ? 'Added' : 'Add to Cart'}</button>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      ))}
    </div>
  )
}
