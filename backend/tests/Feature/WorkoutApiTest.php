<?php

namespace Tests\Feature;

use App\Models\User;
use App\Models\Workout;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use PHPUnit\Framework\Attributes\Test;


class WorkoutApiTest extends TestCase
{
    use RefreshDatabase;

    #[Test]
    public function test_api_includes_volume_attribute(): void
    {
        $user = User::factory()->create();
        $workout = Workout::factory()->create([
            'user_id' => $user->id,
            'unit' => 'reps',
            'weight' => 10,
            'value' => 5,
            'sets' => 3
        ]);

        $response = $this->actingAs($user)->getJson('/api/workouts');

        // 斷言 API 回應中包含正確的 volume 值
        $response->assertStatus(200)
                 ->assertJsonFragment(['volume' => 150.0]); 
    }
}