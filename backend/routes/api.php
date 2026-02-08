<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\WorkoutController;
use App\Http\Controllers\Api\AuthController;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);


Route::middleware('auth:sanctum')->group(function () {

    Route::get('/workouts/all', [WorkoutController::class, 'allWorkouts']);

    Route::apiResource('workouts', WorkoutController::class);
    
    Route::post('/change-password', [AuthController::class, 'changePassword']);
    Route::post('/logout', [AuthController::class, 'logout']);
});