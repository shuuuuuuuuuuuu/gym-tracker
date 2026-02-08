<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Workout;
use Illuminate\Http\Request;
use App\Http\Requests\StoreWorkoutRequest;
use App\Http\Requests\UpdateWorkoutRequest;
use App\Helpers\ApiResponse;


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
    
        $workout = Workout::create($data);
    
        return ApiResponse::success(
            $workout,
            'Workout created successfully',
            201
        );
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

        $workout->update($request->validated());
        
        return ApiResponse::success(
            $workout,
            'Workout updated successfully'
        );
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
