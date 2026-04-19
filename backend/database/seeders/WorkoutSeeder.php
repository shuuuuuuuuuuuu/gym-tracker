<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Workout;
use App\Models\User;

class WorkoutSeeder extends Seeder
{
    public function run(): void
    {
        $user = User::updateOrCreate(
            ['email' => 'test@test.com'], 
            [
                'name' => 'Shu',
                'password' => bcrypt('123456'), 
            ]
        );

        Workout::factory(1000)->create([
            'user_id' => $user->id
        ]);
    }
}