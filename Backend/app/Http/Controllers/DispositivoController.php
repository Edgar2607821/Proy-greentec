<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Dispositivo;

class DispositivoController extends Controller
{
    //
    public function createDispositivo(Request $request)
{
    // Validar los datos enviados
    $request->validate([
        'nombre' => 'required|string|max:255',
    ]);

    // Crear un nuevo dispositivo
    $dispositivo = Dispositivo::create([
        'nombre' => $request->nombre,
    ]);

    return response()->json(['message' => 'Dispositivo creado exitosamente', 'data' => $dispositivo], 201);
}


public function getDispositivos()
{
    $dispositivos = Dispositivo::all(); // Obtener todos los registros
    return response()->json(['data' => $dispositivos], 200);
}


public function getDispositivoById($id)
{
    $dispositivo = Dispositivo::find($id); // Buscar por ID

    if (!$dispositivo) {
        return response()->json(['message' => 'Dispositivo no encontrado'], 404);
    }

    return response()->json(['data' => $dispositivo], 200);
}


public function updateDispositivo(Request $request, $id)
{
    // Buscar el dispositivo por ID
    $dispositivo = Dispositivo::find($id);

    if (!$dispositivo) {
        return response()->json(['message' => 'Dispositivo no encontrado'], 404);
    }

    // Validar los datos enviados
    $request->validate([
        'nombre' => 'required|string|max:255',
    ]);

    // Actualizar los datos del dispositivo
    $dispositivo->update([
        'nombre' => $request->nombre,
    ]);

    return response()->json(['message' => 'Dispositivo actualizado exitosamente', 'data' => $dispositivo], 200);
}

public function deleteDispositivo($id)
{
    // Buscar el dispositivo por ID
    $dispositivo = Dispositivo::find($id);

    if (!$dispositivo) {
        return response()->json(['message' => 'Dispositivo no encontrado'], 404);
    }

    // Eliminar el dispositivo
    $dispositivo->delete();

    return response()->json(['message' => 'Dispositivo eliminado exitosamente'], 200);
}



}
