import { Link } from 'react-router-dom'
import { TrendingUp, Building2, Users, Zap, ArrowRight } from 'lucide-react'

function Investimenti() {
  const investments = [
    {
      icon: TrendingUp,
      title: 'Crescita continua',
      description: 'Negli ultimi 5 anni abbiamo investito oltre 2 milioni di euro in nuove tecnologie, espansione degli impianti e formazione del personale.',
      color: 'red'
    },
    {
      icon: Building2,
      title: 'Nuovi impianti',
      description: 'Abbiamo ampliato la nostra capacità produttiva del 40%, con nuovi macchinari all\'avanguardia per la tostatura e il confezionamento.',
      color: 'blue'
    },
    {
      icon: Zap,
      title: 'Energia sostenibile',
      description: 'Investimento di 500.000€ in impianto fotovoltaico da 100 kW, che copre il 100% del nostro fabbisogno energetico.',
      color: 'green'
    },
    {
      icon: Users,
      title: 'Capitale umano',
      description: 'Formazione continua per i nostri 50 dipendenti, con programmi di crescita professionale e welfare aziendale.',
      color: 'purple'
    }
  ]

  const colorClasses = {
    red: 'bg-red-50 text-red-600',
    blue: 'bg-blue-50 text-blue-600',
    green: 'bg-green-50 text-green-600',
    purple: 'bg-purple-50 text-purple-600'
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div
        className="h-96 bg-cover bg-center relative"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80)'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white">INVESTIMENTI</h1>
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Investire nel futuro
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Innovazione, crescita e sviluppo sostenibile: i pilastri della nostra strategia di investimento.
          </p>
        </div>

        {/* Investment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {investments.map((investment, index) => {
            const Icon = investment.icon
            return (
              <div key={index} className={`rounded-2xl p-8 ${colorClasses[investment.color].split(' ')[0]}`}>
                <Icon className={`w-12 h-12 ${colorClasses[investment.color].split(' ')[1]} mb-4`} />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{investment.title}</h3>
                <p className="text-gray-700 leading-relaxed">{investment.description}</p>
              </div>
            )
          })}
        </div>

        {/* EU Funding Section */}
        <div className="bg-blue-900 text-white rounded-2xl p-8 lg:p-12 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-yellow-500 text-blue-900 text-sm font-bold px-3 py-1 rounded-full mb-4">
                FONDI EUROPEI
              </span>
              <h2 className="text-3xl font-bold mb-6">
                Programma di investimento Industria 4.0
              </h2>
              <p className="text-blue-100 leading-relaxed mb-6">
                La società FEIO S.R.L. ha intrapreso un programma di investimento volto a
                incrementare e migliorare la propria capacità produttiva, in conformità alle
                linee guida dell'Industria 4.0 e con l'intento di rendere il proprio processo
                produttivo più sostenibile.
              </p>
              <p className="text-blue-100 leading-relaxed mb-6">
                L'obiettivo perseguito si realizza nel potenziamento del parco macchine aziendale
                e nel potenziamento del livello di automazione, contribuendo ad incrementare
                i parametri di produttività.
              </p>
              <div className="bg-blue-800 rounded-lg p-4">
                <p className="text-sm text-blue-200">
                  <strong className="text-white">ASSE VI</strong> – Priorità di investimento: 13i – Azione: 3.1.1
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-white rounded-xl p-8 text-center">
                <div className="text-6xl font-bold text-blue-900 mb-2">€2M+</div>
                <p className="text-gray-600">Investimenti totali negli ultimi 5 anni</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <div className="bg-gray-50 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-red-600 mb-2">+40%</div>
            <p className="text-gray-600">Capacità produttiva</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-red-600 mb-2">50</div>
            <p className="text-gray-600">Dipendenti</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-red-600 mb-2">20+</div>
            <p className="text-gray-600">Paesi export</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-red-600 mb-2">100%</div>
            <p className="text-gray-600">Energia green</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/contatti"
            className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Contattaci per collaborare
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Investimenti