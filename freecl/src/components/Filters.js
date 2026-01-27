"use client";

export default function Filters({ onFilter }) {
  return (
    <div className="flex gap-4">
      <select onChange={(e) => onFilter("platform", e.target.value)}>
        <option value="">Plataforma</option>
        <option value="pc">PC</option>
        <option value="browser">Browser</option>
      </select>

      <select onChange={(e) => onFilter("category", e.target.value)}>
        <option value="">Género</option>
        <option value="shooter">Shooter</option>
        <option value="mmorpg">MMORPG</option>
      </select>
    </div>
  );
}
