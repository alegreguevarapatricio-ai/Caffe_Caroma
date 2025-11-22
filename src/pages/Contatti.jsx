import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'

function Contatti() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  const resetForm = () => {
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    setSubmitted(false)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Indirizzo',
      lines: ['Via Nazionale 123', '80012 Napoli (NA)', 'Italia']
    },
    {
      icon: Phone,
      title: 'Telefono',
      lines: ['+39 081 123 4567', '+39 081 765 4321']
    },
    {
      icon: Mail,
      title: 'Email',
      lines: ['info@caffekaroma.it', 'ordini@caffekaroma.it']
    },
    {
      icon: Clock,
      title: 'Orari',
      lines: ['Lun-Ven: 8:00-18:00', 'Sab: 9:00-13:00']
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div
        className="h-80 bg-cover bg-center relative"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&q=80)'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white">CONTATTI</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Informazioni di contatto</h2>
              <p className="text-gray-600 mb-8">
                Hai domande sui nostri prodotti o servizi? Contattaci, saremo felici di aiutarti.
              </p>
            </div>

            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-red-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-gray-900 mb-1">{info.title}</h3>
                      {info.lines.map((line, i) => (
                        <p key={i} className="text-gray-600 text-sm">{line}</p>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Messaggio inviato!</h3>
                  <p className="text-gray-600 mb-6">
                    Grazie per averci contattato. Ti risponderemo il prima possibile.
                  </p>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="text-red-600 hover:text-red-700 font-semibold"
                  >
                    Invia un altro messaggio
                  </button>
                </div>
              ) : (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Inviaci un messaggio</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Nome completo *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Telefono
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                          Oggetto *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        >
                          <option value="">Seleziona...</option>
                          <option value="info">Informazioni generali</option>
                          <option value="ordini">Ordini e spedizioni</option>
                          <option value="private-label">Private Label</option>
                          <option value="collaborazioni">Collaborazioni</option>
                          <option value="altro">Altro</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Messaggio *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Scrivi il tuo messaggio..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className={`w-full py-3 rounded-lg font-bold text-lg flex items-center justify-center transition-all ${
                        loading
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-red-600 hover:bg-red-700 text-white'
                      }`}
                    >
                      {loading ? (
                        'Invio in corso...'
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Invia messaggio
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16 bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Dove siamo</h2>
          <div className="bg-gray-100 rounded-xl h-80 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">Mappa interattiva</p>
              <p className="text-sm text-gray-400">Via Nazionale 123, 80012 Napoli</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contatti