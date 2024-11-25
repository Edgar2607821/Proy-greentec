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
        Schema::create('clientes', function (Blueprint $table) {
            $table->id();
            $table->string('nombre', 20);
            $table->string('apellidos', 50);
            $table->integer('edad')->nullable();
            $table->enum('sexo', ['Femenino', 'Masculino', 'Otro']);
            $table->string('estado', 20)->nullable();
            $table->string('municipio', 20)->nullable();
            $table->string('cp', 7)->nullable();
            $table->string('calle', 20)->nullable();
            $table->string('nExt', 4)->nullable();
            $table->string('nInt', 4)->nullable();
            $table->string('colonia', 20)->nullable();
            $table->string('correo', 30);
            $table->string('contra', 20);
            $table->string('telefono', 20)->nullable();
            $table->text('referencias')->nullable();
            $table->foreignId('empleado_id')->constrained()->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('clientes');
    }
};
