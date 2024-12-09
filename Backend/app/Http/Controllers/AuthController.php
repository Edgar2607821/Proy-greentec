<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cliente;
use Illuminate\Support\Facades\Hash;



class AuthController extends Controller
{
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

    // Mostrar todos los clientes
    public function getClientes()
    {
        $clientes = Cliente::all()->makeHidden(['contra']);
        return response()->json($clientes);

    }



    public function getProfile(Request $request)
{
    // Verificar si se recibe un token
    \Log::info('Token recibido:', [$request->bearerToken()]);

    // Intentar obtener el cliente autenticado
    $cliente = $request->user();

    if (!$cliente) {
        \Log::info('Cliente no autenticado');
        return response()->json(['message' => 'Cliente no encontrado'], 404);
    }

    \Log::info('Cliente autenticado:', ['id' => $cliente->id, 'correo' => $cliente->correo]);

    return response()->json($cliente);
}




    // Mostrar un cliente por ID
    public function getClienteById($id)
    {
        $cliente = Cliente::find($id);

        if (!$cliente) {
            return response()->json(['message' => 'Cliente no encontrado'], 404);
        }

        return response()->json($cliente);
    }

    // Actualizar un cliente
    public function updateProfile(Request $request)
{
    $cliente = Cliente::find(auth()->id());

    $request->validate([
        'edad' => 'nullable|integer',
        'sexo' => 'nullable|string',
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

    $cliente->update($request->all());

    return response()->json(['message' => 'Perfil actualizado correctamente.', 'data' => $cliente]);
}

    // Eliminar un cliente
    public function deleteCliente($id)
    {
        $cliente = Cliente::find($id);

        if (!$cliente) {
            return response()->json(['message' => 'Cliente no encontrado'], 404);
        }

        $cliente->delete();

        return response()->json(['message' => 'Cliente eliminado correctamente.']);
    }

    // Login básico
    public function loginCliente(Request $request)
    {
        $request->validate([
            'correo' => 'required|email',
            'contra' => 'required',
        ]);

        $cliente = Cliente::where('correo', $request->correo)->first();

        if (!$cliente || !Hash::check($request->contra, $cliente->contra)) {
            return response()->json(['message' => 'Correo o contraseña incorrectos'], 401);
        }

        // Generar token
        $token = $cliente->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message' => 'Inicio de sesión exitoso',
            'token' => $token,
            'data' => $cliente,
        ]);
    }


    public function checkEmail(Request $request)
{
    $exists = Cliente::where('correo', $request->correo)->exists();
    return response()->json(['exists' => $exists]);
}

public function completeProfile(Request $request)
{
    // Obtén el cliente autenticado
    $cliente = Cliente::find(auth()->id()); // Esto asume que estás usando autenticación para obtener el cliente actual

    if (!$cliente) {
        return response()->json(['message' => 'Cliente no encontrado'], 404);
    }

    // Valida los datos adicionales
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

    // Actualiza los datos del cliente
    $cliente->update($request->all());

    return response()->json(['message' => 'Perfil completado correctamente.', 'data' => $cliente]);
}



}
