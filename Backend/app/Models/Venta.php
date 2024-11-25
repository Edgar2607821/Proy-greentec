<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Venta extends Model
{
    //
    use HasFactory;

    protected $fillable = ['cliente_id', 'dispositivo', 'tipo', 'marca', 'modelo', 'anio_fabricacion', 'estado', 'descripcion', 'peso', 'pago'];

    public function cliente()
    {
        return $this->belongsTo(Cliente::class);
    }

    public function recolecciones()
    {
        return $this->belongsToMany(Recoleccion::class);
    }
}
