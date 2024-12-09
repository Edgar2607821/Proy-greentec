<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TipoDisp;
use App\Models\Dispositivo;


class TipoDispController extends Controller
{
    //
    public function index()
    {
        $tipos = TipoDisp::with('dispositivo')->get(); // Incluye el dispositivo relacionado
        return response()->json(['data' => $tipos], 200);
    }

    // Crear un nuevo tipo de dispositivo
    public function store(Request $request)
    {
        $request->validate([
            'dispositivo_id' => 'required|exists:dispositivos,id',
            'tipo' => 'required|string|max:255',
        ]);

        $tipo = TipoDisp::create($request->all());
        return response()->json(['message' => 'Tipo creado con éxito', 'data' => $tipo], 201);
    }

    // Actualizar un tipo de dispositivo
    public function update(Request $request, $id)
    {
        $request->validate([
            'dispositivo_id' => 'required|exists:dispositivos,id',
            'tipo' => 'required|string|max:255',
        ]);

        $tipo = TipoDisp::findOrFail($id);
        $tipo->update($request->all());
        return response()->json(['message' => 'Tipo actualizado con éxito', 'data' => $tipo], 200);
    }

    // Eliminar un tipo de dispositivo
    public function destroy($id)
    {
        $tipo = TipoDisp::findOrFail($id);
        $tipo->delete();
        return response()->json(['message' => 'Tipo eliminado con éxito'], 200);
    }
}
