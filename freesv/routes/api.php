<?php

use App\Http\Controllers\GameController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\ImportController;
use App\Http\Controllers\FavoriteController;
use Illuminate\Support\Facades\Route;

// Juegos
Route::get('/games', [GameController::class, 'index']);
Route::get('/games/{id}', [GameController::class, 'show']);

// Importar datos de FreeToGame a la base de datos (dev)
Route::post('/import-games', [ImportController::class, 'import']);

// Note: authentication and favorites routes moved to web.php to ensure the
// session middleware (StartSession) runs and the session store is available.
