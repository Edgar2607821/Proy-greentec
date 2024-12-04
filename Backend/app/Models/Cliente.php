<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class Cliente extends Model
{
    //
    use HasApiTokens, HasFactory, Notifiable;

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
        'referencias'
    ];

    protected $hidden = [
        'contra', // Ocultar contraseña en respuestas JSON
    ];

    public function empleado()
    {
        return $this->belongsTo(Empleado::class);
    }
}
