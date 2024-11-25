<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class EmpleadoAuthController extends Controller
{
    //
    public function showLoginForm()
    {
        return view('auth.login_empleado');
    }

    public function login(Request $request)
    {
        $credentials = $request->only('correo', 'password');
        
        if (Auth::guard('empleado')->attempt($credentials)) {
            return redirect()->intended('/empleado/dashboard');
        }

        return back()->withErrors([
            'correo' => 'Las credenciales no coinciden con nuestros registros.',
        ]);
    }

    public function logout()
    {
        Auth::guard('empleado')->logout();
        return redirect('/');
    }
}
