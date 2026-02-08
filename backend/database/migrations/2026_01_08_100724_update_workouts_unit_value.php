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
        Schema::table('workouts', function (Blueprint $table) {
            $table->decimal('weight', 5, 2)->nullable()->change();
            $table->enum('unit', ['reps', 'sec'])->after('sets');
            $table->integer('value')->after('unit');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('workouts', function (Blueprint $table) {
            $table->integer('weight')->change();
            $table->dropColumn(['unit', 'value']);
        });
    }
};
