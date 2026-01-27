const API_URL = process.env.NEXT_PUBLIC_API_URL;

/**
 * Obtener listado de juegos con filtros
 */
export async function getGames(filters = {}) {
  const params = new URLSearchParams(filters).toString();

  const response = await fetch(`${API_URL}/games?${params}`);

  if (!response.ok) {
    throw new Error("Error al cargar los juegos");
  }

  return response.json();
}

/**
 * Obtener detalle de un juego
 */
export async function getGameById(id) {
  const response = await fetch(`${API_URL}/games/${id}`);

  if (!response.ok) {
    throw new Error("Error al cargar el juego");
  }

  return response.json();
}

/**
 * Login
 */
export async function login(data) {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
    credentials: "include",
  });

  return response.json();
}

/**
 * Registro
 */
export async function register(data) {
  const response = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return response.json();
}
