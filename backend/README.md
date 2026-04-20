# Gym Tracker

一個為健身愛好者打造的智慧化追蹤健身紀錄系統，旨在透過自動化肌群分類與結構化數據分析，提供使用者更精確的訓練成效評估。

## Tech Stack

-   **Backend**: Laravel 11
-   **Database**: MySQL
-   **Frontend**: Ionic, Angular
-   **Testing**: PHPUnit (Feature & Unit Tests)
-   **CI/CD**: GitHub Actions
-   **Deployment**: Render

## Key Features

-   **智慧肌群分類系統 (`WorkoutClassifierService`)**:
    -   實作了混合式分類演算法，結合規則比對、關鍵字權重加權與字串相似度分析，自動識別動作的主肌群與次肌群。
-   **數據統計與量化分析**:
    -   優化 SQL 查詢邏輯，針對不同單位（Rep/Sec）統一計算訓練總容量 (Total Volume)，實現「量化管理」。
-   **自動化測試管道**:
    -   導入 GitHub Actions CI，確保每次程式碼異動後 API 邏輯正確性。

## Project Motivation

作為一名後端開發者，我開發此專案是為了深入探討：

1. **API 設計與封裝**: 如何透過 Service Layer 解耦複雜邏輯，提升代碼可維護性。
2. **自動化決策**: 利用自定義分類規則，將原始輸入數據轉化為有價值的分析指標。
3. **軟體品質保障**: 實踐 TDD 精神，為核心分類邏輯與數據統計功能建立完整測試覆蓋。

## Getting Started

### Prerequisites

-   PHP 8.2+
-   Composer
-   MySQL / SQLite

### Installation

````bash
# Clone the repository
git clone [https://github.com/shuuuuuuuuuuuu/gym-tracker.git](https://github.com/shuuuuuuuuuuuu/gym-tracker.git)

# Install dependencies
composer install

# Environment setup
cp .env.example .env
php artisan key:generate

# Run migrations and seeders
php artisan migrate --seed

## Testing
本專案高度重視軟體品質，已建立完整的測試覆蓋：
* Feature Tests: 驗證 API 端點的請求與回應邏輯 (Controller)。
* Unit Tests: 確保 WorkoutClassifierService 分類演算法的精確性。

### 執行測試：
```bash
php artisan test
````

## Roadmap

-   增加使用者訓練成效趨勢圖分析
-   優化相似度演算法
