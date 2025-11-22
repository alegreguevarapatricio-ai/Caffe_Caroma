import { Link } from 'react-router-dom'
import { Leaf, ArrowRight } from 'lucide-react'
import { products, categories } from '../data/products'

function Home() {
  const featuredProducts = products.filter(p => p.featured)

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1600&q=80)'
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Il vero espresso
              <span className="text-red-500 block">napoletano</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Dal 1953, passione e tradizione in ogni tazzina. Scopri il gusto autentico del caffè Karoma.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition-colors"
            >
              Scopri i prodotti
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Environmental Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Leaf className="w-8 h-8 text-green-600" />
                <span className="text-green-600 font-semibold">Sostenibilità</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                100 kW di sole alimentano ogni tazza di Karoma.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Abbiamo installato un impianto fotovoltaico da 100 kW sul tetto della nostra torrefazione: 
                l'energia solare alimenta l'intero ciclo produttivo, riduce le emissioni di CO₂ e rende 
                ogni tazza di Karoma ancora più sostenibile.
              </p>
              <Link
                to="/ambiente"
                className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold"
              >
                Scopri il nostro impegno
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80"
                alt="Pannelli solari"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">I NOSTRI PRODOTTI</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.slug}`}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-red-600 font-bold">
                    {product.priceRange 
                      ? `€${product.priceRange.min.toFixed(2)} - €${product.priceRange.max.toFixed(2)}`
                      : `€${product.price.toFixed(2)}`
                    }
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/shop"
              className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Vedi tutti i prodotti
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">CATEGORIE</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/shop?category=${category.id}`}
                className="group relative block aspect-square overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white text-lg font-bold group-hover:text-red-400 transition-colors">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home