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
        return Workout::where('user_id', $userId)
            ->whereBetween('workout_date', [$start, $end])
            ->select('primary_muscle', 
                DB::raw('SUM(
                    CASE 
                        WHEN unit = "reps" THEN (weight * value * sets)
                        WHEN unit IN ("sec", "secs") THEN (value * sets)
                        ELSE 0 
                    END
                ) as total_volume')
            )
            ->groupBy('primary_muscle')
            ->get();
    }
}