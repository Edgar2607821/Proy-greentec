<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Foundation\Auth\User as Authenticatable;


class Cliente extends Model
{
    //
    use HasFactory, Notifiable;
    use HasApiTokens;

    protected $fillable = [
        'nombre',
        'apellidos',
        'edad',
        'sexo',
        'estado',
        'municipio',
        'cp',
        'calle',
        'nExt',
        'nInt',
        'colonia',
        'correo',
        'contra',
        'telefono',
        'referencias',
    ];

    protected $hidden = [
        'contra', // Ocultar contraseña en respuestas JSON
    ];
}
