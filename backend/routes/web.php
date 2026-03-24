<?php

use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('welcome');
// });

// Route::get('/', function () {
//     return 'Laravel OK';
// });

// Route::get('/', function () {
//     return response()->json([
//         'status' => 'ok',
//         'env' => env('APP_ENV'),
//         'db' => env('DB_CONNECTION')
//     ]);
// });

Route::get('/', function () {
    return [
        'APP_KEY' => env('APP_KEY'),
        'APP_ENV' => env('APP_ENV'),
    ];
});