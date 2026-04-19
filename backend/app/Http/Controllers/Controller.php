<?php

namespace App\Http\Controllers;

use OpenApi\Attributes as OA;

#[OA\Schema(
    schema: "ApiResponse",
    properties: [
        new OA\Property(property: "success", type: "boolean", example: true),
        new OA\Property(property: "message", type: "string", example: "OK"),
        new OA\Property(property: "data", type: "object")
    ]
)]
abstract class Controller
{
    // 
    
}
