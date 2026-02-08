<?php

return [
    'paths' => ['api/*'],

    'allowed_methods' => ['*'],

    'allowed_origins' => [
        'http://localhost:8100',
        'http://127.0.0.1:8100',
    ],

    'allowed_headers' => ['*'],

    'supports_credentials' => true,
];
