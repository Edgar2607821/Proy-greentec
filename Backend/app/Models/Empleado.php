<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Empleado extends Model
{

    use HasFactory;

    protected $fillable = [
        'nombre', 'apellidos', 'edad', 'sexo', 'correo',
        'contra', 'departamento', 'puesto', 'fecha', 'num_telefono'
    ];
}
