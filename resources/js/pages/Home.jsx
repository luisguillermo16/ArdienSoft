import React, { useState, useEffect } from 'react';
import logo from "../../js/img/2.png";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  


  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-white overflow-hidden" id="hero">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            
            {/* Content Left Side */}
            <div className="text-left">
              {/* Animated title */}
              <h1 className={`text-7xl lg:text-8xl font-bold mb-4 text-[#FE5516] transition-all duration-1000 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}>
                Bienvenido a 
                <span className="block mt-1 bg-gradient-to-r from-[#FE5516] to-[#ff7a4d] bg-clip-text text-transparent animate-pulse">
                  ArdienSoft
                </span>
              </h1>
              
              {/* Description without typewriter effect */}
              <div className={`text-xl text-[#000000] mb-8 max-w-2xl transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}>
                 <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto relative z-10">
                Tu solución completa para desarrollo web moderno. Creamos experiencias digitales excepcionales que impulsan tu negocio hacia el futuro.
              </p>
              </div>
              
              {/* Animated buttons */}
              <div className={`flex flex-col sm:flex-row gap-4 mb-16 transition-all duration-700 delay-600 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}>
                <button className="group px-8 py-4 bg-[#FE5516] text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-[#FE5516]/25 relative overflow-hidden">
                  <span className="relative z-10">Ver Servicios</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>
                <button className="group px-8 py-4 border-2 border-[#FE5516] text-[#FE5516] hover:bg-[#FE5516] hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 relative overflow-hidden">
                  <span className="relative z-10">Contactar</span>
                  <div className="absolute inset-0 bg-[#FE5516] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    Contactar
                  </span>
                </button>
              </div>
            </div>

            {/* Image Right Side */}
            <div className={`flex justify-center lg:justify-end transition-all duration-1000 delay-500 transform ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
            }`}>
              <div className="relative">
                <img 
                  src={logo} 
                  alt="ArdienSoft Logo" 
                  className="w-full max-w-2xl h-auto object-contain transform  transition-transform duration-300" 
                />
              </div>
            </div>

          </div>

       
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 relative" id="features">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" 
               style={{
                 backgroundImage: `radial-gradient(circle at 25% 25%, #FE5516 2px, transparent 2px), 
                                  radial-gradient(circle at 75% 75%, #FE5516 2px, transparent 2px)`,
                 backgroundSize: '60px 60px',
                 backgroundPosition: '0 0, 30px 30px'
               }}>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 py-20 relative">
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Card 1 - Rápido */}
            <div className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:animate-spin transition-all duration-300 group-hover:scale-110">
                <svg className="w-8 h-8 text-white transition-transform duration-300 group-hover:scale-125" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#FE5516] group-hover:text-blue-600 transition-colors duration-300">Rápido</h3>
              <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                Desarrollamos soluciones optimizadas que cargan en segundos y ofrecen una experiencia fluida.
              </p>
              {/* Hover effect line */}
              <div className="w-0 h-1 bg-gradient-to-r from-blue-500 to-[#FE5516] group-hover:w-full transition-all duration-500 mt-4 rounded"></div>
            </div>

            {/* Card 2 - Confiable */}
            <div className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:-rotate-1 delay-100">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:animate-pulse transition-all duration-300 group-hover:scale-110">
                <svg className="w-8 h-8 text-white transition-transform duration-300 group-hover:scale-125" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#FE5516] group-hover:text-green-600 transition-colors duration-300">Confiable</h3>
              <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                Nuestro código es robusto, seguro y mantenible. Garantizamos la estabilidad de tu proyecto.
              </p>
              <div className="w-0 h-1 bg-gradient-to-r from-green-500 to-[#FE5516] group-hover:w-full transition-all duration-500 mt-4 rounded"></div>
            </div>

            {/* Card 3 - Moderno */}
            <div className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1 delay-200">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:animate-bounce transition-all duration-300 group-hover:scale-110">
                <svg className="w-8 h-8 text-white transition-transform duration-300 group-hover:scale-125" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#FE5516] group-hover:text-purple-600 transition-colors duration-300">Moderno</h3>
              <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                Utilizamos las últimas tecnologías y mejores prácticas para crear productos de vanguardia.
              </p>
              <div className="w-0 h-1 bg-gradient-to-r from-purple-500 to-[#FE5516] group-hover:w-full transition-all duration-500 mt-4 rounded"></div>
            </div>

          </div>

          {/* Call to Action Section */}
          <div className="mt-20 text-center">
            <div className="bg-white rounded-2xl p-12 shadow-2xl relative overflow-hidden">
              {/* Background animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#FE5516]/5 via-transparent to-blue-500/5"></div>
              
              <h2 className="text-4xl font-bold text-[#FE5516] mb-6 relative z-10">
                ¿Listo para comenzar tu proyecto?
              </h2>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto relative z-10">
                Transforma tu visión en realidad con nuestro equipo de expertos en desarrollo web.
              </p>
              <button className="group px-10 py-5 bg-gradient-to-r from-[#FE5516] to-[#ff7a4d] text-white font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-[#FE5516]/30 relative overflow-hidden z-10">
                <span className="relative z-10">Iniciar Proyecto</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff7a4d] to-[#FE5516] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}