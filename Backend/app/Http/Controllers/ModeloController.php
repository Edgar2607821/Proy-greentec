<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ModeloController extends Controller
{
    //
    // Mostrar todos los modelos con la marca asociada
    public function index()
    {
        $modelos = Modelo::with('marca')->get(); // Incluye la marca relacionada
        return response()->json(['data' => $modelos], 200);
    }

    // Crear un nuevo modelo
    public function store(Request $request)
    {
        $request->validate([
            'marca_id' => 'required|exists:marcas,id',
            'nombre' => 'required|string|max:255',
        ]);

        $modelo = Modelo::create($request->all());
        return response()->json(['message' => 'Modelo creado con éxito', 'data' => $modelo], 201);
    }

    // Actualizar un modelo existente
    public function update(Request $request, $id)
    {
        $request->validate([
            'marca_id' => 'required|exists:marcas,id',
            'nombre' => 'required|string|max:255',
        ]);

        $modelo = Modelo::findOrFail($id);
        $modelo->update($request->all());
        return response()->json(['message' => 'Modelo actualizado con éxito', 'data' => $modelo], 200);
    }

    // Eliminar un modelo
    public function destroy($id)
    {
        $modelo = Modelo::findOrFail($id);
        $modelo->delete();
        return response()->json(['message' => 'Modelo eliminado con éxito'], 200);
    }
}
