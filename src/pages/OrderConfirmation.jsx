import { Link, useSearchParams } from 'react-router-dom'
import { CheckCircle, Package, Mail, Home } from 'lucide-react'

function OrderConfirmation() {
  const [searchParams] = useSearchParams()
  const orderNumber = searchParams.get('order')

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
      <div className="max-w-lg w-full mx-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Ordine confermato!
          </h1>

          {/* Description */}
          <p className="text-gray-600 mb-6">
            Grazie per il tuo ordine. Riceverai una email di conferma con i dettagli della spedizione.
          </p>

          {/* Order Number */}
          {orderNumber && (
            <div className="bg-gray-50 rounded-lg p-4 mb-8">
              <p className="text-sm text-gray-600 mb-1">Numero ordine</p>
              <p className="text-xl font-bold text-gray-900">{orderNumber}</p>
            </div>
          )}

          {/* Info Cards */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-red-50 rounded-lg p-4">
              <Package className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <p className="text-sm text-gray-700">
                Spedizione in 2-3 giorni lavorativi
              </p>
            </div>
            <div className="bg-red-50 rounded-lg p-4">
              <Mail className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <p className="text-sm text-gray-700">
                Email di conferma inviata
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="space-y-3">
            <Link
              to="/shop"
              className="block w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition-colors"
            >
              Continua lo shopping
            </Link>
            <Link
              to="/"
              className="flex items-center justify-center w-full border border-gray-300 hover:border-gray-400 text-gray-700 font-medium py-3 rounded-lg transition-colors"
            >
              <Home className="w-5 h-5 mr-2" />
              Torna alla home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderConfirmation