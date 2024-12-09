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
        Schema::create('tipo_disps', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('dispositivo_id'); // Relación con dispositivos
            $table->string('tipo'); // Tipo de dispositivo
            $table->timestamps();

            // Clave foránea para relacionar con dispositivos
            $table->foreign('dispositivo_id')
                  ->references('id')
                  ->on('dispositivos')
                  ->onDelete('cascade'); // Elimina tipos si se elimina el dispositivo
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tipo_disps');
    }
};
