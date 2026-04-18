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

use OpenApi\Attributes as OA;

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
    #[OA\Get(
        path: '/api/workouts',
        summary: '分頁取得健身紀錄',
        tags: ['Workout'],
        security: [['bearerAuth' => []]],
        responses: [
            new OA\Response(response: 200, description: 'OK', content: new OA\JsonContent(ref: "#/components/schemas/ApiResponse")),
        ]
    )]
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
    #[OA\Get(
        path: '/api/workouts/all',
        summary: '取得所有健身紀錄',
        tags: ['Workout'],
        security: [['bearerAuth' => []]],
        responses: [
            new OA\Response(response: 200, description: 'OK', content: new OA\JsonContent(ref: "#/components/schemas/ApiResponse")),
        ]
    )]
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
    #[OA\Post(
        path: '/api/workouts',
        summary: '新增一筆健身紀錄',
        tags: ['Workout'],
        security: [['bearerAuth' => []]],
        requestBody: new OA\RequestBody(
            required: true,
            content: new OA\JsonContent(ref: "#/components/schemas/Workout")
        ),
        responses: [
            new OA\Response(response: 201, description: 'Created', content: new OA\JsonContent(ref: "#/components/schemas/ApiResponse")),
        ]
    )]
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
    #[OA\Get(
        path: '/api/workouts/{id}',
        summary: '取得指定 ID 的健身紀錄',
        tags: ['Workout'],
        security: [['bearerAuth' => []]],
        parameters: [
            new OA\Parameter(
                name: 'id',
                in: 'path',
                required: true,
                description: '健身紀錄 ID'
            )
        ],
        responses: [
            new OA\Response(response: 200, description: 'OK', content: new OA\JsonContent(ref: "#/components/schemas/ApiResponse")),
        ]
    )]
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
    #[OA\Put(
        path: '/api/workouts/{id}',
        summary: '更新指定 ID 的健身紀錄',
        tags: ['Workout'],
        security: [['bearerAuth' => []]],
        parameters: [
            new OA\Parameter(
                name: 'id',
                in: 'path',
                required: true,
                description: '健身紀錄 ID'
            )
        ],
        responses: [
            new OA\Response(response: 200, description: 'OK', content: new OA\JsonContent(ref: "#/components/schemas/ApiResponse")),
        ]
    )]
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
    #[OA\Delete(
        path: '/api/workouts/{id}',
        summary: '刪除指定 ID 的健身紀錄',
        tags: ['Workout'],
        security: [['bearerAuth' => []]],
        parameters: [
            new OA\Parameter(
                name: 'id',
                in: 'path',
                required: true,
                description: '健身紀錄 ID'
            )
        ],
        responses: [
            new OA\Response(response: 200, description: 'OK', content: new OA\JsonContent(ref: "#/components/schemas/ApiResponse")),
        ]
    )]
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
    #[OA\Get(
        path: '/api/workouts/statistics',
        summary: '取得指定時間範圍內的主肌群統計',
        tags: ['Workout'],
        security: [['bearerAuth' => []]],
        parameters: [
            new OA\Parameter(name: 'range', in: 'query', required: false, description: '時間範圍 (day, week, month, year)', schema: new OA\Schema(type: 'string')),
            new OA\Parameter(name: 'start', in: 'query', required: true, description: '開始日期', schema: new OA\Schema(type: 'string', format: 'date')),
            new OA\Parameter(name: 'end', in: 'query', required: true, description: '結束日期', schema: new OA\Schema(type: 'string', format: 'date'))
        ],
        responses: [
            new OA\Response(response: 200, description: 'OK', content: new OA\JsonContent(ref: "#/components/schemas/ApiResponse")),
        ]
    )]
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
    #[OA\Post(
        path: '/api/workouts/{id}/restore',
        summary: '還原指定 ID 的健身紀錄',
        tags: ['Workout'],
        security: [['bearerAuth' => []]],
        parameters: [
            new OA\Parameter(
                name: 'id',
                in: 'path',
                required: true,
                description: '健身紀錄 ID'
            )
        ],
        responses: [
            new OA\Response(response: 200, description: 'OK', content: new OA\JsonContent(ref: "#/components/schemas/ApiResponse")),
        ]
    )]
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
