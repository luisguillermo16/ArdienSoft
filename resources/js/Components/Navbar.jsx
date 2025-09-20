import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../js/img/logo.png";
export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative bg-[#ffffff] ">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo con texto al lado */}
          <div className="flex items-center space-x-3">
            {/* Imagen del logo */}
            <div style={{ width: "200px" }}>
              <img 
                src={logo} 
                alt="ArdienSoft Logo" 
                className="w-full h-auto object-contain transition-transform duration-300" 
              />
            </div>

          </div>
          {/* Links en pantallas grandes */}
          <ul className="hidden md:flex gap-8">
            {["Inicio", "Servicios", "Nosotros", "Contacto"].map((item, i) => (
              <li key={i}>
                <Link
                  to={item === "Inicio" ? "/" : `/${item.toLowerCase()}`}
                  className="relative px-4 py-2 text-lg font-medium text-[#000000] hover:text-[#FE5516] transition-all duration-300 group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FE5516]/80 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Botón hamburguesa */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg bg-[#FE5516] hover:bg-[#e64a12] text-white border border-[#FE5516] hover:border-[#e64a12] transition-all duration-300 transform hover:scale-105"
          >
            <div className="relative w-6 h-6">
              <Menu
                size={24}
                className={`absolute inset-0 transition-all duration-300 ${
                  open ? "opacity-0 rotate-180" : "opacity-100 rotate-0"
                }`}
              />
              <X
                size={24}
                className={`absolute inset-0 transition-all duration-300 ${
                  open ? "opacity-100 rotate-0" : "opacity-0 rotate-180"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-gray-200">
          <ul className="px-6 py-6 space-y-4">
            {["Inicio", "Servicios", "Nosotros", "Contacto"].map((item, i) => (
              <li key={i}>
                <Link
                  to={item === "Inicio" ? "/" : `/${item.toLowerCase()}`}
                  className="block px-4 py-3 text-lg font-medium text-[#000000] hover:text-[#FE5516] hover:bg-[#fdf2ec] rounded-lg transition-all duration-300 transform hover:translate-x-2 border border-transparent hover:border-[#FE5516]/30"
                  onClick={() => setOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
