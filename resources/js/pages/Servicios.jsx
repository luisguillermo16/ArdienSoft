import React, { useEffect, useState } from "react";

export default function Servicios() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/productos") // tu endpoint Laravel
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((err) => console.error("Error al cargar productos:", err));
  }, []);
  return (
    <div className=" py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-fff mb-4">
            Nuestros Servicios
          </h1>
          <p className="text-xl text-gray-ff max-w-3xl mx-auto">
            Ofrecemos soluciones profesionales para hacer crecer tu negocio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productos.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={p.img_url}
                alt={p.nombre}
                className="w-full h-56 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {p.nombre}
              </h3>
              <p className="text-gray-600">{p.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
