<?php

return [
    // 'paths' => ['api/*'],

    // 'allowed_methods' => ['*'],

    // 'allowed_origins' => [
        // 'http://localhost:8100',
        // 'http://127.0.0.1:8100',
        // 'http://192.168.68.59:8100',
        // 'https://gym-tracker-tawny.vercel.app', // 前端demo網址
    // ],

    // 'allowed_headers' => ['*'],

    // 'supports_credentials' => true,


    'paths' => [
        'api/*', 
        'sanctum/csrf-cookie'
    ],

    'allowed_methods' => ['*'],
    
    'allowed_origins' => [
        'http://localhost:8100',
        'http://127.0.0.1:8100',
        'http://192.168.68.59:8100',
        'https://gym-tracker-tawny.vercel.app', // 前端demo網址
    ], 

    
    'allowed_origins_patterns' => [],
    
    'allowed_headers' => ['*'],
    
    'exposed_headers' => [],
    
    'max_age' => 0,
    
    'supports_credentials' => true, // 如果有登入功能一定要設為 true
];