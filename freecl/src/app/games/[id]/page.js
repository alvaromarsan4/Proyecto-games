"use client";

import { useEffect, useState } from "react";
import { getGameById } from "@/services/api";

export default function GameDetail({ params }) {
  const [game, setGame] = useState(null);

  useEffect(() => {
    getGameById(params.id).then((res) => setGame(res.data));
  }, [params.id]);

  if (!game) return <p>Cargando...</p>;

  return (
    <div>
      <h1>{game.title}</h1>
      <img src={game.thumbnail} />
      <p>{game.description}</p>
      <p><strong>Plataforma:</strong> {game.platform}</p>
      <p><strong>Género:</strong> {game.genre}</p>
    </div>
  );
}
