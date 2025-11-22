import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Filter, ShoppingCart } from 'lucide-react'
import { products, categories } from '../data/products'
import useCartStore from '../store/cartStore'

function Shop() {
  const [searchParams] = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('recent')
  const addItem = useCartStore((state) => state.addItem)

  useEffect(() => {
    const categoryParam = searchParams.get('category')
    if (categoryParam) {
      setSelectedCategory(categoryParam)
    }
  }, [searchParams])

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory)

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price_asc') return a.price - b.price
    if (sortBy === 'price_desc') return b.price - a.price
    if (sortBy === 'name') return a.name.localeCompare(b.name)
    return 0
  })

  const handleAddToCart = (e, product) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, 1, product.variants.length > 0 ? product.variants[0].name : null)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">SHOP</h1>
          <p className="text-xl text-red-100">Scopri tutti i nostri prodotti</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <span className="font-medium text-gray-700">Filtri:</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full sm:w-48 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value="all">Tutte le categorie</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full sm:w-48 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value="recent">Più recenti</option>
                <option value="price_asc">Prezzo: basso → alto</option>
                <option value="price_desc">Prezzo: alto → basso</option>
                <option value="name">Nome A-Z</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.slug}`}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {product.featured && (
                  <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    IN EVIDENZA
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-lg font-bold text-red-600">
                    {product.priceRange
                      ? `€${product.priceRange.min.toFixed(2)} - €${product.priceRange.max.toFixed(2)}`
                      : `€${product.price.toFixed(2)}`
                    }
                  </p>
                  <button
                    onClick={(e) => handleAddToCart(e, product)}
                    className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-colors"
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {sortedProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Nessun prodotto trovato in questa categoria.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Shop