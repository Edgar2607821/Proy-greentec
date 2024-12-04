<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('empleados', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->string('apellidos');
            $table->integer('edad');
            $table->enum('sexo', ['M', 'F']);
            $table->string('correo')->unique();
            $table->string('contra'); // Se usará para almacenar la contraseña encriptada
            $table->string('departamento');
            $table->string('puesto');
            $table->date('fecha'); // Fecha de alta o inicio de labores
            $table->string('num_telefono', 15);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('empleados');
    }
};
