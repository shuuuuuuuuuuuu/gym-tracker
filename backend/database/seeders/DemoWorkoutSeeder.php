<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Workout;
use App\Services\WorkoutClassifierService;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DemoWorkoutSeeder extends Seeder
{
    private WorkoutClassifierService $classifier;

    /** @var array<string, list<array<string, mixed>>> */
    private array $templates = [
        'push' => [
            ['name' => 'bench press', 'weight' => 55, 'value' => 8, 'sets' => 4, 'unit' => 'reps'],
            ['name' => 'incline bench press', 'weight' => 45, 'value' => 10, 'sets' => 3, 'unit' => 'reps'],
            ['name' => 'shoulder press', 'weight' => 30, 'value' => 10, 'sets' => 3, 'unit' => 'reps'],
            ['name' => 'lateral raise', 'weight' => 8, 'value' => 12, 'sets' => 3, 'unit' => 'reps'],
            ['name' => 'tricep pushdown', 'weight' => 25, 'value' => 12, 'sets' => 3, 'unit' => 'reps'],
            ['name' => 'push up', 'weight' => null, 'value' => 15, 'sets' => 3, 'unit' => 'reps'],
        ],
        'pull' => [
            ['name' => 'deadlift', 'weight' => 75, 'value' => 5, 'sets' => 4, 'unit' => 'reps'],
            ['name' => 'barbell row', 'weight' => 50, 'value' => 8, 'sets' => 4, 'unit' => 'reps'],
            ['name' => 'pull up', 'weight' => null, 'value' => 8, 'sets' => 4, 'unit' => 'reps'],
            ['name' => 'seated row', 'weight' => 45, 'value' => 10, 'sets' => 3, 'unit' => 'reps'],
            ['name' => 'face pull', 'weight' => 15, 'value' => 15, 'sets' => 3, 'unit' => 'reps'],
            ['name' => 'bicep curl', 'weight' => 12, 'value' => 12, 'sets' => 3, 'unit' => 'reps'],
        ],
        'legs' => [
            ['name' => 'squat', 'weight' => 65, 'value' => 8, 'sets' => 4, 'unit' => 'reps'],
            ['name' => 'RDL w/ kettlebell', 'weight' => 55, 'value' => 10, 'sets' => 3, 'unit' => 'reps'],
            ['name' => 'leg press', 'weight' => 100, 'value' => 12, 'sets' => 3, 'unit' => 'reps'],
            ['name' => 'leg curl', 'weight' => 30, 'value' => 12, 'sets' => 3, 'unit' => 'reps'],
            ['name' => 'hip thrust', 'weight' => 60, 'value' => 10, 'sets' => 3, 'unit' => 'reps'],
            ['name' => 'calf raise', 'weight' => 40, 'value' => 15, 'sets' => 3, 'unit' => 'reps'],
        ],
        'core' => [
            ['name' => 'plank', 'weight' => null, 'value' => 45, 'sets' => 3, 'unit' => 'sec'],
            ['name' => 'crunch', 'weight' => null, 'value' => 20, 'sets' => 3, 'unit' => 'reps'],
        ],
    ];

    public function run(): void
    {
        $this->classifier = app(WorkoutClassifierService::class);

        $user = User::updateOrCreate(
            ['email' => 'test@test.com'],
            [
                'name' => 'Shu',
                'password' => Hash::make('123456'),
                'email_verified_at' => now(),
            ]
        );

        Workout::where('user_id', $user->id)->forceDelete();

        $start = Carbon::parse('2025-08-13');
        $end = Carbon::today();
        $program = ['push', 'pull', 'legs'];
        $programIndex = 0;
        $records = [];

        for ($date = $start->copy(); $date->lte($end); $date->addDay()) {
            if (! $this->isTrainingDay($date)) {
                continue;
            }

            $weeksElapsed = (int) $start->diffInWeeks($date);
            $isDeload = $weeksElapsed > 0 && $weeksElapsed % 5 === 4;
            $type = $program[$programIndex % 3];
            $programIndex++;

            $exercises = $this->templates[$type];
            if ($date->dayOfWeek === Carbon::SATURDAY) {
                $exercises = array_merge($exercises, $this->templates['core']);
            }

            foreach ($exercises as $exercise) {
                $records[] = $this->buildRecord($user->id, $date, $exercise, $weeksElapsed, $isDeload);
            }
        }

        foreach (array_chunk($records, 200) as $chunk) {
            Workout::insert($chunk);
        }
    }

    private function isTrainingDay(Carbon $date): bool
    {
        // Mon / Wed / Fri / Sat，約每 5 週休息一週（模擬出差或疲勞）
        if (! in_array($date->dayOfWeek, [Carbon::MONDAY, Carbon::WEDNESDAY, Carbon::FRIDAY, Carbon::SATURDAY], true)) {
            return false;
        }

        $weekNumber = (int) Carbon::parse('2025-08-13')->diffInWeeks($date);

        if ($weekNumber % 8 === 7) {
            return false;
        }

        // 偶爾週六休息
        if ($date->dayOfWeek === Carbon::SATURDAY && ($weekNumber + $date->day) % 3 === 0) {
            return false;
        }

        return true;
    }

    private function buildRecord(int $userId, Carbon $date, array $exercise, int $weeksElapsed, bool $isDeload): array
    {
        $classification = $this->resolveClassification($exercise['name']);
        $progress = 1 + ($weeksElapsed * 0.018);
        if ($isDeload) {
            $progress *= 0.88;
        }

        $weight = $exercise['weight'];
        if ($weight !== null) {
            $weight = round($weight * $progress, 1);
            $weight = max(5, $weight + (($date->dayOfYear % 5) - 2) * 1.25);
        }

        $value = $exercise['value'];
        if ($exercise['unit'] === 'reps' && $exercise['weight'] === null) {
            $value = min(25, $value + intdiv($weeksElapsed, 4));
        }

        $now = now();

        return [
            'user_id' => $userId,
            'name' => $exercise['name'],
            'primary_muscle' => $classification['primary'],
            'secondary_muscle' => $classification['secondary'],
            'muscle_group' => $classification['group'],
            'weight' => $weight,
            'unit' => $exercise['unit'],
            'value' => $value,
            'sets' => $exercise['sets'],
            'workout_date' => $date->toDateString(),
            'created_at' => $now,
            'updated_at' => $now,
        ];
    }

    private function resolveClassification(string $name): array
    {
        if (str_contains(strtolower($name), 'rdl')) {
            return [
                'primary' => 'hamstrings',
                'secondary' => 'glutes',
                'group' => 'lower',
            ];
        }

        return $this->classifier->resolve($name);
    }
}
