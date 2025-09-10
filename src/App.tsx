import { useState } from 'react'
import Swal from 'sweetalert2'
import 'animate.css'
import logoUrl from '/logo/makeup_vibes_2025.jpeg'
import './App.css'

function App() {
  const [selectedTicket, setSelectedTicket] = useState<string>('')

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const handlePurchase = () => {
    const ticketTypes = {
      general: { price: '$150.000', name: 'General' },
      vip: { price: '$300.000', name: 'VIP' },
      premium: { price: '$500.000', name: 'Premium' }
    }

    const selectedTicketInfo = selectedTicket ? ticketTypes[selectedTicket as keyof typeof ticketTypes] : null
    const title = selectedTicketInfo ? `¡Entrada ${selectedTicketInfo.name} Comprada!` : '¡Compra Exitosa!'
    const text = selectedTicketInfo 
      ? `Tu entrada ${selectedTicketInfo.name} por ${selectedTicketInfo.price} para Makeup Vibe 2025 ha sido procesada con éxito. ¡Te esperamos en el evento!`
      : 'Tu entrada para Makeup Vibe 2025 ha sido procesada con éxito. ¡Te esperamos en el evento!'

    Swal.fire({
      title: title,
      text: text,
      icon: 'success',
      confirmButtonText: '¡Genial!',
      background: '#ffffff',
      customClass: {
        confirmButton: 'swal-confirm-button',
        title: 'swal-title'
      },
      confirmButtonColor: '#8b5cf6',
      iconColor: '#ec4899',
      showClass: {
        popup: 'animate__animated animate__fadeInUp animate__faster'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutDown animate__faster'
      }
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src={logoUrl} 
              alt="Masglo Logo" 
              className="w-16 h-16 rounded-full object-cover shadow-md"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-800">MASGLO</h1>
              <p className="text-sm text-purple-600 font-medium">Makeup Vibe 2025</p>
            </div>
          </div>
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-purple-600 font-medium transition">Inicio</button>
            <button onClick={() => scrollToSection('producto')} className="text-gray-700 hover:text-purple-600 font-medium transition">Producto</button>
            <button onClick={() => scrollToSection('evento')} className="text-gray-700 hover:text-purple-600 font-medium transition">Evento</button>
            <button onClick={() => scrollToSection('entradas')} className="text-gray-700 hover:text-purple-600 font-medium transition">Entradas</button>
            <button onClick={() => scrollToSection('empresa')} className="text-gray-700 hover:text-purple-600 font-medium transition">Nosotros</button>
          </div>
          <button 
            onClick={handlePurchase}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition font-medium"
          >
            ¡Comprar Ahora!
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="container mx-auto px-6 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-6">
            MAKEUP VIBE 2025
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
            Descubre la nueva colección de maquillaje que revolucionará tu belleza. 
            Un evento único donde la creatividad y la inclusión se encuentran.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => scrollToSection('entradas')}
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition"
            >
              Obtener Entrada
            </button>
            <button 
              onClick={() => scrollToSection('producto')}
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-600 hover:text-white transition"
            >
              Conocer Más
            </button>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="producto" className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Makeup Vibe Collection</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Una línea completa diseñada para realzar tu belleza natural y expresar tu personalidad única
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-pink-100 to-purple-100 p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">💄</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Labiales Vibrantes</h3>
              <p className="text-gray-600">12 tonos únicos que se adaptan a todos los tipos de piel</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Paletas de Sombras</h3>
              <p className="text-gray-600">Combinaciones perfectas para looks diurnos y nocturnos</p>
            </div>
            
            <div className="bg-gradient-to-br from-pink-100 to-purple-100 p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🌟</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Base Inclusiva</h3>
              <p className="text-gray-600">20 tonos que celebran la diversidad de la belleza colombiana</p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section id="evento" className="py-16 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Evento de Lanzamiento</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-purple-600 mb-4">¿Cuándo?</h3>
                <p className="text-gray-700 text-lg mb-2">📅 Sábado, 15 de Marzo 2025</p>
                <p className="text-gray-700 text-lg mb-2">🕕 6:00 PM - 10:00 PM</p>
                <p className="text-gray-700 text-lg">📍 Centro de Convenciones Corferias, Bogotá</p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-purple-600 mb-4">¿Qué incluye?</h3>
                <ul className="text-gray-700 text-lg space-y-2">
                  <li>✨ Presentación exclusiva de la colección</li>
                  <li>💄 Sesiones de maquillaje en vivo</li>
                  <li>🎁 Kit de productos de cortesía</li>
                  <li>🥂 Cóctel y networking</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tickets Section */}
      <section id="entradas" className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Entradas Disponibles</h2>
            <p className="text-lg text-gray-600">Elige la experiencia que más se adapte a ti</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="border-2 border-gray-200 p-8 rounded-2xl text-center hover:border-purple-500 transition">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">General</h3>
              <div className="text-4xl font-bold text-purple-600 mb-4">$150.000</div>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>✓ Acceso al evento</li>
                <li>✓ Kit básico de productos</li>
                <li>✓ Cóctel de bienvenida</li>
              </ul>
              <button 
                className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-purple-600 hover:text-white transition font-semibold"
                onClick={() => setSelectedTicket('general')}
              >
                Seleccionar
              </button>
            </div>
            
            <div className="border-2 border-purple-500 p-8 rounded-2xl text-center relative bg-gradient-to-br from-purple-50 to-pink-50">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Más Popular
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">VIP</h3>
              <div className="text-4xl font-bold text-purple-600 mb-4">$300.000</div>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>✓ Todo lo de General</li>
                <li>✓ Kit completo de productos</li>
                <li>✓ Sesión de maquillaje personalizada</li>
                <li>✓ Meet & greet con artistas</li>
              </ul>
              <button 
                className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition font-semibold"
                onClick={() => setSelectedTicket('vip')}
              >
                Seleccionar
              </button>
            </div>
            
            <div className="border-2 border-gray-200 p-8 rounded-2xl text-center hover:border-purple-500 transition">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Premium</h3>
              <div className="text-4xl font-bold text-purple-600 mb-4">$500.000</div>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>✓ Todo lo de VIP</li>
                <li>✓ Acceso exclusivo backstage</li>
                <li>✓ Colección completa de regalo</li>
                <li>✓ Cena privada</li>
              </ul>
              <button 
                className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-purple-600 hover:text-white transition font-semibold"
                onClick={() => setSelectedTicket('premium')}
              >
                Seleccionar
              </button>
            </div>
          </div>
          
          {selectedTicket && (
            <div className="mt-8 text-center">
              <p className="text-lg text-gray-700 mb-4">Has seleccionado la entrada: <span className="font-bold text-purple-600 capitalize">{selectedTicket}</span></p>
              <button 
                onClick={handlePurchase}
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition"
              >
                Proceder al Pago
              </button>
            </div>
          )}
        </div>
      </section>

      {/* About Company */}
      <section id="empresa" className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Sobre Masglo</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Desde hace más de 30 años, Masglo ha sido sinónimo de belleza y calidad en Colombia. 
              Nos enorgullecemos de crear productos que celebran la diversidad y realzan la belleza 
              natural de cada persona, sin importar su edad, color de piel o estilo.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">30+</div>
                <p className="text-gray-700">Años de experiencia</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
                <p className="text-gray-700">Productos únicos</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">1M+</div>
                <p className="text-gray-700">Clientes satisfechos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src={logoUrl} 
                  alt="Masglo Logo" 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <h3 className="text-xl font-bold">MASGLO</h3>
              </div>
              <p className="text-gray-400">Creando belleza y confianza desde 1995</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <p className="text-gray-400 mb-2">📧 info@masglo.com</p>
              <p className="text-gray-400 mb-2">📱 +57 (1) 234-5678</p>
              <p className="text-gray-400">📍 Bogotá, Colombia</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
              <div className="space-y-2">
                <p className="text-gray-400 hover:text-white cursor-pointer">Instagram</p>
                <p className="text-gray-400 hover:text-white cursor-pointer">Facebook</p>
                <p className="text-gray-400 hover:text-white cursor-pointer">TikTok</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Suscríbete para recibir las últimas noticias</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Tu email" 
                  className="flex-1 px-4 py-2 rounded-l-lg text-gray-800"
                />
                <button className="bg-purple-600 px-4 py-2 rounded-r-lg hover:bg-purple-700 transition">
                  ✓
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2025 Masglo. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
