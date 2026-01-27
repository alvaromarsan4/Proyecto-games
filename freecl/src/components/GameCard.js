import Link from "next/link";

export default function GameCard({ game }) {
  return (
    <div className="border rounded p-4">
      <img src={game.thumbnail} alt={game.title} />
      <h3 className="text-lg font-bold">{game.title}</h3>
      <p>{game.genre}</p>
      <Link href={`/games/${game.id}`}>Ver detalle</Link>
    </div>
  );
}
