<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Dispositivo extends Model
{
    //
    use HasFactory;

    protected $fillable = ['nombre'];

    public function tipos()
    {
        return $this->hasMany(TipoDisp::class);
    }

    public function catalogos()
    {
        return $this->hasMany(Catalogo::class);
    }
}
