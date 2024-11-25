<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ClienteAuthController extends Controller
{
    //
    public function showLoginForm()
    {
        return view('auth.login_cliente'); // Vista de login para clientes
    }

    public function login(Request $request)
    {
        $credentials = $request->only('correo', 'password');
        
        if (Auth::guard('cliente')->attempt($credentials)) {
            return redirect()->route('cliente.dashboard'); // Redirige al dashboard de cliente
        }

        return back()->withErrors([
            'correo' => 'Las credenciales no coinciden.',
        ]);
    }

    public function logout()
    {
        Auth::guard('cliente')->logout();
        return redirect('/');
    }
}
