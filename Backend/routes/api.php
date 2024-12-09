<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;


Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

// Registro y login
Route::post('/cliente/register', [AuthController::class, 'registerCliente']);
Route::post('/cliente/login', [AuthController::class, 'loginCliente']);

// CRUD de clientes
Route::get('/clientes', [AuthController::class, 'getClientes']);
Route::get('/cliente/{id}', [AuthController::class, 'getClienteById']);
Route::put('/cliente/{id}', [AuthController::class, 'updateCliente']);
Route::delete('/cliente/{id}', [AuthController::class, 'deleteCliente']);
Route::post('/cliente/check-email', [AuthController::class, 'checkEmail']);
Route::middleware('auth:sanctum')->group(function () {
    // Rutas protegidas por Sanctum

    Route::post('/complete-profile', [AuthController::class, 'completeProfile']);
});

Route::middleware('auth:sanctum')->get('/cliente/profile', [AuthController::class, 'getProfile']);


