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
        Schema::create('ventas', function (Blueprint $table) {
            $table->id();
            $table->foreignId('cliente_id')->constrained()->onDelete('cascade');
            $table->string('dispositivo');
            $table->string('tipo');
            $table->string('marca');
            $table->string('modelo');
            $table->date('anio_fabricacion');
            $table->timestamp('fecha')->useCurrent();
            $table->enum('estado', ['Nuevo', 'Usado', 'Descompuesto']);
            $table->text('descripcion');
            $table->float('peso', 8, 2)->default(0.0);
            $table->float('pago', 8, 2)->default(0.0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ventas');
    }
};
