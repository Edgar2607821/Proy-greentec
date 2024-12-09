<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MarcaController extends Controller
{
    //
     // Mostrar todas las marcas con el tipo de dispositivo asociado
    public function index()
    {
        $marcas = Marca::with('tipo')->get(); // Incluye el tipo relacionado
        return response()->json(['data' => $marcas], 200);
    }

    // Crear una nueva marca
    public function store(Request $request)
    {
        $request->validate([
            'tipo_disp_id' => 'required|exists:tipo_disps,id',
            'nombre' => 'required|string|max:255',
        ]);

        $marca = Marca::create($request->all());
        return response()->json(['message' => 'Marca creada con éxito', 'data' => $marca], 201);
    }

    // Actualizar una marca existente
    public function update(Request $request, $id)
    {
        $request->validate([
            'tipo_disp_id' => 'required|exists:tipo_disps,id',
            'nombre' => 'required|string|max:255',
        ]);

        $marca = Marca::findOrFail($id);
        $marca->update($request->all());
        return response()->json(['message' => 'Marca actualizada con éxito', 'data' => $marca], 200);
    }

    // Eliminar una marca
    public function destroy($id)
    {
        $marca = Marca::findOrFail($id);
        $marca->delete();
        return response()->json(['message' => 'Marca eliminada con éxito'], 200);
    }
}
