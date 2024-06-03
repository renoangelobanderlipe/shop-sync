<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DataMapper\DataMapperController;

Route::middleware('auth:sanctum')->group(function () {
    Route::controller(DataMapperController::class)->prefix('data-mapper')->group(function () {
        Route::post('upload', 'upload');
    });
});

Route::post('test-upload', fn () => dd(request()->file('file')));
