<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

use OpenApi\Attributes as OA;

#[OA\Schema(
    schema: "Workout",
    properties: [
        new OA\Property(property: "id", type: "integer"),
        new OA\Property(property: "name", type: "string"),
        new OA\Property(property: "weight", type: "number"),
        new OA\Property(property: "unit", type: "string"),
        new OA\Property(property: "value", type: "integer"),
        new OA\Property(property: "sets", type: "integer"),
        new OA\Property(property: "workout_date", type: "string", format: "date"),
        new OA\Property(property: "primary_muscle", type: "string"),
        new OA\Property(property: "secondary_muscle", type: "string"),
        new OA\Property(property: "muscle_group", type: "string"),
        new OA\Property(property: "created_at", type: "string", format: "date-time"),
        new OA\Property(property: "updated_at", type: "string", format: "date-time"),
        new OA\Property(property: "deleted_at", type: "string", format: "date-time"),
    ]
)]
class Workout extends Model
{
    use HasFactory;
    use SoftDeletes;
    
    protected $fillable = [
        'user_id',
        'name',
        'sets',
        'unit',
        'value',
        'weight',
        'workout_date',
        'primary_muscle',    
        'secondary_muscle',
        'muscle_group',  
    ];

    protected $casts = [
        'weight' => 'decimal:2',
        'workout_date' => 'date',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function scopeForUser($query, $userId = null)
    {
        // 如果沒傳 userId，自動抓目前登入者
        $userId = $userId ?: auth()->id();
        return $query->where('user_id', $userId);
    }
}
