<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;


Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/cliente/register', [AuthController::class, 'registerCliente']);
Route::middleware('auth:cliente')->group(function () {
    Route::put('/cliente/update-profile', [AuthController::class, 'updateProfile']);
});
