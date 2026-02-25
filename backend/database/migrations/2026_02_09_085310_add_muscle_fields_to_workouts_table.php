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
            $table->string('primary_muscle', 50)
                  ->nullable()
                  ->after('name');

            $table->string('secondary_muscle', 50)
                  ->nullable()
                  ->after('primary_muscle');

            $table->string('muscle_group', 20)
                  ->nullable()
                  ->after('secondary_muscle');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('workouts', function (Blueprint $table) {
            $table->dropColumn([
                'primary_muscle',
                'secondary_muscle',
                'muscle_group',
            ]);
        });
    }
};
