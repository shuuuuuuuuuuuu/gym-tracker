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
    

RUN chmod -R 777 storage bootstrap/cache

EXPOSE 10000

# CMD php artisan config:clear && php artisan serve --host=0.0.0.0 --port=$PORT
    # CMD php artisan migrate --force && \
    #     php artisan config:cache && \
    #     php artisan route:cache && \
    #     php artisan serve --host=0.0.0.0 --port=$PORT

CMD php artisan config:clear && \
    php artisan cache:clear && \
    mkdir -p storage/framework/cache/data storage/framework/sessions storage/framework/views && \
    chmod -R 777 storage bootstrap/cache && \
    php artisan migrate --force && \
    php artisan config:cache && \
    php artisan route:cache && \
    php artisan serve --host=0.0.0.0 --port=$PORT