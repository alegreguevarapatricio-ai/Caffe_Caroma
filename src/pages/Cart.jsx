import { Link } from 'react-router-dom'
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from 'lucide-react'
import useCartStore from '../store/cartStore'

function Cart() {
  const items = useCartStore((state) => state.items)
  const removeItem = useCartStore((state) => state.removeItem)
  const updateQuantity = useCartStore((state) => state.updateQuantity)
  const getTotal = useCartStore((state) => state.getTotal)

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
        <div className="text-center">
          <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Il tuo carrello è vuoto</h2>
          <p className="text-gray-600 mb-8">Aggiungi prodotti al carrello per continuare</p>
          <Link
            to="/shop"
            className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Vai allo shop
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          to="/shop"
          className="inline-flex items-center text-gray-600 hover:text-red-600 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Continua lo shopping
        </Link>

        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">CARRELLO</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item, index) => (
              <div key={`${item.id}-${item.variant}-${index}`} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex gap-6">
                  <div className="w-24 h-24 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">
                        No img
                      </div>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                    {item.variant && (
                      <p className="text-sm text-gray-600 mb-2">{item.variant}</p>
                    )}
                    <p className="text-lg font-bold text-red-600">€{item.price.toFixed(2)}</p>
                  </div>

                  <div className="flex flex-col items-end justify-between">
                    <button
                      onClick={() => removeItem(item.id, item.variant)}
                      className="text-gray-400 hover:text-red-600 transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1, item.variant)}
                        className="w-8 h-8 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1, item.variant)}
                        className="w-8 h-8 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Riepilogo ordine</h2>

              <div className="space-y-3 mb-6">
                {items.map((item, index) => (
                  <div key={`summary-${item.id}-${index}`} className="flex justify-between text-sm text-gray-600">
                    <span>{item.name} x{item.quantity}</span>
                    <span>€{(item.price * item.quantity).toFixed(2)}</span>
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
                  <span>Calcolato al checkout</span>
                </div>
                <div className="border-t pt-3 flex justify-between text-xl font-bold text-gray-900">
                  <span>Totale</span>
                  <span>€{getTotal().toFixed(2)}</span>
                </div>
              </div>

              <Link
                to="/checkout"
                className="block w-full bg-red-600 hover:bg-red-700 text-white text-center font-bold py-4 rounded-lg mt-6 transition-colors"
              >
                Procedi al checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart