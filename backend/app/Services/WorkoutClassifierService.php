<?php

namespace App\Services;

use OpenAI;

class WorkoutClassifierService
{
    /**
     * 規則優先比對
     */
    protected array $rules = [
        'squat' => [
            'primary' => 'legs',
            'secondary' => 'glutes',
            'group' => 'lower',
        ],
        '深蹲' => [
            'primary' => 'legs',
            'secondary' => 'glutes',
            'group' => 'lower',
        ],
        'bench press' => [
            'primary' => 'chest',
            'secondary' => 'triceps',
            'group' => 'upper',
        ],
        '臥推' => [
            'primary' => 'chest',
            'secondary' => 'triceps',
            'group' => 'upper',
        ],
        'lat pulldown' => [
            'primary' => 'back',
            'secondary' => 'biceps',
            'group' => 'upper',
        ],
        '引體向上' => [
            'primary' => 'back',
            'secondary' => 'biceps',
            'group' => 'upper',
        ],
        'deadlift' => [
            'primary' => 'hamstrings',
            'secondary' => 'glutes',
            'group' => 'lower',
        ],
        '硬舉' => [
            'primary' => 'hamstrings',
            'secondary' => 'glutes',
            'group' => 'lower',
        ],
    ];

    /**
     * 取得 OpenAI client
     */
    protected function client()
{
    return OpenAI::client(env('OPENAI_API_KEY'));
}

    /**
     * 規則比對
     */
    public function classify(string $name): ?array
    {
        $normalized = strtolower($name);

        foreach ($this->rules as $keyword => $result) {
            if (str_contains($normalized, strtolower($keyword))) {
                return $result;
            }
        }

        return null;
    }

    /**
     * 用 OpenAI 判斷肌群
     */
    public function classifyWithAI(string $name): array
    {
        $client = $this->client();

        $prompt = <<<EOD
請幫我判斷健身動作的主要肌群。
輸入動作名稱: "{$name}"。
請回傳 JSON，格式如下：
{
  "primary": "主要肌群",
  "secondary": "次要肌群",
  "group": "upper/lower/full"
}
如果不確定，請盡量填 best guess。
EOD;

        $response = $client->chat()->create([
            'model' => 'gpt-3.5-turbo',
            'messages' => [
                [
                    'role' => 'user',
                    'content' => $prompt
                ]
            ],
            'temperature' => 0,
            'max_tokens' => 100,
        ]);

        $content = $response->choices[0]->message->content ?? '';

        $json = json_decode($content, true);

        if (!$json || !isset($json['primary'])) {
            return [
                'primary' => 'unknown',
                'secondary' => 'unknown',
                'group' => 'unknown',
            ];
        }

        return $json;
    }

    protected array $cache = [];
    
    /**
     * 封裝流程：先 rule-based，再 OpenAI
     */
    public function resolve(string $name): array
    {
        if (isset($this->cache[$name])) {
            return $this->cache[$name];
        }
    
        $result = $this->classify($name) ?? $this->classifyWithAI($name);

        $this->cache[$name] = $result;

        return $result;    
    }
}
