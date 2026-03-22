FROM php:8.2-cli

ENV COMPOSER_ALLOW_SUPERUSER=1

RUN apt-get update && apt-get install -y \
    unzip curl git libzip-dev zip libpng-dev libonig-dev

RUN docker-php-ext-install \
    pdo \
    pdo_mysql \
    zip \
    bcmath \
    mbstring

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /app

COPY . .

# ✅ 先建 env
RUN cp .env.example .env || true

# ✅ 先裝套件
RUN composer install \
    --ignore-platform-reqs \
    --no-interaction \
    --prefer-dist \
    --optimize-autoloader \
    --no-scripts

# ✅ 先給權限（超關鍵🔥）
RUN chmod -R 777 storage bootstrap/cache

# ❗❗ 不要在 build 階段跑 artisan ❗❗
# RUN php artisan key:generate  ❌ 拿掉

# ✅ 改成 runtime 再執行
CMD php artisan key:generate && php -S 0.0.0.0:10000 -t public