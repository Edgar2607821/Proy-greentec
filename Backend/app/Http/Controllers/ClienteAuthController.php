<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ClienteAuthController extends Controller
{
    //
    // Registro de usuario
    public function register(Request $request)
    {
        // Validar datos del formulario
        $request->validate([
            'nombre' => 'required|string|max:255',
            'apellidos' => 'required|string|max:255',
            'sexo' => 'required|in:M,F,O',
            'correo' => 'required|string|email|max:255|unique:clientes',
            'contra' => 'required|string|min:6|confirmed', // Verifica contraseña y confirmación
        ]);

        // Crear cliente
        $cliente = Cliente::create([
            'nombre' => $request->nombre,
            'apellidos' => $request->apellidos,
            'sexo' => $request->sexo,
            'correo' => $request->correo,
            'contra' => Hash::make($request->contra), // Hashear contraseña
        ]);

        return response()->json([
            'message' => 'Usuario registrado exitosamente',
            'cliente' => $cliente,
        ], 201);
    }

    public function login(Request $request)
    {
        $validatedData = $request->validate([
            'correo' => 'required|string|email|max:30',
            'contra' => 'required|string',
        ]);

        $cliente = Cliente::where('correo', $validatedData['correo'])->first();

        if (!$cliente || !Hash::check($validatedData['contra'], $cliente->contra)) {
            return response()->json(['message' => 'Credenciales inválidas'], 401);
        }

        // Generar un token (si usas Laravel Sanctum o JWT)
        $token = $cliente->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message' => 'Inicio de sesión exitoso',
            'token' => $token,
            'cliente' => $cliente,
        ]);
    }
}
