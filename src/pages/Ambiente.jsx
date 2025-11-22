import { Link } from 'react-router-dom'
import { Leaf, Sun, Recycle, Droplets, ArrowRight } from 'lucide-react'

function Ambiente() {
  const initiatives = [
    {
      icon: Sun,
      title: 'Energia solare',
      description: '100 kW di pannelli solari alimentano il 100% della nostra produzione',
      stat: '100 kW'
    },
    {
      icon: Recycle,
      title: 'Riciclo',
      description: 'Il 95% dei nostri scarti di produzione viene riciclato o riutilizzato',
      stat: '95%'
    },
    {
      icon: Droplets,
      title: 'Gestione acqua',
      description: 'Sistema di recupero e trattamento delle acque di lavorazione',
      stat: '-40%'
    },
    {
      icon: Leaf,
      title: 'Packaging eco',
      description: 'Imballaggi riciclabili e riduzione della plastica monouso',
      stat: '100%'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div
        className="h-96 bg-cover bg-center relative"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1600&q=80)'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white">L'IMPEGNO PER L'AMBIENTE</h1>
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Sostenibilità al primo posto
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Il nostro impegno per un futuro più verde e sostenibile.
            Ogni tazza di Karoma è prodotta nel rispetto dell'ambiente.
          </p>
        </div>

        {/* Initiatives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {initiatives.map((initiative, index) => {
            const Icon = initiative.icon
            return (
              <div key={index} className="bg-green-50 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-green-600 mb-2">{initiative.stat}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{initiative.title}</h3>
                <p className="text-sm text-gray-600">{initiative.description}</p>
              </div>
            )
          })}
        </div>

        {/* Solar Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Sun className="w-8 h-8 text-yellow-500" />
              <span className="text-yellow-600 font-semibold">Energia Pulita</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              100 kW di sole alimentano ogni tazza di Karoma
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Nel 2020 abbiamo installato un impianto fotovoltaico da 100 kW sul tetto
              della nostra torrefazione. L'energia solare alimenta l'intero ciclo produttivo:
              dalla tostatura al confezionamento.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Questo investimento ci permette di ridurre le emissioni di CO₂ di oltre
              50 tonnellate all'anno, equivalenti a piantare 2.500 alberi.
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <p className="text-gray-800">
                <strong>Risparmio annuo:</strong> 50+ tonnellate di CO₂
              </p>
            </div>
          </div>
          <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80"
              alt="Pannelli solari"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Packaging Section */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=800&q=80"
                alt="Packaging sostenibile"
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center space-x-3 mb-4">
                <Recycle className="w-8 h-8 text-green-600" />
                <span className="text-green-600 font-semibold">Packaging Responsabile</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Meno plastica, più futuro
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Stiamo progressivamente eliminando la plastica monouso dai nostri imballaggi.
                Le nostre capsule sono realizzate in materiali compostabili e le confezioni
                sono in carta riciclata certificata FSC.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Capsule compostabili
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Carta certificata FSC
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Inchiostri vegetali
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  Zero plastica entro 2025
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/investimenti"
            className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Scopri i nostri investimenti
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Ambiente