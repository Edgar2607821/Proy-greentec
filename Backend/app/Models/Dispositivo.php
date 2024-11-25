<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Dispositivo extends Model
{
    //
    use HasFactory;

    protected $fillable = ['nombre']; // Campos que se pueden asignar en masa
}
