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
        Schema::create('marcas', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('tipo_disp_id'); // Relación con TipoDisp
            $table->string('nombre'); // Nombre de la marca
            $table->timestamps();

            // Clave foránea para relacionar con TipoDisp
            $table->foreign('tipo_disp_id')
                  ->references('id')
                  ->on('tipo_disps')
                  ->onDelete('cascade'); // Elimina marcas si se elimina el tipo de dispositivo
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('marcas');
    }
};
