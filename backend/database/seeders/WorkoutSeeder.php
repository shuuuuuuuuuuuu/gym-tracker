<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Workout;
use App\Models\User;

class WorkoutSeeder extends Seeder
{
    public function run(): void
    {
        $user = User::factory()->create([
            'name' => 'Shu',
            'email' => 'test@test.com'
        ]);

        // \App\Models\Workout::truncate();

        Workout::factory(1000)->create([
            'user_id' => $user->id
        ]);
    }
}