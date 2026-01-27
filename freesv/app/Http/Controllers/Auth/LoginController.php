<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\LoginRequest;
class LoginController extends Controller
{
    /**
     * Login de usuario
     */
    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();

        if (!Auth::attempt($credentials)) {
            return response()->json([
                'success' => false,
                'message' => 'Credenciales incorrectas'
            ], 401);
        }

        $request->session()->regenerate();

        return response()->json([
            'success' => true,
            'message' => 'Login correcto',
            'user' => Auth::user()
        ]);
    }
}
