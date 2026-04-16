<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    private function maskEmail($email)
    {
        if (!$email) return null;
        
        $parts = explode("@", $email);
        $name = $parts[0];
        $domain = $parts[1];

        // 取得前兩個字元，後面補上星號
        $len = strlen($name);
        if ($len <= 2) {
            $maskedName = str_repeat('*', $len);
        } else {
            $maskedName = substr($name, 0, 2) . str_repeat('*', $len - 2);
        }

        return $maskedName . "@" . $domain;
    }

    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:50',
            'email'    => 'required|email|unique:users,email',
            'password' => 'required|min:6',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email'    => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return response()->json([
            'message' => '註冊成功',
            'user'    => [
                'id'    => $user->id,
                'name'  => $user->name,
                // 遮罩
                'email' => $this->maskEmail($user->email),
            ],
        ], 201);
    }

    public function login(Request $request)
    {
        $request->validate([
            'email'    => 'required|email',
            'password' => 'required',
        ]);

        $user = User::where('email', $request->email)->first();

        if (! $user || ! Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['帳號或密碼錯誤'],
            ]);
        }

        $token = $user->createToken('gym-tracker')->plainTextToken;

        return response()->json([
            'token' => $token,
            'user' => [
                'id'       => $user->id,
                'name' => $user->name,
                'email'    => $this->maskEmail($user->email),
            ],
        ]);
    }

    public function changePassword(Request $request)
    {
        $request->validate([
            'current_password' => 'required',
            'password' => 'required|min:6|confirmed',
        ]);

        $user = $request->user();

        if (!Hash::check($request->current_password, $user->password)) {
            return response()->json([
                'message' => '目前密碼錯誤'
            ], 422);
        }

        $user->update([
            'password' => Hash::make($request->password),
        ]);

        return response()->json([
            'message' => '密碼修改成功'
        ]);
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'message' => '已登出'
        ]);
    }
}
