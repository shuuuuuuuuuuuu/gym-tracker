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

RUN composer install \
    --ignore-platform-reqs \
    --no-interaction \
    --prefer-dist \
    --optimize-autoloader \
    --no-scripts

RUN chmod -R 777 storage bootstrap/cache

# ✅ 強制建立 .env（關鍵🔥）
RUN touch .env \
    && echo "APP_ENV=production" >> .env \
    && echo "APP_DEBUG=true" >> .env \
    && echo "APP_KEY=" >> .env

# ✅ runtime 生成 key
CMD php artisan key:generate --force && php -S 0.0.0.0:10000 -t public