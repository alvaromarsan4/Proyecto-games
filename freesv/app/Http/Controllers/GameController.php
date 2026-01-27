<?php

namespace App\Http\Controllers;

use App\Services\FreeToGameService;
use Illuminate\Http\Request;

class GameController extends Controller
{
    private FreeToGameService $freeToGameService;

    public function __construct(FreeToGameService $freeToGameService)
    {
        $this->freeToGameService = $freeToGameService;
    }

    /**
     * Listado de juegos con filtros opcionales
     */
    public function index(Request $request)
    {
        $filters = $request->only(['platform', 'category']);

        try {
            $games = $this->freeToGameService->getGames($filters);

            return response()->json([
                'success' => true,
                'data' => $games
            ]);
        } catch (\Throwable $e) {
            // Devolvemos un JSON claro y un código 502 (bad gateway) si falla la API externa
            return response()->json([
                'success' => false,
                'message' => 'No se pudieron obtener los juegos: ' . $e->getMessage()
            ], 502);
        }
    }

    /**
     * Detalle de un juego
     */
    public function show(int $id)
    {
        try {
            $game = $this->freeToGameService->getGameById($id);

            return response()->json([
                'success' => true,
                'data' => $game
            ]);
        } catch (\Throwable $e) {
            return response()->json([
                'success' => false,
                'message' => 'No se pudo obtener el juego: ' . $e->getMessage()
            ], 502);
        }
    }
}
