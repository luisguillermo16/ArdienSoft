import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Company Info */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-[#FE5516]">ArdienSoft</h3>
            <p className="text-gray-300 text-sm">
              Soluciones tecnológicas innovadoras para tu negocio.
            </p>
            <div className="flex space-x-3">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-[#FE5516] cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-[#FE5516] cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-[#FE5516] cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-[#FE5516] cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-[#FE5516]">Servicios</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-[#FE5516] transition-colors">Desarrollo Web</a></li>
              <li><a href="#" className="hover:text-[#FE5516] transition-colors">Apps Móviles</a></li>
              <li><a href="#" className="hover:text-[#FE5516] transition-colors">Cloud Computing</a></li>
              <li><a href="#" className="hover:text-[#FE5516] transition-colors">Soporte Técnico</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-[#FE5516]">Contacto</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-[#FE5516]" />
                <span>Calle Principal 123, Ciudad</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#FE5516]" />
                <span>+57 (123) 456-7890</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#FE5516]" />
                <span>info@ardiensoft.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>© {currentYear} ArdienSoft.</span>
              <span className="flex items-center space-x-1">
                <span>Hecho con</span>
                <Heart className="w-4 h-4 text-red-500" />
                <span>en Colombia</span>
              </span>
            </div>
            
            <div className="flex space-x-4 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#FE5516] transition-colors">
                Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FE5516] transition-colors">
                Términos
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;