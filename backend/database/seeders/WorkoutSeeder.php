<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class WorkoutSeeder extends Seeder
{
    public function run(): void
    {
        $this->call(DemoWorkoutSeeder::class);
    }
}