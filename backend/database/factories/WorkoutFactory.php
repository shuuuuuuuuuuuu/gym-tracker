<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;
use App\Services\WorkoutClassifierService;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Workout>
 */
class WorkoutFactory extends Factory
{
    public function definition(): array
    {
        $service = app(WorkoutClassifierService::class);

        // 從 rules 隨機挑一個 name
        $name = fake()->randomElement($service->getAllExerciseNames());

        // 用 service 判斷分類
        $classification = $service->resolve($name);

        return [
            'name' => $name,

            'primary_muscle' => $classification['primary'],
            'secondary_muscle' => $classification['secondary'],
            'muscle_group' => $classification['group'],

            // 約 20% 機率為 null，其餘為 0~100 的小數兩位
            'weight' => $this->faker->boolean(20)
                ? null
                : $this->faker->randomFloat(2, 0, 100),

            'unit' => $this->faker->randomElement(['reps', 'sec']),
            'value' => $this->faker->numberBetween(8, 12),
            'sets' => $this->faker->numberBetween(1, 4),
            'workout_date' => $this->faker
                ->dateTimeBetween('2026-01-01', '2026-03-31')
                ->format('Y-m-d'),
        ];
    }
}
