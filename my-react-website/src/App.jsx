import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <div>
      <nav className="p-4 bg-gray-100">
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/about" className="mr-4">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<div className="p-6">Page not found</div>} />
      </Routes>
    </div>
  )
}

export default App
