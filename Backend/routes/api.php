<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AuthEmpleadoController;
use App\Http\Controllers\DispositivoController;
use App\Http\Controllers\TipoDispController;
use App\Http\Controllers\MarcaController;
use App\Http\Controllers\ModelController;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

// Registro de cliente
Route::post('/register', [AuthController::class, 'registerCliente']);

// Login de cliente
Route::post('/login', [AuthController::class, 'loginCliente']);

// Obtener perfil del cliente logueado
Route::middleware('auth:sanctum')->get('/profile', [AuthController::class, 'getProfile']); // Necesitarás pasar el correo como parámetro en el request

// Actualizar perfil
Route::put('/profile', [AuthController::class, 'updateProfile']);

// Eliminar cliente
Route::delete('/cliente/{id}', [AuthController::class, 'deleteCliente']);

// Verificar si el correo ya está registrado
Route::get('/check-email', [AuthController::class, 'checkEmail']);

// Mostrar todos los clientes
Route::get('/clientes', [AuthController::class, 'getClientes']);


Route::post('/empleado', [AuthEmpleadoController::class, 'registerEmpleado']);  // Crear empleado
Route::get('/empleados', [AuthEmpleadoController::class, 'getEmpleados']);  // Obtener todos los empleados
Route::get('/empleado/{id}', [AuthEmpleadoController::class, 'getEmpleadoById']);  // Obtener empleado por ID
Route::put('/empleado/{id}', [AuthEmpleadoController::class, 'updateEmpleado']);  // Actualizar empleado
Route::delete('/empleado/{id}', [AuthEmpleadoController::class, 'deleteEmpleado']);  // Eliminar empleado



// Rutas para Dispositivo
Route::post('/dispositivos', [DispositivoController::class, 'createDispositivo']); // Agregar dispositivo
Route::get('/dispositivos', [DispositivoController::class, 'getDispositivos']); // Mostrar todos
Route::get('/dispositivos/{id}', [DispositivoController::class, 'getDispositivoById']); // Mostrar por ID
Route::put('/dispositivos/{id}', [DispositivoController::class, 'updateDispositivo']); // Actualizar
Route::delete('/dispositivos/{id}', [DispositivoController::class, 'deleteDispositivo']); // Eliminar

// RUtas para tipo de dispositivo

Route::get('/tipos', [TipoDispController::class, 'index']);
Route::post('/tipos', [TipoDispController::class, 'store']);
Route::put('/tipos/{id}', [TipoDispController::class, 'update']);
Route::delete('/tipos/{id}', [TipoDispController::class, 'destroy']);

Route::get('/marcas', [MarcaController::class, 'index']);
Route::post('/marcas', [MarcaController::class, 'store']);
Route::put('/marcas/{id}', [MarcaController::class, 'update']);
Route::delete('/marcas/{id}', [MarcaController::class, 'destroy']);

Route::get('/modelos', [ModeloController::class, 'index']);
Route::post('/modelos', [ModeloController::class, 'store']);
Route::put('/modelos/{id}', [ModeloController::class, 'update']);
Route::delete('/modelos/{id}', [ModeloController::class, 'destroy']);
