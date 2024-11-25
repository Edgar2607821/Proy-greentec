<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Venta extends Model
{
    //
    use HasFactory;

    protected $fillable = [
        'usuario_id', 'dispositivo', 'tipo', 'marca', 'modelo',
        'anio_fabricacion', 'estado', 'descripcion', 'peso', 'pago'
    ];

    public function usuario()
    {
        return $this->belongsTo(Cliente::class);
    }
}
