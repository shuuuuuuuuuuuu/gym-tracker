<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateWorkoutRequest extends FormRequest
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
            'weight'       => 'nullable|numeric|min:0|max:999.99',
            'unit'         => 'sometimes|in:reps,sec',
            'value'        => 'sometimes|integer|min:1',
            'sets'         => 'sometimes|integer|min:1',
            'workout_date' => 'sometimes|date',
        ];
    }
}
