<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        User::firstOrCreate(
            ['email' => 'test@test.com'], 
            [
                'name' => 'Shu',
                'password' => Hash::make('123456'), 
                'email_verified_at' => now(),
            ]
        );

        $this->call([
            WorkoutSeeder::class,
        ]);
    }
}