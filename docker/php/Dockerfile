FROM php:8.1-fpm-buster
SHELL ["/bin/bash", "-oeux", "pipefail", "-c"]

# Node.jsのバージョン
ENV NODE_VERSION=18.x

ENV COMPOSER_ALLOW_SUPERUSER=1 \
  COMPOSER_HOME=/composer
# mysqlを追加
COPY --from=composer:2.0 /usr/bin/composer /usr/bin/composer

# pgsqlを追加
RUN apt-get update && apt-get install -y \
  automake autoconf pngquant libpng-dev libxrender1 libfontconfig libxext6 fonts-ipafont \
  zip unzip

RUN apt-get install -y libpq-dev \
  && docker-php-ext-install pdo pdo_pgsql pdo_mysql gd

# nodejs, npm install
RUN curl -fsSL https://deb.nodesource.com/setup_${NODE_VERSION} | bash \
  && apt-get install -y nodejs
# ローカル側のphp.iniをコンテナ側にコピペする 
COPY ./php.ini /usr/local/etc/php/php.ini

WORKDIR /workspace