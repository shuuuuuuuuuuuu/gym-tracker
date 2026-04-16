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
use App\Services\WorkoutService;


class WorkoutController extends Controller
{
    protected $workoutService;

    public function __construct(WorkoutService $workoutService)
    {
        $this->workoutService = $workoutService;
    }

    /**
     * GET /api/workouts
     * 分頁取得健身紀錄
     */
    public function index(Request $request)
    {
        $workouts = Workout::forUser()
            ->orderBy('workout_date', 'desc')
            ->paginate(10);
    
        return ApiResponse::success($workouts);
    }

    /**
     * GET 取得所有健身紀錄
     * 取得所有健身紀錄 (不分頁)
     */
    public function allWorkouts(Request $request)
    {
        $workouts = Workout::forUser()
                            ->orderBy('workout_date', 'asc')
                            ->get();

        return ApiResponse::success($workouts);
    }
    
    /**
     * POST /api/workouts
     * 新增一筆健身紀錄
     */
    public function store(StoreWorkoutRequest $request)
{
    $data = $request->validated();
    $data['user_id'] = $request->user()->id;

    // 呼叫 Service 處理肌群自動判定邏輯
    $data = $this->workoutService->fillMuscleData($data);

    $workout = Workout::create($data);

    return ApiResponse::success($workout, 'Workout created successfully', 201);
}
    
    /**
     * GET /api/workouts/{id}
     */
    public function show(Request $request, $id)
    {
        $workout = $this->workoutService->findUserWorkout($id);
    
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
        $workout = $this->workoutService->findUserWorkout($id);
    
        if (!$workout) {
            return ApiResponse::error('Workout not found', null, 404);
        }

        $data = $request->validated();

        if (isset($data['name'])) {
            $data = $this->workoutService->fillMuscleData($data);
        }

        $workout->update($data);

        return ApiResponse::success($workout, 'Workout updated successfully');
    }


    /**
     * DELETE /api/workouts/{id}
     */
    public function destroy(Request $request, $id)
    {
        $workout = $this->workoutService->findUserWorkout($id);
    
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
     */
    public function statistics(Request $request)
    {
        $range = $request->query('range', 'day');
        $start = $request->query('start');
        $end = $request->query('end');

        if (!$start || !$end) {
            return ApiResponse::error('缺少 start 或 end 參數', null, 400);
        }

        $result = $this->workoutService->getMuscleStats(
            $request->user()->id, 
            $start, 
            $end,
            $range
        );

        return ApiResponse::success($result);
    }

    /**
     * POST /api/workouts/{id}
     * 還原健身紀錄
     */
    public function restore(Request $request, $id)
    {
        $workout = $this->workoutService->findUserWorkout($id, true);
        
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
