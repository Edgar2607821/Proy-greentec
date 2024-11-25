<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Precio extends Model
{
    //
    use HasFactory;

    protected $fillable = ['modelo_id', 'preciokg'];

    public function modelo()
    {
        return $this->belongsTo(Modelo::class);
    } 
}
