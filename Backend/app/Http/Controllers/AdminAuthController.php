<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminAuthController extends Controller
{
    //
    public function showLoginForm()
    {
        return view('auth.login_admin'); // Vista de login para admin
    }

    public function login(Request $request)
    {
        $credentials = $request->only('correo', 'password');
        
        if (Auth::guard('admin')->attempt($credentials)) {
            return redirect()->route('admin.dashboard'); // Redirige al dashboard de admin
        }

        return back()->withErrors([
            'correo' => 'Las credenciales no coinciden.',
        ]);
    }

    public function logout()
    {
        Auth::guard('admin')->logout();
        return redirect('/');
    }
}
