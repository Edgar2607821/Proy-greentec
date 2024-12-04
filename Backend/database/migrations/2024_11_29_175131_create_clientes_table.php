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
            $table->string('nombre');
            $table->string('apellidos');
            $table->enum('sexo', ['M', 'F']);
            $table->string('correo')->unique();
            $table->string('contra');
            // Campos opcionales para completar más tarde
            $table->integer('edad')->nullable();
            $table->string('estado')->nullable();
            $table->string('municipio')->nullable();
            $table->string('cp', 10)->nullable();
            $table->string('calle')->nullable();
            $table->string('nExt')->nullable();
            $table->string('nInt')->nullable();
            $table->string('colonia')->nullable();
            $table->string('telefono', 15)->nullable();
            $table->text('referencias')->nullable();
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
