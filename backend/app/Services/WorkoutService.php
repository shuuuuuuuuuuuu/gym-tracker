<?php

namespace App\Services;

use App\Models\Workout;
use App\Services\WorkoutClassifierService;

class WorkoutService
{
    protected $classifier;

    public function __construct(WorkoutClassifierService $classifier)
    {
        $this->classifier = $classifier;
    }

    /**
     * 肌群分類邏輯
     */
    public function fillMuscleData(array $data)
    {
        if (isset($data['name'])) {
            $muscle = $this->classifier->resolve($data['name']);
            $data['primary_muscle']   = $muscle['primary'];
            $data['secondary_muscle'] = $muscle['secondary'];
            $data['muscle_group']     = $muscle['group'];
        }
        return $data;
    }

    /**
     * 計算訓練量
     */
    public function calculateVolume(Workout $workout): float
    {
        if ($workout->unit === 'reps' && $workout->weight !== null) {
            return (float) ($workout->weight * $workout->value * $workout->sets);
        } 
        if ($workout->unit === 'sec' || $workout->unit === 'secs') {
            return (float) ($workout->value * $workout->sets);
        }

        return 0;
    }

    /**
     * 找特定使用者的紀錄
     */
    public function findUserWorkout($id, $includeTrashed = false)
    {
        $query = Workout::forUser();
        
        if ($includeTrashed) {
            $query->withTrashed();
        }
        
        return $query->where('id', $id)->first();
    }

    /**
     * 取得統計數據
     */
    public function getMuscleStats($userId, $start, $end, $range = 'day')
    {
        $workouts = Workout::where('user_id', $userId)
            ->whereBetween('workout_date', [$start, $end])
            ->get();

        return $workouts->groupBy('primary_muscle')
            ->map(function ($items, $muscle) {
                return [
                    'muscle' => $muscle ?: '其他',
                    'volume' => round($items->sum(fn($w) => $this->calculateVolume($w)), 1)
                ];
            })
            ->values()
            ->sortByDesc('volume')
            ->toArray();
    }
}