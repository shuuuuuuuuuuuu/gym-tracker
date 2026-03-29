<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Workout;

class WorkoutSeeder extends Seeder
{
    public function run(): void
    {
        if (Workout::exists()) {
            return;
        }

        $user = User::firstOrCreate([
            'name' => 'Shu'
        ]);

        $user->workouts()->saveMany(
            Workout::factory(200)->make()
        );
    }
}