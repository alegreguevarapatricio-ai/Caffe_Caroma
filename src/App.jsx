import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import OrderConfirmation from './pages/OrderConfirmation'
import LaStoria from './pages/LaStoria'
import LaProduzione from './pages/LaProduzione'
import Ambiente from './pages/Ambiente'
import Investimenti from './pages/Investimenti'
import Stand from './pages/Stand'
import PrivateLabel from './pages/PrivateLabel'
import Contatti from './pages/Contatti'
import NotFound from './pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route path="/la-storia" element={<LaStoria />} />
          <Route path="/la-produzione" element={<LaProduzione />} />
          <Route path="/ambiente" element={<Ambiente />} />
          <Route path="/investimenti" element={<Investimenti />} />
          <Route path="/stand" element={<Stand />} />
          <Route path="/private-label" element={<PrivateLabel />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App





