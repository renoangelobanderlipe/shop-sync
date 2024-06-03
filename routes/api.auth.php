<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthenticationController;

Route::middleware('auth:sanctum')->group(function () {
    Route::controller(AuthenticationController::class)->prefix('auth')->group(function () {
        Route::post('logout', 'logout');
    });
});

Route::controller(AuthenticationController::class)->prefix('auth')->group(function () {
    Route::post('login', 'login');
});
