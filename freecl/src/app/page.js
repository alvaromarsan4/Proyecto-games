"use client";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Bienvenido a Proyecto Games</h1>
      <p className="mb-6">Explora información sobre juegos gratis y filtra por plataforma o género.</p>
      <Link href="/games" className="inline-block bg-blue-600 text-white px-4 py-2 rounded">Ir al listado de juegos</Link>
    </main>
  );
}

