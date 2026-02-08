<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Workout;
use App\Models\User;

class WorkoutSeeder extends Seeder
{
    public function run(): void
    {
        User::factory(5)->create()->each(function ($user) {
            Workout::factory(10)->create([
                'user_id' => $user->id,
            ]);
        });
    }
}
