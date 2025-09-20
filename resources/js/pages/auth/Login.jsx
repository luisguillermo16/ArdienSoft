import { useState } from "react";
import { Mail, Lock, Eye, ArrowRight, User } from "lucide-react";
import { useAuth } from "../../context/AuthContext"; // 👈 usamos el contexto
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login, user, loading } = useAuth(); // 👈 traemos función login y user global
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    try {
      await login(email, password); // 👈 usamos login del contexto
      // Redirigir al dashboard después del login exitoso
      navigate('/dashboard');
    } catch (err) {
      console.error('Login error:', err);
      setError("Error al iniciar sesión. Verifica tus credenciales.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen bg-gray-100 relative overflow-hidden">
      {/* Fondo con patrón */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #FE5516 2px, transparent 2px), 
                              radial-gradient(circle at 75% 75%, #FE5516 2px, transparent 2px)`,
            backgroundSize: "60px 60px",
            backgroundPosition: "0 0, 30px 30px",
          }}
        ></div>
      </div>

      <div className="flex items-center justify-center h-screen px-6 relative z-10">
        <div className="w-full max-w-sm">
          {/* Logo y bienvenida */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-[#FE5516] mb-2">
              Ardien
              <span className="bg-gradient-to-r from-[#FE5516] to-[#ff7a4d] bg-clip-text text-transparent">
                Soft
              </span>
            </h1>
            <p className="text-gray-600">Bienvenido de vuelta</p>
          </div>

          {/* Card del formulario */}
          <form
            onSubmit={handleLogin}
            className="bg-white rounded-2xl p-6 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#FE5516]/5 via-transparent to-blue-500/5"></div>

            {/* Header */}
            <div className="text-center mb-6 relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FE5516] to-[#ff7a4d] rounded-full flex items-center justify-center mx-auto mb-3">
                <User className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-1">
                Iniciar Sesión
              </h2>
              <p className="text-sm text-gray-600">
                Accede a tu panel de control
              </p>
            </div>

            {/* Campos */}
            <div className="space-y-4 relative z-10">
              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-800 placeholder-gray-500 text-sm focus:outline-none focus:bg-white focus:border-[#FE5516]"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Contraseña
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-10 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-800 placeholder-gray-500 text-sm focus:outline-none focus:bg-white focus:border-[#FE5516]"
                    placeholder="Tu contraseña"
                    required
                  />
                  <Eye className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 cursor-pointer" />
                </div>
              </div>

              {/* Error */}
              {error && (
                <div className="text-red-500 text-sm text-center">{error}</div>
              )}

              {/* Botón */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 bg-gradient-to-r from-[#FE5516] to-[#ff7a4d] text-white font-bold rounded-xl shadow-lg hover:shadow-xl relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>{isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}</span>
                  {!isLoading && <ArrowRight className="w-4 h-4" />}
                </span>
              </button>

              {/* Usuario logueado */}
              {user && (
                <p className="text-green-600 text-sm text-center mt-2">
                  Bienvenido {user.name}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
