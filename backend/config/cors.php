<?php

return [
    'paths' => [
        'api/*', 
        'sanctum/csrf-cookie'
    ],

    'allowed_methods' => ['*'],
    
    // 'allowed_origins' => [
    //     'http://localhost:8100',
    //     'http://127.0.0.1:8100',
    //     'http://192.168.68.59:8100',
    //     'https://gym-tracker-d5aqa8ore-shuyenkuo1998-7925s-projects.vercel.app/login', // 前端demo網址
    // ], 

    'allowed_origins' => [],

    'allowed_origins_patterns' => [
        '/^https:\/\/.*\.vercel\.app$/',
    ],
    
    'allowed_headers' => ['*'],
    
    'exposed_headers' => [],
    
    'max_age' => 0,
    
    'supports_credentials' => true, // 如果有登入功能一定要設為 true
];