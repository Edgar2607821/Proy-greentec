<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Marca extends Model
{
    //
    use HasFactory;

    protected $fillable = ['tipo_disp_id', 'nombre'];

    public function tipo()
    {
        return $this->belongsTo(TipoDisp::class);
    }

}
