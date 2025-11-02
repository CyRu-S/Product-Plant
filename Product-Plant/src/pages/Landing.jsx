import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div className="landing" style={{
      backgroundImage: 'url(https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=1600&auto=format&fit=crop)'
    }}>
      <div className="landing-overlay">
        <h1 className="title">Product Plant</h1>
        <p className="subtitle">We bring nature indoors with curated, easy-care houseplants delivered to your door.</p>
        <Link to="/products" className="cta">Get Started</Link>
      </div>
    </div>
  )
}
