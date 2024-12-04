<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cliente;
use Illuminate\Support\Facades\Hash;



class AuthController extends Controller
{
    //
    public function registerCliente(Request $request)
    {
        $request->validate([
            'nombre' => 'required|string|max:255',
            'apellidos' => 'required|string|max:255',
            'sexo' => 'required|in:M,F',
            'correo' => 'required|email|unique:clientes,correo',
            'contra' => 'required|min:6',
        ]);

        $cliente = Cliente::create([
            'nombre' => $request->nombre,
            'apellidos' => $request->apellidos,
            'sexo' => $request->sexo,
            'correo' => $request->correo,
            'contra' => Hash::make($request->contra), // Contraseña encriptada
        ]);

        return response()->json(['message' => 'Cliente registrado correctamente.', 'data' => $cliente]);
    }

    public function updateProfile(Request $request)
{
    $user = auth()->user(); // Obtén el cliente autenticado

    $request->validate([
        'edad' => 'nullable|integer',
        'estado' => 'nullable|string',
        'municipio' => 'nullable|string',
        'cp' => 'nullable|string|max:10',
        'calle' => 'nullable|string',
        'nExt' => 'nullable|string',
        'nInt' => 'nullable|string',
        'colonia' => 'nullable|string',
        'telefono' => 'nullable|string|max:15',
        'referencias' => 'nullable|string',
    ]);

    $user->update($request->all());

    return response()->json(['message' => 'Perfil actualizado correctamente.', 'data' => $user]);
}
}
