<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreWorkoutRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name'         => 'sometimes|string|max:100',
            'weight'       => 'nullable|numeric|min:1|max:99.99',
            'unit'         => 'sometimes|in:reps,sec',
            'value'        => 'sometimes|integer|min:10|max:12',
            'sets'         => 'sometimes|integer|min:3|max:4',
            'workout_date' => 'sometimes|date',
        ];
    }
}
