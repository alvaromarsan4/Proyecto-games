"use client";
import { useEffect, useState } from "react";
import { getGames } from "@/services/api"; // Importamos la función que conecta con el servidor

export default function GameCard() {
  // 1. Estados para guardar los datos, la carga y los errores
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 2. useEffect: Se ejecuta una vez al entrar en la página para pedir los datos
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Pidiendo juegos al servidor...");
        const data = await getGames();
        
        // Protección: Si data es null o undefined, ponemos un array vacío
        if (Array.isArray(data)) {
          setGames(data);
        } else {
          console.warn("La API no devolvió una lista:", data);
          setGames([]);
        }
      } catch (err) {
        console.error("Error conectando:", err);
        setError("No se pudo conectar con la base de datos.");
      } finally {
        setLoading(false); // Quitamos el "cargando" pase lo que pase
      }
    };

    fetchData();
  }, []);

  // 3. Lógica de renderizado (Usando bucle FOR, sin .map)
  const cardsHTML = [];

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4"></div>
        <p className="text-xl text-slate-400">Cargando biblioteca...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <p className="text-red-400 text-xl mb-4">⚠️ {error}</p>
        <p className="text-slate-500 text-sm">Asegúrate de que tu servidor (backend) esté encendido.</p>
      </div>
    );
  }

  // Si hay juegos, los recorremos uno a uno
  if (games && games.length > 0) {
    for (const game of games) {
      cardsHTML.push(
        <div 
          key={game.id} 
          className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300"
        >
          {/* Zona de imagen (Simulada con un icono y gradiente) */}
          <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-600 flex items-center justify-center relative group">
             <span className="text-6xl drop-shadow-lg transform group-hover:scale-110 transition-transform duration-300">
               👾
             </span>
             {/* Etiqueta flotante de categoría */}
             <span className="absolute top-3 right-3 bg-black/50 backdrop-blur px-2 py-1 rounded text-xs text-white border border-white/10">
               {game.genre || "General"}
             </span>
          </div>

          {/* Información del juego */}
          <div className="p-5">
            <h3 className="text-xl font-bold text-white mb-2 truncate" title={game.title}>
              {game.title}
            </h3>
            
            <div className="flex justify-between items-center mt-4 text-sm">
              <div className="flex items-center gap-2 text-slate-300">
                <span>🖥️</span>
                <span>{game.platform || "PC"}</span>
              </div>
              <button className="text-blue-400 hover:text-blue-300 font-semibold text-xs uppercase tracking-wider">
                Ver detalles →
              </button>
            </div>
          </div>
        </div>
      );
    }
  } else {
    // Si la lista está vacía (pero no hubo error)
    cardsHTML.push(
      <div key="empty" className="col-span-full text-center py-10">
        <p className="text-slate-500 text-lg">No hay juegos disponibles en este momento.</p>
      </div>
    );
  }

  // 4. Renderizado final
  return (
    <div className="w-full animate-fade-in">
      <h2 className="text-3xl font-bold mb-8 pl-2 border-l-4 border-blue-500">
        Nuestra Colección
      </h2>
      
      {/* Rejilla responsive: 1 col en móvil, 2 en tablet, 3 en escritorio */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardsHTML}
      </div>
    </div>
  );
}