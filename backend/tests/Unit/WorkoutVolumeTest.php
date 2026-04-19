<?php

namespace Tests\Unit\Unit;

use PHPUnit\Framework\TestCase;
use App\Models\Workout;
use PHPUnit\Framework\Attributes\Test;

class WorkoutVolumeTest extends TestCase
{
    #[Test]
    public function test_volume_calculation_for_reps(): void
    {
        $workout = new Workout([
            'unit' => 'reps',
            'weight' => 10,
            'value' => 5, 
            'sets' => 3
        ]);

        
        $this->assertEquals(150, $workout->volume);
    }

    #[Test]
    public function test_volume_calculation_for_seconds(): void
    {
        $workout = new Workout([
            'unit' => 'sec',
            'value' => 30, 
            'sets' => 2
        ]);

        $this->assertEquals(60, $workout->volume);
    }
}
