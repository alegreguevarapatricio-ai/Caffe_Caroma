import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import useCartStore from '../store/cartStore'

function Checkout() {
  const navigate = useNavigate()
  const items = useCartStore((state) => state.items)
  const getTotal = useCartStore((state) => state.getTotal)
  const clearCart = useCartStore((state) => state.clearCart)
  const [loading, setLoading] = useState(false)
  const isSubmitting = useRef(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'Italia',
    notes: ''
  })

  useEffect(() => {
    if (items.length === 0 && !isSubmitting.current) {
      navigate('/shop')
    }
  }, [items.length, navigate])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    isSubmitting.current = true

    const orderNumber = `ORD-${Date.now()}`
    
    setTimeout(() => {
      clearCart()
      navigate(`/order-confirmation?order=${orderNumber}`)
    }, 1500)
  }

  if (items.length === 0 && !isSubmitting.current) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          to="/cart"
          className="inline-flex items-center text-gray-600 hover:text-red-600 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Torna al carrello
        </Link>

        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">CHECKOUT</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-6 space-y-6">
              {/* Contact Info */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Informazioni di contatto</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nome completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Telefono *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Indirizzo di spedizione</h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      Indirizzo *
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                        Città *
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">
                        CAP *
                      </label>
                      <input
                        type="text"
                        id="postalCode"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                      Paese *
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                  Note ordine (opzionale)
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Note speciali per la consegna..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-4 rounded-lg font-bold text-lg transition-all ${
                  loading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-red-600 hover:bg-red-700 text-white'
                }`}
              >
                {loading ? 'Elaborazione in corso...' : 'Completa ordine'}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Il tuo ordine</h2>

              <div className="space-y-4 mb-6">
                {items.map((item, index) => (
                  <div key={`checkout-${item.id}-${index}`} className="flex gap-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 text-sm">{item.name}</p>
                      {item.variant && (
                        <p className="text-xs text-gray-500">{item.variant}</p>
                      )}
                      <p className="text-sm text-gray-600">x{item.quantity}</p>
                    </div>
                    <p className="font-semibold text-gray-900">
                      €{(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 space-y-3">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotale</span>
                  <span>€{getTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Spedizione</span>
                  <span>Gratuita</span>
                </div>
                <div className="border-t pt-3 flex justify-between text-xl font-bold text-gray-900">
                  <span>Totale</span>
                  <span>€{getTotal().toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout