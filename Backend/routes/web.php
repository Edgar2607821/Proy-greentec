<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');

    Route::get('/login/admin', [LoginController::class, 'showAdminLoginForm'])->name('login.admin');
    Route::get('/login/cliente', [LoginController::class, 'showClienteLoginForm'])->name('login.cliente');
    Route::get('/login/empleado', [LoginController::class, 'showEmpleadoLoginForm'])->name('login.empleado');

});
