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
            $table->string('nombre', 20);
            $table->string('apellidos', 50);
            $table->integer('edad');
            $table->enum('sexo', ['Femenino', 'Masculino', 'Otro']);
            $table->string('correo', 30);
            $table->string('contra', 20);
            $table->string('departamento', 20);
            $table->string('puesto', 20);
            $table->timestamp('fecha')->useCurrent();
            $table->string('num_telefono', 20);
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
