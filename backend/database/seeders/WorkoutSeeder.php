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
    
        $user = User::where('name', 'Shu')->first();

        Workout::factory(200)->create([
            'user_id' => $userId,
        ]);
    }
}