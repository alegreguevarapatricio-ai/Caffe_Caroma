import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

function LaStoria() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div
        className="h-96 bg-cover bg-center relative"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1600&q=80)'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white">LA STORIA</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            La storia di Karoma inizia con una passione: quella per il caffè autentico,
            quello che racconta storie di terre lontane e di tradizioni antiche.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">L'inizio</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Fondata a Napoli nel 1953, città dove il caffè non è solo una bevanda ma un rito quotidiano,
            Karoma nasce dal desiderio di portare l'eccellenza napoletana in tutto il mondo.
            Ogni tazza che serviamo è il risultato di anni di esperienza, ricerca e dedizione.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">La nostra filosofia</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Crediamo che un grande caffè inizi dalla selezione delle migliori materie prime.
            Lavoriamo direttamente con i produttori, visitando le piantagioni e costruendo
            relazioni basate sulla fiducia e sul rispetto reciproco.
          </p>

          <div className="bg-red-50 border-l-4 border-red-600 p-6 my-12">
            <p className="text-lg text-gray-900 italic">
              "Il caffè non è solo una bevanda, è un'esperienza che unisce persone,
              culture e momenti indimenticabili."
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Oggi</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Oggi Karoma è sinonimo di qualità e innovazione. Continuiamo a evolverci,
            sperimentando nuove miscele e tecnologie, ma sempre con un occhio alla tradizione
            che ci ha resi quello che siamo. La nostra torrefazione produce oltre 500.000 kg
            di caffè all'anno, esportando in più di 20 paesi nel mondo.
          </p>

          {/* Timeline */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">La nostra storia</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-24 flex-shrink-0 text-right">
                  <span className="text-2xl font-bold text-red-600">1953</span>
                </div>
                <div className="border-l-2 border-red-600 pl-6 pb-8">
                  <h3 className="font-bold text-gray-900 mb-2">La fondazione</h3>
                  <p className="text-gray-600">Nasce Karoma nel cuore di Napoli, con una piccola torrefazione artigianale.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-24 flex-shrink-0 text-right">
                  <span className="text-2xl font-bold text-red-600">1975</span>
                </div>
                <div className="border-l-2 border-red-600 pl-6 pb-8">
                  <h3 className="font-bold text-gray-900 mb-2">L'espansione</h3>
                  <p className="text-gray-600">Apertura del nuovo stabilimento e inizio delle esportazioni in Europa.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-24 flex-shrink-0 text-right">
                  <span className="text-2xl font-bold text-red-600">2000</span>
                </div>
                <div className="border-l-2 border-red-600 pl-6 pb-8">
                  <h3 className="font-bold text-gray-900 mb-2">Innovazione</h3>
                  <p className="text-gray-600">Lancio delle prime capsule compatibili, mantenendo la qualità artigianale.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-24 flex-shrink-0 text-right">
                  <span className="text-2xl font-bold text-red-600">2020</span>
                </div>
                <div className="border-l-2 border-red-600 pl-6">
                  <h3 className="font-bold text-gray-900 mb-2">Sostenibilità</h3>
                  <p className="text-gray-600">Installazione dell'impianto fotovoltaico da 100 kW e certificazione ambientale.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <Link
              to="/la-produzione"
              className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Scopri la produzione
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LaStoria