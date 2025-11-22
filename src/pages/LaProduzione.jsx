    import { Link } from 'react-router-dom'
import { Coffee, Leaf, Award, Settings, ArrowRight } from 'lucide-react'

function LaProduzione() {
  const steps = [
    {
      icon: Leaf,
      title: 'Selezione',
      description: 'Selezioniamo i migliori chicchi di caffè dalle piantagioni di Brasile, Colombia, Etiopia e Vietnam.'
    },
    {
      icon: Settings,
      title: 'Tostatura',
      description: 'Tostiamo con tecnica split-roasting calibrata per ogni origine, esaltando gli aromi naturali.'
    },
    {
      icon: Coffee,
      title: 'Miscelazione',
      description: 'Creiamo blend unici combinando diverse origini e tostature in ambienti protetti.'
    },
    {
      icon: Award,
      title: 'Confezionamento',
      description: 'Confezioniamo in pack a barriera che fermano ossidazione e umidità, preservando la freschezza.'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div
        className="h-96 bg-cover bg-center relative"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=1600&q=80)'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white">LA PRODUZIONE</h1>
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Il nostro processo produttivo
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Dalla piantagione alla tazza: un viaggio di qualità e passione.
            Ogni lotto è seguito passo dopo passo per garantire l'eccellenza.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-10 h-10 text-red-600" />
                </div>
                <div className="text-4xl font-bold text-red-600 mb-2">{index + 1}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            )
          })}
        </div>

        {/* Detail Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80"
              alt="Chicchi di caffè"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Split-Roasting: la nostra tecnica
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Ogni origine di caffè ha caratteristiche uniche che richiedono un trattamento specifico.
              Con la tecnica split-roasting, tostiamo separatamente ogni origine alla temperatura
              e per il tempo ottimali, poi misceliamo per creare il blend perfetto.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Questo processo richiede più tempo e attenzione, ma il risultato è un caffè
              con un profilo aromatico complesso e bilanciato, impossibile da ottenere
              con la tostatura tradizionale.
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-3">I numeri della nostra produzione:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>500.000 kg</strong> di caffè prodotti all'anno</li>
                <li>• <strong>4 origini</strong> principali selezionate</li>
                <li>• <strong>20+ paesi</strong> di esportazione</li>
                <li>• <strong>100%</strong> energia da fonti rinnovabili</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Formats Section */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            I nostri formati
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-4xl mb-4">☕</div>
              <h3 className="font-bold text-gray-900 mb-2">Capsule</h3>
              <p className="text-sm text-gray-600">Compatibili Nespresso, Dolce Gusto, Caffitaly</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-4xl mb-4">🫘</div>
              <h3 className="font-bold text-gray-900 mb-2">Cialde ESE</h3>
              <p className="text-sm text-gray-600">Formato universale 44mm</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="font-bold text-gray-900 mb-2">Grani</h3>
              <p className="text-sm text-gray-600">Per macchine professionali</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-4xl mb-4">🥄</div>
              <h3 className="font-bold text-gray-900 mb-2">Macinato</h3>
              <p className="text-sm text-gray-600">Per moka e filtro</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/ambiente"
            className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Scopri il nostro impegno ambientale
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LaProduzione