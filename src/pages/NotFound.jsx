import { Link } from 'react-router-dom'
import { Home, ArrowLeft, Coffee } from 'lucide-react'

function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
      <div className="max-w-md w-full mx-4 text-center">
        <div className="mb-8">
          <Coffee className="w-24 h-24 text-red-600 mx-auto mb-4" />
          <h1 className="text-8xl font-bold text-gray-900 mb-2">404</h1>
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Pagina non trovata</h2>
          <p className="text-gray-600">
            Ops! Sembra che questa pagina sia andata in pausa caffè. 
            Non riusciamo a trovarla.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            to="/"
            className="flex items-center justify-center w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            <Home className="w-5 h-5 mr-2" />
            Torna alla Home
          </Link>
          <Link
            to="/shop"
            className="flex items-center justify-center w-full border border-gray-300 hover:border-gray-400 text-gray-700 font-medium py-3 px-6 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Vai allo Shop
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound