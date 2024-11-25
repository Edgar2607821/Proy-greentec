<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
    //
    use HasFactory;

    protected $fillable = ['nombre', 'apellidos', 'edad', 'sexo', 'estado', 'municipio', 'cp', 'calle', 'nExt', 'nInt', 'colonia', 'correo', 'contra', 'telefono', 'referencias', 'empleado_id'];

    public function empleado()
    {
        return $this->belongsTo(Empleado::class);
    }

    public function ventas()
    {
        return $this->hasMany(Venta::class);
    }
}
