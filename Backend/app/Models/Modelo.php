<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Modelo extends Model
{
    //
    use HasFactory;

    protected $fillable = ['marca_id', 'nombre'];

    public function marca()
    {
        return $this->belongsTo(Marca::class);
    }

    public function precios()
    {
        return $this->hasMany(Precio::class);
    }
}
