<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Empleado extends Model
{
    //
    use HasFactory;

    protected $fillable = [
        'nombre', 'apellidos', 'edad', 'sexo', 'correo',
        'contra', 'departamento', 'puesto', 'fecha', 'num_telefono'
    ];
}
