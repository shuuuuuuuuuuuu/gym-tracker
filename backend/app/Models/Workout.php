<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

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
