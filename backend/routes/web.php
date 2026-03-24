<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

// Route::get('/', function () {
//     return [
//         'APP_KEY' => env('APP_KEY'),
//         'APP_ENV' => env('APP_ENV'),
//     ];
// });