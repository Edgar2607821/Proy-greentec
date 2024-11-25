<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DispositivoController extends Controller
{
    // GET: Listar todos los dispositivos
    public function index()
    {
        return view('dispositivos.index', ['dispositivos' => Dispositivo::all()]);
    }

    // GET: Mostrar el formulario para crear un dispositivo
    public function create()
    {
        return view('dispositivos.create');
    }

    // POST: Guardar un nuevo dispositivo
    public function store(Request $request)
    {
        $request->validate([
            'nombre' => 'required|max:40',
        ]);

        Dispositivo::create($request->all());
        return redirect()->route('dispositivos.index');
    }

    // GET: Mostrar un dispositivo específico
    public function show($id)
    {
        $dispositivo = Dispositivo::findOrFail($id);
        return view('dispositivos.show', compact('dispositivo'));
    }

    // GET: Mostrar el formulario para editar un dispositivo
    public function edit($id)
    {
        $dispositivo = Dispositivo::findOrFail($id);
        return view('dispositivos.edit', compact('dispositivo'));
    }

    // PUT: Actualizar un dispositivo existente
    public function update(Request $request, $id)
    {
        $request->validate([
            'nombre' => 'required|max:40',
        ]);

        $dispositivo = Dispositivo::findOrFail($id);
        $dispositivo->update($request->all());
        return redirect()->route('dispositivos.index');
    }

    // DELETE: Eliminar un dispositivo
    public function destroy($id)
    {
        $dispositivo = Dispositivo::findOrFail($id);
        $dispositivo->delete();
        return redirect()->route('dispositivos.index');
    }
}
