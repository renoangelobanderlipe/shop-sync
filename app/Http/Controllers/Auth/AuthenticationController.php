<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;

class AuthenticationController extends Controller
{
    public function login(LoginRequest $request)
    {
        try {
            if (!\Auth::attempt($request->only(['email', 'password']))) {
                return response()->json(['error' => 'Invalid Email or Password'], 401);
            }

            $user = User::where('email', $request->email)->first();

            $token = $user->createToken(config('sanctum.token_name'))->plainTextToken;

            return response()->json([
                'email' => $user->email,
                'token' => $token,
                'message' => 'Success',
            ], 200);
        } catch (\Throwable $throwable) {
            \Log::info([
                'error' => $throwable->getMessage(),
                'date and time' => now(),
                'location' => 'Authentication Controller @login',
            ]);
            dd($throwable);

            return response()->json(['error' => "Something Wen't Wrong"]);
        }
    }

    public function logout()
    {
        try {
            auth('web')->logout();

            return response()->json(['message' => 'Success']);
        } catch (\Throwable $throwable) {
            \Log::info([
                'error' => $throwable->getMessage(),
                'date and time' => now(),
                'location' => 'Authentication Controller @logout',
            ]);

            return response()->json(['message' => "Something Wen't Wrong"]);
        }
    }
}
