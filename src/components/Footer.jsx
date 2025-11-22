import { Link } from 'react-router-dom'
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo & Description */}
          <div>
            <div className="text-2xl font-bold text-red-600 mb-4">
              CAFFÈ
              <span className="text-white text-3xl block -mt-1">karoma®</span>
            </div>
            <p className="text-gray-400 text-sm">
              Tradizione napoletana e innovazione per un espresso inconfondibile dal 1953.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-red-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-red-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/la-storia" className="text-gray-400 hover:text-white transition-colors">
                  La Storia
                </Link>
              </li>
              <li>
                <Link to="/la-produzione" className="text-gray-400 hover:text-white transition-colors">
                  La Produzione
                </Link>
              </li>
              <li>
                <Link to="/ambiente" className="text-gray-400 hover:text-white transition-colors">
                  Ambiente
                </Link>
              </li>
              <li>
                <Link to="/investimenti" className="text-gray-400 hover:text-white transition-colors">
                  Investimenti
                </Link>
              </li>
            </ul>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/shop" className="text-gray-400 hover:text-white transition-colors">
                  Tutti i Prodotti
                </Link>
              </li>
              <li>
                <Link to="/shop?category=capsule-nespresso" className="text-gray-400 hover:text-white transition-colors">
                  Capsule Nespresso
                </Link>
              </li>
              <li>
                <Link to="/shop?category=capsule-dolcegusto" className="text-gray-400 hover:text-white transition-colors">
                  Capsule Dolce Gusto
                </Link>
              </li>
              <li>
                <Link to="/shop?category=cialde" className="text-gray-400 hover:text-white transition-colors">
                  Cialde ESE
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contatti</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start text-gray-400">
                <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                <span>Via Example 123<br />80100 Napoli, Italia</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                <span>+39 081 123 4567</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                <span>info@caffekaroma.it</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© 2025 Caffè. Tutti i diritti riservati.</p>
            <p className="mt-2 md:mt-0 text-xs">
              FEIO S.R.L. - ASSE VI - Priorità di investimento: 13i - Azione: 3.1.1 - Develop by ÑiaDesign.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer