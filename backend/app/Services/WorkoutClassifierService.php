<?php

namespace App\Services;

class WorkoutClassifierService
{
    /**
     * 規則優先比對
     */
    protected array $rules = [

        // ===== 下半身 =====
        'lunge' => [
            'primary' => 'legs',
            'secondary' => 'glutes',
            'group' => 'lower',
        ],
        '弓箭步' => [
            'primary' => 'legs',
            'secondary' => 'glutes',
            'group' => 'lower',
        ],
        'leg press' => [
            'primary' => 'legs',
            'secondary' => 'glutes',
            'group' => 'lower',
        ],
        '腿推' => [
            'primary' => 'legs',
            'secondary' => 'glutes',
            'group' => 'lower',
        ],
        'leg curl' => [
            'primary' => 'hamstrings',
            'secondary' => 'glutes',
            'group' => 'lower',
        ],
        '腿後勾' => [
            'primary' => 'hamstrings',
            'secondary' => 'glutes',
            'group' => 'lower',
        ],
        'leg extension' => [
            'primary' => 'legs',
            'secondary' => null,
            'group' => 'lower',
        ],
        '腿屈伸' => [
            'primary' => 'legs',
            'secondary' => null,
            'group' => 'lower',
        ],
        'hip thrust' => [
            'primary' => 'glutes',
            'secondary' => 'hamstrings',
            'group' => 'lower',
        ],
        '臀推' => [
            'primary' => 'glutes',
            'secondary' => 'hamstrings',
            'group' => 'lower',
        ],
        'calf raise' => [
            'primary' => 'calves',
            'secondary' => null,
            'group' => 'lower',
        ],
        '提踵' => [
            'primary' => 'calves',
            'secondary' => null,
            'group' => 'lower',
        ],
    
        // ===== 胸 =====
        'incline bench press' => [
            'primary' => 'chest',
            'secondary' => 'triceps',
            'group' => 'upper',
        ],
        '上斜臥推' => [
            'primary' => 'chest',
            'secondary' => 'triceps',
            'group' => 'upper',
        ],
        'chest fly' => [
            'primary' => 'chest',
            'secondary' => null,
            'group' => 'upper',
        ],
        '夾胸' => [
            'primary' => 'chest',
            'secondary' => null,
            'group' => 'upper',
        ],
        'push up' => [
            'primary' => 'chest',
            'secondary' => 'triceps',
            'group' => 'upper',
        ],
        '伏地挺身' => [
            'primary' => 'chest',
            'secondary' => 'triceps',
            'group' => 'upper',
        ],
    
        // ===== 背 =====
        'barbell row' => [
            'primary' => 'back',
            'secondary' => 'biceps',
            'group' => 'upper',
        ],
        '划船' => [
            'primary' => 'back',
            'secondary' => 'biceps',
            'group' => 'upper',
        ],
        'seated row' => [
            'primary' => 'back',
            'secondary' => 'biceps',
            'group' => 'upper',
        ],
        'face pull' => [
            'primary' => 'rear_delts',
            'secondary' => 'back',
            'group' => 'upper',
        ],
        '反向飛鳥' => [
            'primary' => 'rear_delts',
            'secondary' => 'back',
            'group' => 'upper',
        ],
        'pull up' => [
            'primary' => 'back',
            'secondary' => 'biceps',
            'group' => 'upper',
        ],
        '引體向上' => [
            'primary' => 'back',
            'secondary' => 'biceps',
            'group' => 'upper',
        ],
    
        // ===== 肩 =====
        'shoulder press' => [
            'primary' => 'shoulders',
            'secondary' => 'triceps',
            'group' => 'upper',
        ],
        '肩推' => [
            'primary' => 'shoulders',
            'secondary' => 'triceps',
            'group' => 'upper',
        ],
        'lateral raise' => [
            'primary' => 'shoulders',
            'secondary' => null,
            'group' => 'upper',
        ],
        '側平舉' => [
            'primary' => 'shoulders',
            'secondary' => null,
            'group' => 'upper',
        ],
        'front raise' => [
            'primary' => 'shoulders',
            'secondary' => null,
            'group' => 'upper',
        ],
        '前平舉' => [
            'primary' => 'shoulders',
            'secondary' => null,
            'group' => 'upper',
        ],
    
        // ===== 手臂 =====
        'bicep curl' => [
            'primary' => 'biceps',
            'secondary' => null,
            'group' => 'upper',
        ],
        '二頭彎舉' => [
            'primary' => 'biceps',
            'secondary' => null,
            'group' => 'upper',
        ],
        'tricep pushdown' => [
            'primary' => 'triceps',
            'secondary' => null,
            'group' => 'upper',
        ],
        '三頭下壓' => [
            'primary' => 'triceps',
            'secondary' => null,
            'group' => 'upper',
        ],
    
        // ===== 核心 =====
        'plank' => [
            'primary' => 'core',
            'secondary' => null,
            'group' => 'core',
        ],
        '棒式' => [
            'primary' => 'core',
            'secondary' => null,
            'group' => 'core',
        ],
        'crunch' => [
            'primary' => 'abs',
            'secondary' => null,
            'group' => 'core',
        ],
        '捲腹' => [
            'primary' => 'abs',
            'secondary' => null,
            'group' => 'core',
        ],
    ];

    /**
     * 肌群對應
     */
    protected array $keywordMap = [
        'press'     => ['primary' => 'chest', 'group' => 'upper'],
        'push'      => ['primary' => 'chest', 'group' => 'upper'],
        'row'       => ['primary' => 'back', 'group' => 'upper'],
        'pull'      => ['primary' => 'back', 'group' => 'upper'],
        'curl'      => ['primary' => 'biceps', 'group' => 'upper'],
        'extension' => ['primary' => 'triceps', 'group' => 'upper'],
        'squat'     => ['primary' => 'legs', 'group' => 'lower'],
        'deadlift'  => ['primary' => 'hamstrings', 'group' => 'lower'],
        'lunge'     => ['primary' => 'legs', 'group' => 'lower'],
        'raise'     => ['primary' => 'shoulders', 'group' => 'upper'],
        'fly'       => ['primary' => 'chest', 'group' => 'upper'],
        'plank'     => ['primary' => 'core', 'group' => 'core'],
        'crunch'    => ['primary' => 'abs', 'group' => 'core'],
    ];

    protected array $cache = [];

    /**
     * 封裝
     */
    public function resolve(string $name): array
    {
        if (isset($this->cache[$name])) {
            return $this->cache[$name];
        }

        $result =
            $this->classifyByRule($name)
            ?? $this->classifyByKeywordScore($name)
            ?? $this->classifyBySimilarity($name)
            ?? $this->unknown();

        return $this->cache[$name] = $result;
    }

    /**
     * 依規則匹配
     */
    protected function classifyByRule(string $name): ?array
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
     * keyword判斷
     */
    protected function classifyByKeywordScore(string $name): ?array
    {
        $normalized = strtolower($name);
        $scores = [];

        foreach ($this->keywordMap as $keyword => $info) {
            if (str_contains($normalized, $keyword)) {
                $primary = $info['primary'];
                $scores[$primary] = ($scores[$primary] ?? 0) + 1;
            }
        }

        if (empty($scores)) {
            return null;
        }

        arsort($scores);
        $best = array_key_first($scores);

        return [
            'primary'   => $best,
            'secondary' => null,
            'group'     => $this->inferGroup($best),
        ];
    }

    /**
     * 字串相似度
     */
    protected function classifyBySimilarity(string $name): ?array
    {
        $normalized = strtolower($name);
        $bestScore = 0;
        $bestMatch = null;

        foreach ($this->rules as $keyword => $result) {
            similar_text($normalized, strtolower($keyword), $percent);

            if ($percent > $bestScore) {
                $bestScore = $percent;
                $bestMatch = $result;
            }
        }

        if ($bestScore >= 70) {
            return $bestMatch;
        }

        return null;
    }

    /**
     * 根據 primary 推測 group
     */
    protected function inferGroup(string $primary): string
    {
        return match ($primary) {
            'legs', 'glutes', 'hamstrings', 'calves' => 'lower',
            'core', 'abs' => 'core',
            default => 'upper',
        };
    }

    protected function unknown(): array
    {
        return [
            'primary'   => 'unknown',
            'secondary' => null,
            'group'     => 'unknown',
        ];
    }

    public function getAllExerciseNames(): array
    {
        return array_keys($this->rules);
    }
}