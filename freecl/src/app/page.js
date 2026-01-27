"use client";

import { useEffect, useState } from "react";
import { getGames } from "@/services/api";
import GameCard from "@/components/GameCard";
import Filters from "@/components/Filters";

export default function HomePage() {
  const [games, setGames] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    getGames(filters).then((res) => setGames(res.data));
  }, [filters]);

  const handleFilter = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  return (
    <main>
      <h1>Listado de juegos</h1>
      <Filters onFilter={handleFilter} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </main>
  );
}
