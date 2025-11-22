import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, Menu, X, ChevronDown, Facebook, Instagram } from 'lucide-react'
import useCartStore from '../store/cartStore'

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false)
  const itemCount = useCartStore((state) => state.getItemCount())

  const navItems = [
    { name: 'HOME', path: '/' },
    {
      name: 'COMPANY PROFILE',
      dropdown: [
        { name: 'La Storia', path: '/la-storia' },
        { name: 'La Produzione', path: '/la-produzione' },
        { name: "L'impegno per l'ambiente", path: '/ambiente' },
        { name: 'Investimenti', path: '/investimenti' }
      ]
    },
    { name: 'SHOP', path: '/shop' },
    { name: 'STAND', path: '/stand' },
    { name: 'PRIVATE LABEL', path: '/private-label' },
    { name: 'CONTATTI', path: '/contatti' }
  ]

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <div className="text-2xl font-bold text-red-600">
              CAFFÈ
              <span className="text-black text-3xl block -mt-1">karoma®</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.dropdown ? (
                  <div>
                    <button className="flex items-center space-x-1 text-sm font-medium text-gray-800 hover:text-red-600 transition-colors">
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      {item.dropdown.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.path}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors first:rounded-t-lg last:rounded-b-lg"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="text-sm font-medium text-gray-800 hover:text-red-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right side: Cart & Social */}
          <div className="flex items-center space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hidden lg:block text-gray-600 hover:text-red-600 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hidden lg:block text-gray-600 hover:text-red-600 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <Link to="/cart" className="relative">
              <ShoppingCart className="w-6 h-6 text-gray-800 hover:text-red-600 transition-colors" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {itemCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-gray-800"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item, index) => (
              <div key={index}>
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => setCompanyDropdownOpen(!companyDropdownOpen)}
                      className="flex items-center justify-between w-full text-sm font-medium text-gray-800 py-2"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${companyDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {companyDropdownOpen && (
                      <div className="pl-4 space-y-2 mt-2">
                        {item.dropdown.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-sm text-gray-600 hover:text-red-600 py-1"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-sm font-medium text-gray-800 hover:text-red-600 py-2"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="flex space-x-4 pt-4 border-t border-gray-200">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-red-600">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-red-600">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header