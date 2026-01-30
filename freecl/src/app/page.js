"use client";
import { useState } from "react";
import Footer from "@/components/Footer";
import HomeView from "@/components/HomeView";   // La nueva portada
import GameCard from "@/components/GameCard"; // La lista de juegos
import AboutView from "@/components/AboutView";
import PrivacyView from "@/components/PrivacyView";

export default function Page() {
  const [view, setView] = useState("home");

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white font-sans">
      
      {/* Navbar */}
      <nav className="p-4 border-b border-slate-800 bg-slate-900/80 sticky top-0 z-10 backdrop-blur">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
           <div 
             className="font-bold text-xl cursor-pointer hover:text-blue-400 transition-colors" 
             onClick={() => setView("home")}
           >
             Project <span className="text-blue-500">Games</span>
           </div>
           
           {/* Menú simple de navegación arriba también (opcional) */}
           <div className="hidden md:flex gap-4 text-sm">
             <button onClick={() => setView("games")} className="hover:text-blue-400">Juegos</button>
             <button onClick={() => setView("about")} className="hover:text-blue-400">Nosotros</button>
           </div>
        </div>
      </nav>

      {/* Contenido Principal */}
      <main className="flex-grow w-full max-w-7xl mx-auto py-6 px-4">
        {view === "home" && <HomeView setView={setView} />}
        {view === "gameCard" && <GameCard />}
        {view === "about" && <AboutView />}
        {view === "privacy" && <PrivacyView />}
      </main>

      <Footer setView={setView} />
      
    </div>
  );
}