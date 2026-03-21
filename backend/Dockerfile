FROM php:8.2-cli

# 安裝系統套件
RUN apt-get update && apt-get install -y \
    unzip curl git libzip-dev zip

# 安裝 PHP extensions（Laravel 需要）
RUN docker-php-ext-install pdo pdo_mysql zip

# 安裝 Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# 設定工作目錄
WORKDIR /app

# 複製專案
COPY . .

# 安裝 Laravel 套件
RUN composer install --no-interaction --prefer-dist --optimize-autoloader

# 設定 Laravel 權限
RUN chmod -R 777 storage bootstrap/cache

# Laravel 環境
RUN cp .env.example .env || true

# 產生 APP KEY（很重要🔥）
RUN php artisan key:generate

# 開 server（Laravel 正確入口）
CMD php -S 0.0.0.0:10000 -t public