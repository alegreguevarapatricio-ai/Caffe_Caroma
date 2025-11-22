import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ShoppingCart, Plus, Minus, ArrowLeft, Check } from 'lucide-react'
import { products } from '../data/products'
import useCartStore from '../store/cartStore'

function ProductDetail() {
  const { slug } = useParams()
  const product = products.find(p => p.slug === slug)
  const [quantity, setQuantity] = useState(1)
  const [selectedVariant, setSelectedVariant] = useState(
    product?.variants?.length > 0 ? product.variants[0] : null
  )
  const [added, setAdded] = useState(false)
  const addItem = useCartStore((state) => state.addItem)

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-600 mb-4">Prodotto non trovato</p>
          <Link
            to="/shop"
            className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Torna allo shop
          </Link>
        </div>
      </div>
    )
  }

  const currentPrice = selectedVariant ? selectedVariant.price : product.price

  const handleAddToCart = () => {
    addItem(
      { ...product, price: currentPrice },
      quantity,
      selectedVariant ? selectedVariant.name : null
    )
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
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
          Torna allo shop
        </Link>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-6 lg:p-12">
            {/* Image */}
            <div className="aspect-square rounded-xl overflow-hidden bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              {product.featured && (
                <span className="inline-block bg-red-100 text-red-600 text-sm font-semibold px-3 py-1 rounded-full mb-4 w-fit">
                  IN EVIDENZA
                </span>
              )}

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>

              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Variants */}
              {product.variants && product.variants.length > 0 && (
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Formato:
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {product.variants.map((variant, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedVariant(variant)}
                        className={`px-4 py-2 rounded-lg border-2 transition-all ${
                          selectedVariant?.name === variant.name
                            ? 'border-red-600 bg-red-50 text-red-600'
                            : 'border-gray-200 hover:border-gray-300 text-gray-700'
                        }`}
                      >
                        {variant.name} - €{variant.price.toFixed(2)}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Price */}
              <div className="mb-6">
                <span className="text-3xl font-bold text-red-600">
                  €{currentPrice.toFixed(2)}
                </span>
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Quantità:
                </label>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <span className="text-xl font-semibold w-12 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all ${
                  added
                    ? 'bg-green-600 text-white'
                    : 'bg-red-600 hover:bg-red-700 text-white'
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-6 h-6 mr-2" />
                    Aggiunto al carrello!
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-6 h-6 mr-2" />
                    Aggiungi al carrello - €{(currentPrice * quantity).toFixed(2)}
                  </>
                )}
              </button>

              {/* Total */}
              {quantity > 1 && (
                <p className="text-center text-gray-500 mt-4">
                  {quantity} x €{currentPrice.toFixed(2)} = €{(currentPrice * quantity).toFixed(2)}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail