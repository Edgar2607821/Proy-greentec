<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Empleado;
use Illuminate\Support\Facades\Hash;


class AuthEmpleadoController extends Controller
{
    //
        // Registro del empleado
    public function registerEmpleado(Request $request)
    {
        // Validar los datos del empleado
        $request->validate([
            'nombre' => 'required|string|max:255',
            'apellidos' => 'required|string|max:255',
            'edad' => 'required|integer',
            'sexo' => 'required|in:M,F',
            'correo' => 'required|email|unique:empleados,correo',
            'contra' => 'required|min:6',
            'departamento' => 'required|string|max:255',
            'puesto' => 'required|string|max:255',
            'fecha' => 'required|date',
            'num_telefono' => 'required|string|max:15',
        ]);

        // Crear el empleado
        $empleado = Empleado::create([
            'nombre' => $request->nombre,
            'apellidos' => $request->apellidos,
            'edad' => $request->edad,
            'sexo' => $request->sexo,
            'correo' => $request->correo,
            'contra' => Hash::make($request->contra),  // Contraseña encriptada
            'departamento' => $request->departamento,
            'puesto' => $request->puesto,
            'fecha' => $request->fecha,
            'num_telefono' => $request->num_telefono,
        ]);

        // Responder con el nuevo empleado creado
        return response()->json(['message' => 'Empleado registrado correctamente.', 'data' => $empleado]);
    }

    // Obtener todos los empleados
    public function getEmpleados()
    {
        $empleados = Empleado::all();  // Obtener todos los empleados
        return response()->json($empleados);  // Devolver los empleados
    }

    // Obtener un empleado por ID
    public function getEmpleadoById($id)
    {
        $empleado = Empleado::find($id);  // Buscar al empleado por ID

        if (!$empleado) {
            return response()->json(['message' => 'Empleado no encontrado'], 404);  // Si no se encuentra, devolver error
        }

        return response()->json($empleado);  // Devolver el empleado encontrado
    }

    // Actualizar perfil de un empleado
    public function updateEmpleado(Request $request, $id)
    {
        $empleado = Empleado::find($id);  // Buscar el empleado por ID

        if (!$empleado) {
            return response()->json(['message' => 'Empleado no encontrado'], 404);  // Si no se encuentra, devolver error
        }

        // Validar los datos para actualizar
        $request->validate([
            'nombre' => 'required|string|max:255',
            'apellidos' => 'required|string|max:255',
            'edad' => 'required|integer',
            'sexo' => 'required|in:M,F',
            'correo' => 'required|email|unique:empleados,correo,' . $id,
            'departamento' => 'required|string|max:255',
            'puesto' => 'required|string|max:255',
            'fecha' => 'required|date',
            'num_telefono' => 'required|string|max:15',
        ]);

        // Actualizar el empleado con los nuevos datos
        $empleado->update($request->all());

        // Devolver los datos actualizados del empleado
        return response()->json(['message' => 'Empleado actualizado correctamente.', 'data' => $empleado]);
    }

    // Eliminar un empleado
    public function deleteEmpleado($id)
    {
        $empleado = Empleado::find($id);  // Buscar el empleado por ID

        if (!$empleado) {
            return response()->json(['message' => 'Empleado no encontrado'], 404);  // Si no se encuentra, devolver error
        }

        $empleado->delete();  // Eliminar el empleado

        return response()->json(['message' => 'Empleado eliminado correctamente.']);  // Devolver confirmación de eliminación
    }
}
