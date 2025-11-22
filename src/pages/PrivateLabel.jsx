import { Link } from 'react-router-dom'
import { CheckCircle, Package, Palette, Award, Truck, HeadphonesIcon } from 'lucide-react'

function PrivateLabel() {
  const benefits = [
    {
      icon: Palette,
      title: 'Personalizzazione completa',
      description: 'Design del packaging su misura con il tuo brand'
    },
    {
      icon: Package,
      title: 'Ricette esclusive',
      description: 'Miscele sviluppate appositamente per te'
    },
    {
      icon: Award,
      title: 'Qualità certificata',
      description: 'Certificazioni ISO, HACCP e biologico disponibili'
    },
    {
      icon: Truck,
      title: 'Consegne rapide',
      description: 'Logistica efficiente in tutta Italia e Europa'
    },
    {
      icon: HeadphonesIcon,
      title: 'Supporto dedicato',
      description: 'Un team a tua disposizione per ogni esigenza'
    },
    {
      icon: CheckCircle,
      title: 'Quantitativi flessibili',
      description: 'Ordini minimi accessibili per ogni business'
    }
  ]

  const steps = [
    {
      number: '01',
      title: 'Consulenza',
      description: 'Analizziamo insieme le tue esigenze e il tuo target di mercato'
    },
    {
      number: '02',
      title: 'Sviluppo',
      description: 'Creiamo la miscela perfetta e il packaging personalizzato'
    },
    {
      number: '03',
      title: 'Produzione',
      description: 'Produciamo il tuo caffè con i più alti standard qualitativi'
    },
    {
      number: '04',
      title: 'Consegna',
      description: 'Spediamo direttamente a te o ai tuoi clienti'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div
        className="h-96 bg-cover bg-center relative"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1600&q=80)'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">PRIVATE LABEL</h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Crea il tuo brand di caffè con la nostra esperienza
            </p>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Il tuo caffè, la nostra qualità
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Offriamo servizi completi di private label per bar, ristoranti, hotel,
              catene di distribuzione e aziende che vogliono avere il proprio brand di caffè.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Con oltre 70 anni di esperienza nella torrefazione, mettiamo a disposizione
              la nostra competenza per creare prodotti unici che rispecchiano la tua identità.
            </p>
            <Link
              to="/contatti"
              className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Richiedi informazioni
            </Link>
          </div>
          <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80"
              alt="Private Label Coffee"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Perché scegliere Karoma
            </h2>
            <p className="text-xl text-gray-700">
              Vantaggi del nostro servizio private label
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Process */}
        <div className="bg-gray-900 text-white rounded-2xl p-8 lg:p-12 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Come funziona
            </h2>
            <p className="text-xl text-gray-300">
              Il percorso per creare il tuo caffè in 4 semplici passi
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-red-500 mb-4">{step.number}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Formats */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Formati disponibili
            </h2>
            <p className="text-xl text-gray-700">
              Tutti i formati per ogni esigenza
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-red-50 rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">☕</div>
              <h3 className="font-bold text-gray-900">Capsule</h3>
              <p className="text-sm text-gray-600 mt-2">Tutti i sistemi</p>
            </div>
            <div className="bg-red-50 rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">🫘</div>
              <h3 className="font-bold text-gray-900">Cialde</h3>
              <p className="text-sm text-gray-600 mt-2">ESE 44mm</p>
            </div>
            <div className="bg-red-50 rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">🌱</div>
              <h3 className="font-bold text-gray-900">Grani</h3>
              <p className="text-sm text-gray-600 mt-2">Da 250g a 1kg</p>
            </div>
            <div className="bg-red-50 rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">🥄</div>
              <h3 className="font-bold text-gray-900">Macinato</h3>
              <p className="text-sm text-gray-600 mt-2">Moka e filtro</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-red-600 text-white rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Pronto a creare il tuo caffè?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Contattaci per una consulenza gratuita. Il nostro team ti guiderà
            nella creazione del prodotto perfetto per il tuo business.
          </p>
          <Link
            to="/contatti"
            className="inline-flex items-center bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Contattaci ora
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PrivateLabel