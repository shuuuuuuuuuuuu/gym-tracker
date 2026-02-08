<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Workout>
 */
class WorkoutFactory extends Factory
{
    public function definition(): array
    {
        return [
            'user_id' => User::inRandomOrder()->first()->id,

            'name' => $this->faker->word(),

            // 約 20% 機率為 null，其餘為 0~100 的小數兩位
            'weight' => $this->faker->boolean(20)
                ? null
                : $this->faker->randomFloat(2, 0, 100),

            'unit' => $this->faker->randomElement(['reps', 'sec']),
            'value' => $this->faker->numberBetween(8, 12),
            'sets' => $this->faker->numberBetween(1, 4),
            'workout_date' => $this->faker
                ->dateTimeBetween('-1 year', 'now')
                ->format('Y-m-d'),
        ];
    }
}
