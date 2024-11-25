<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TipoDisp extends Model
{
    //
    use HasFactory;

    protected $fillable = ['dispositivo_id', 'tipo'];

    public function dispositivo()
    {
        return $this->belongsTo(Dispositivo::class);
    }

    public function marcas()
    {
        return $this->hasMany(Marca::class);
    }
}
