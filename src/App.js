import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  
} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

import SingleShop from './pages/SingleShop'
import Cart from './pages/Cart'

import PlaceOrder from './pages/PlaceOrder'
import NuPieds from './pages/NuPieds'
import Babouches from './pages/Babouches'
import Footer from './components/Footer'
import ProductPage from './pages/ProductsPage'
import Orthopédique from './pages/Orthopédiques'
import Villes from './pages/Villes'


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />

        <Route path='/boutique/' element={<ProductPage />} />

        <Route path='/boutique/nu-pieds' element={<NuPieds />} />
        <Route path='/boutique/babouches' element={<Babouches />} />
        <Route path='/boutique/orthopédiques' element={<Orthopédique />} />
        <Route path='/boutique/ville' element={<Villes />} />

        <Route path='/product/:id' element={<SingleShop />} />
        <Route path='/cart' element={<Cart />} />

        <Route path='/placeorder' element={<PlaceOrder />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
