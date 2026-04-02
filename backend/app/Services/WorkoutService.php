<?php

namespace App\Services;

use App\Models\Workout;
use App\Services\WorkoutClassifierService;

class WorkoutService
{
    protected $classifier;

    // 自動注入原本的分類服務
    public function __construct(WorkoutClassifierService $classifier)
    {
        $this->classifier = $classifier;
    }

    /**
     * 封裝：處理肌群分類邏輯
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
     * 封裝：計算訓練量
     */
    public function calculateVolume(Workout $workout): float
    {
        // 建議用 str_starts_with 或是統一轉成單數比較保險
        if ($workout->unit === 'reps' && $workout->weight !== null) {
            return (float) ($workout->weight * $workout->value * $workout->sets);
        } 
        if ($workout->unit === 'sec' || $workout->unit === 'secs') {
            return (float) ($workout->value * $workout->sets);
        }

        return 0;
    }

    /**
     * 封裝：尋找屬於該使用者的特定健身紀錄
     * 找不到時直接拋出 404 異常，Controller 就不用一直寫 if (!$workout)
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
     * 封裝：取得統計數據
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