import { MapPin, Phone, Clock, Mail } from 'lucide-react'

function Stand() {
  const stands = [
    {
      id: 1,
      name: 'Stand Karoma - Napoli Centro',
      address: 'Via Toledo 156, 80132 Napoli',
      phone: '+39 081 123 4567',
      email: 'napoli@caffekaroma.it',
      hours: 'Lun-Sab: 7:00-20:00',
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80'
    },
    {
      id: 2,
      name: 'Stand Karoma - Stazione Centrale',
      address: 'Piazza Garibaldi 1, 80142 Napoli',
      phone: '+39 081 234 5678',
      email: 'stazione@caffekaroma.it',
      hours: 'Tutti i giorni: 6:00-22:00',
      image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&q=80'
    },
    {
      id: 3,
      name: 'Stand Karoma - Vomero',
      address: 'Via Scarlatti 89, 80129 Napoli',
      phone: '+39 081 345 6789',
      email: 'vomero@caffekaroma.it',
      hours: 'Lun-Sab: 7:30-19:30',
      image: 'https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=600&q=80'
    },
    {
      id: 4,
      name: 'Stand Karoma - Aeroporto Capodichino',
      address: 'Aeroporto Internazionale, 80144 Napoli',
      phone: '+39 081 456 7890',
      email: 'aeroporto@caffekaroma.it',
      hours: 'Tutti i giorni: 5:00-23:00',
      image: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600&q=80'
    },
    {
      id: 5,
      name: 'Stand Karoma - Roma Termini',
      address: 'Stazione Termini, 00185 Roma',
      phone: '+39 06 123 4567',
      email: 'roma@caffekaroma.it',
      hours: 'Tutti i giorni: 6:00-22:00',
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80'
    },
    {
      id: 6,
      name: 'Stand Karoma - Milano Centrale',
      address: 'Stazione Centrale, 20124 Milano',
      phone: '+39 02 123 4567',
      email: 'milano@caffekaroma.it',
      hours: 'Tutti i giorni: 6:00-22:00',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div
        className="h-96 bg-cover bg-center relative"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1600&q=80)'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">I NOSTRI STAND</h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Vieni a trovarci e gusta il vero espresso napoletano
            </p>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Dove trovarci
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            I nostri stand sono presenti nelle principali stazioni e aeroporti italiani.
            Fermati per una pausa caffè di qualità.
          </p>
        </div>

        {/* Stands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stands.map((stand) => (
            <div key={stand.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gray-200">
                <img
                  src={stand.image}
                  alt={stand.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{stand.name}</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 mr-3 text-red-600 flex-shrink-0 mt-0.5" />
                    <p>{stand.address}</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-3 text-red-600 flex-shrink-0" />
                    <p>{stand.phone}</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-3 text-red-600 flex-shrink-0" />
                    <p>{stand.email}</p>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-3 text-red-600 flex-shrink-0" />
                    <p>{stand.hours}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Map Placeholder */}
        <div className="mt-16 bg-gray-100 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Mappa degli stand</h3>
          <p className="text-gray-600 mb-6">
            Presto disponibile: mappa interattiva con tutti i nostri punti vendita.
          </p>
          <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
            <MapPin className="w-16 h-16 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stand