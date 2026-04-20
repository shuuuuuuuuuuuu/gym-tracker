# Gym Tracker

一個為健身愛好者打造的智慧化追蹤健身紀錄系統，旨在透過自動化肌群分類與結構化數據分析，提供使用者更精確的訓練成效評估

## Tech Stack

### Backend

-   **Framework**: Laravel 11
-   **Database**: MySQL
-   **Testing**: PHPUnit

### Frontend

-   **Framework**: Ionic, Angular
-   **UI/UX**: SweetAlert2 (互動提示套件)

### DevOps & Infrastructure

-   **CI/CD**: GitHub Actions
-   **Deployment**: Render

---

## Key Features

-   **智慧肌群分類系統 (`WorkoutClassifierService`)**:
    -   實作混合式分類演算法，結合規則比對、關鍵字權重加權與字串相似度分析，自動識別動作的主肌群與次肌群
-   **數據統計與量化分析**:
    -   優化 SQL 查詢邏輯，針對不同單位（Rep/Sec）統一計算訓練總容量 (Total Volume)，實現「量化管理」
-   **自動化測試管道**:
    -   導入 GitHub Actions CI，確保每次程式碼異動後 API 邏輯正確性

---

## Project Motivation

作為一名後端開發者，我開發此專案是為了深入探討：

1. **API 設計與封裝**: 如何透過 Service Layer 解耦複雜邏輯，提升代碼可維護性
2. **自動化決策**: 利用自定義分類規則，將原始輸入數據轉化為有價值的分析指標
3. **軟體品質保障**: 實踐 TDD 精神，為核心分類邏輯與數據統計功能建立完整測試覆蓋

---

## Getting Started

### Prerequisites (系統環境需求)

在開始安裝前，請確保你的開發環境已安裝以下工具：

**Backend**

-   PHP 8.2+
-   Composer
-   MySQL

**Frontend**

-   Node.js
-   Angular CLI
-   Ionic CLI

### Installation (安裝步驟)

**1. Clone the repository**

```bash
git clone https://github.com/shuuuuuuuuuuuu/gym-tracker.git
cd gym-tracker
```

**2. Backend Setup**

```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate --seed
```

**3. Frontend Setup**

```bash
cd ../frontend
npm install
ionic serve
```

## Testing

本專案高度重視軟體品質，已建立完整的測試覆蓋：

-   **Feature Tests**: 驗證 API 端點的請求與回應邏輯 (Controller)
-   **Unit Tests**: 確保 `WorkoutClassifierService` 分類演算法的精確性

### 如何執行測試

在終端機輸入以下指令，即可執行專案內的所有測試：

```bash
php artisan test
```

## Roadmap

-   增加使用者訓練成效趨勢圖分析
-   優化相似度演算法
