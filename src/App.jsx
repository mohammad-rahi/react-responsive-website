import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './comonents/Navbar'
import Home from './comonents/pages/Home'
import Services from './comonents/pages/Services'
import Products from './comonents/pages/Products'
import SignUp from './comonents/pages/SignUp'

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App