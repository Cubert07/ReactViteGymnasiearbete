import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<><h1 className="text-3xl font-bold underline">404 Not Found</h1><p>Page not found :(</p></>} />
      </Routes>
    </>
  )
}
