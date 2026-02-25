<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Workout;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB; 
use App\Http\Requests\StoreWorkoutRequest;
use App\Http\Requests\UpdateWorkoutRequest;
use App\Helpers\ApiResponse;
use App\Services\WorkoutClassifierService;


class WorkoutController extends Controller
{
    /**
     * GET /api/workouts
     * 取得所有健身紀錄
     */
    public function index(Request $request)
    {
        $workouts = Workout::where('user_id', $request->user()->id)
            ->orderBy('workout_date', 'desc')
            ->paginate(10);
    
        return ApiResponse::success($workouts);
    }

    /**
     * GET 取得所有健身紀錄
     */
    public function allWorkouts(Request $request)
    {
        $workouts = Workout::where('user_id', $request->user()->id)
                            ->orderBy('workout_date', 'asc')
                            ->get();

        return response()->json(['data' => $workouts]);
    }
    
    /**
     * POST /api/workouts
     * 新增一筆健身紀錄
     */
    public function store(StoreWorkoutRequest $request)
{
    $data = $request->validated();
    $data['user_id'] = $request->user()->id;

    // AI 判定肌群
    $classifier = app(\App\Services\WorkoutClassifierService::class);
    $muscle = $classifier->resolve($data['name']);

    $data['primary_muscle']   = $muscle['primary'];
    $data['secondary_muscle'] = $muscle['secondary'];
    $data['muscle_group']     = $muscle['group'];

    $workout = Workout::create($data);

    return ApiResponse::success($workout, 'Workout created successfully', 201);
}
    
    /**
     * GET /api/workouts/{id}
     * 取得單一健身紀錄
     */
    public function show(Request $request, $id)
    {
        $workout = Workout::where('id', $id)
            ->where('user_id', $request->user()->id)
            ->first();
    
        if (!$workout) {
            return ApiResponse::error('Workout not found', null, 404);
        }

        return ApiResponse::success($workout);
    }

    /**
     * PUT /api/workouts/{id}
     * 更新健身紀錄
     */
    public function update(UpdateWorkoutRequest $request, $id)
{
    $workout = Workout::where('id', $id)
        ->where('user_id', $request->user()->id)
        ->first();

    if (!$workout) {
        return ApiResponse::error('Workout not found', null, 404);
    }

    $data = $request->validated();

    if (isset($data['name'])) {
        $classifier = app(\App\Services\WorkoutClassifierService::class);
        $muscle = $classifier->resolve($data['name']);

        $data['primary_muscle']   = $muscle['primary'];
        $data['secondary_muscle'] = $muscle['secondary'];
        $data['muscle_group']     = $muscle['group'];
    }

    $workout->update($data);

    return ApiResponse::success($workout, 'Workout updated successfully');
}


    /**
     * DELETE /api/workouts/{id}
     * 刪除健身紀錄
     */
    public function destroy(Request $request, $id)
    {
        $workout = Workout::where('id', $id)
            ->where('user_id', $request->user()->id)
            ->first();
    
        if (!$workout) {
            return ApiResponse::error('Workout not found', null, 404);
        }

        $workout->delete();

        return ApiResponse::success(
            null,
            'Workout deleted successfully'
        );
    }

    /**
     * GET /api/workouts/statistics
     * 取得指定時間範圍內的主肌群統計
     * query: ?range=day|week|month|year&start=YYYY-MM-DD&end=YYYY-MM-DD
     */
    public function statistics(Request $request)
    {
        $user = $request->user();
        $range = $request->query('range', 'day');
        $start = $request->query('start');
        $end = $request->query('end');

        if (!$start || !$end) {
            return ApiResponse::error('缺少 start 或 end 參數', null, 400);
        }

        // 取該時間範圍內該用戶的健身紀錄
        $workouts = Workout::where('user_id', $user->id)
            ->whereBetween('workout_date', [$start, $end])
            ->get();

        // 根據 primary_muscle 分組統計訓練量
        $muscleStats = [];

        foreach ($workouts as $w) {
            $muscle = $w->primary_muscle ?? '其他';

            // 訓練量計算
            if ($w->unit === 'reps' && $w->weight !== null) {
                $volume = $w->weight * $w->value * $w->sets;
            } elseif ($w->unit === 'secs') {
                $volume = $w->value * $w->sets;
            } else {
                $volume = 0;
            }

            if (!isset($muscleStats[$muscle])) {
                $muscleStats[$muscle] = 0;
            }

            $muscleStats[$muscle] += $volume;
        }

        // 轉陣列給前端
        $result = [];
        foreach ($muscleStats as $muscle => $volume) {
            $result[] = [
                'muscle' => $muscle,
                'volume' => round($volume, 1)
            ];
        }

        // 可依 volume 排序，方便 Chart 顯示
        usort($result, fn($a, $b) => $b['volume'] <=> $a['volume']);

        return ApiResponse::success($result);
    }

    /**
     * POST /api/workouts/{id}
     * 還原健身紀錄
     */
    public function restore(Request $request, $id)
    {
        $workout = Workout::withTrashed()
            ->where('id', $id)
            ->where('user_id', $request->user()->id)
            ->first();
    
        if (!$workout) {
            return ApiResponse::error('Workout not found', null, 404);
        }

        $workout->restore();

        return ApiResponse::success(
            null,
            'Workout restored successfully'
        );
    }

}
