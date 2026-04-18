<?php

namespace App\Http\Controllers\Api;

use OpenApi\Attributes as OA;

#[OA\Info(
    title: "Gym Tracker API",
    version: "1.0.0",
    description: "健身紀錄系統 API 文件"
)]
#[OA\Server(
    url: "http://localhost:8000",
    description: "開發環境"
)]
#[OA\SecurityScheme(
    securityScheme: "bearerAuth",
    type: "http",
    name: "bearerAuth",
    in: "header",
    scheme: "bearer",
    bearerFormat: "JWT"
)]
class OpenApiDefinitions
{
    #[OA\PathItem(path: "/")]
    public function index() {}
}