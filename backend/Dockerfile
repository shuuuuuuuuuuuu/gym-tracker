FROM php:8.2-cli

RUN apt-get update && apt-get install -y \
    unzip curl git libzip-dev zip

RUN docker-php-ext-install pdo pdo_mysql zip

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /app

COPY . .

# ✅ 先建立 .env（避免 composer script 爆掉）
RUN cp .env.example .env || true

# ✅ 關閉 scripts（超關鍵🔥）
RUN composer install --no-interaction --prefer-dist --optimize-autoloader --no-scripts

# ✅ 再跑 Laravel 指令
RUN php artisan key:generate

RUN chmod -R 777 storage bootstrap/cache

CMD php -S 0.0.0.0:10000 -t public