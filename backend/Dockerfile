FROM php:8.2-cli

ENV COMPOSER_ALLOW_SUPERUSER=1

RUN apt-get update && apt-get install -y \
    unzip curl git libzip-dev zip libpng-dev libonig-dev \
    libpq-dev

RUN docker-php-ext-install \
    pdo \
    pdo_mysql \
    pdo_pgsql \
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

EXPOSE 10000

CMD php artisan key:generate --force && php -S 0.0.0.0:$PORT -t public