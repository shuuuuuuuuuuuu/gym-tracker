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

        Workout::factory(200)->create([
            'user_id' => $user->id
        ]);
    }
}