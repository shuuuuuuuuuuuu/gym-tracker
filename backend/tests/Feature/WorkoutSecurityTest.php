<?php

namespace Tests\Feature;

use App\Models\User;
use App\Models\Workout;
use Illuminate\Foundation\Testing\RefreshDatabase;
use PHPUnit\Framework\Attributes\Test;
use Tests\TestCase;

class WorkoutSecurityTest extends TestCase
{
    use RefreshDatabase;

    #[Test]
    public function user_cannot_view_another_users_workout(): void
    {
        $userA = User::factory()->create();
        $userB = User::factory()->create();
        $workoutB = Workout::factory()->create(['user_id' => $userB->id]);

        // 以 User A 的身份嘗試查看 User B 的資料
        $response = $this->actingAs($userA)->getJson("/api/workouts/{$workoutB->id}");

        $response->assertStatus(404);
    }

    #[Test]
    public function user_cannot_update_another_users_workout(): void
    {
        $userA = User::factory()->create();
        $userB = User::factory()->create();
        $workoutB = Workout::factory()->create(['user_id' => $userB->id]);

        $response = $this->actingAs($userA)->putJson("/api/workouts/{$workoutB->id}", [
            'name' => 'Hacked Workout',
            'sets' => 3,
            'unit' => 'reps',
            'value' => 10,
            'weight' => 50,
            'workout_date' => '2026-04-19'
        ]);

        $response->assertStatus(404);
        
        // 確保資料庫真的沒有被修改
        $this->assertDatabaseMissing('workouts', ['id' => $workoutB->id, 'name' => 'Hacked Workout']);
    }

    #[Test]
    public function user_cannot_delete_another_users_workout(): void
    {
        $userA = User::factory()->create();
        $userB = User::factory()->create();
        $workoutB = Workout::factory()->create(['user_id' => $userB->id]);

        $response = $this->actingAs($userA)->deleteJson("/api/workouts/{$workoutB->id}");

        $response->assertStatus(404);
        
        // 確保資料庫資料還在
        $this->assertDatabaseHas('workouts', ['id' => $workoutB->id]);
    }
}