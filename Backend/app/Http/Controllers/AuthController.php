<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cliente;
use Illuminate\Support\Facades\Hash;



class AuthController extends Controller
{
 // Registro del cliente
 public function registerCliente(Request $request)
 {
     // Validar los datos que recibimos del cliente
     $request->validate([
         'nombre' => 'required|string|max:255',
         'apellidos' => 'required|string|max:255',
         'sexo' => 'required|in:M,F',
         'correo' => 'required|email|unique:clientes,correo',
         'contra' => 'required|min:6',
     ]);

     // Crear al nuevo cliente
     $cliente = Cliente::create([
         'nombre' => $request->nombre,
         'apellidos' => $request->apellidos,
         'sexo' => $request->sexo,
         'correo' => $request->correo,
         'contra' => Hash::make($request->contra), // Contraseña encriptada
     ]);

     // Responder con un mensaje y los datos del cliente
     return response()->json(['message' => 'Cliente registrado correctamente.', 'data' => $cliente]);
 }

 // Login básico para obtener un cliente
 public function loginCliente(Request $request)
 {
     // Validar los datos de login
     $request->validate([
         'correo' => 'required|email',
         'contra' => 'required',
     ]);

     // Buscar al cliente con el correo proporcionado
     $cliente = Cliente::where('correo', $request->correo)->first();

     // Verificar si el cliente existe y la contraseña es correcta
     if (!$cliente || !Hash::check($request->contra, $cliente->contra)) {
         return response()->json(['message' => 'Correo o contraseña incorrectos'], 401);
     }
     $token = $cliente->createToken('auth_token')->plainTextToken;
     // Si el login es exitoso, devolver los datos del cliente
     return response()->json([
         'message' => 'Inicio de sesión exitoso',
         'token' => $token,
         'data' => $cliente, // Datos del cliente logueado
     ]);
 }

 // Obtener perfil del cliente logueado (sin token de seguridad)
 public function getProfile(Request $request)
 {
     // Obtener los datos del usuario logueado
     $cliente = Cliente::where('correo', $request->correo)->first();

     if (!$cliente) {
         return response()->json(['message' => 'Cliente no encontrado'], 404);
     }

     // Devolver los datos del cliente logueado
     return response()->json($cliente);
 }

 // Actualizar perfil de un cliente
 public function updateProfile(Request $request)
 {
     // Validar que el cliente esté logueado
     $cliente = Cliente::where('correo', $request->correo)->first();

     if (!$cliente) {
         return response()->json(['message' => 'Cliente no encontrado'], 404);
     }

     // Validar los datos que se van a actualizar
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

     // Actualizar el perfil del cliente
     $cliente->update($request->all());

     // Responder con los datos actualizados
     return response()->json(['message' => 'Perfil actualizado correctamente.', 'data' => $cliente]);
 }

 // Eliminar un cliente
 public function deleteCliente($id)
 {
     // Buscar al cliente por ID
     $cliente = Cliente::find($id);

     if (!$cliente) {
         return response()->json(['message' => 'Cliente no encontrado'], 404);
     }

     // Eliminar al cliente
     $cliente->delete();

     return response()->json(['message' => 'Cliente eliminado correctamente.']);
 }

 // Verificar si un correo ya está registrado
 public function checkEmail(Request $request)
 {
     $exists = Cliente::where('correo', $request->correo)->exists();
     return response()->json(['exists' => $exists]);
 }

 public function getClientes()
{
    // Obtener todos los clientes, ocultando la contraseña
    $clientes = Cliente::all()->makeHidden(['contra']);

    // Retornar los clientes como respuesta en formato JSON
    return response()->json($clientes);
}
}
