# Laravel-Skeleton

A modern web application built with Laravel 12, React, Inertia, and Filament.

## Tech Stack

- **Framework**: [Laravel 12](https://laravel.com)
- **Frontend**: [React 19](https://react.dev) + [Inertia.js](https://inertiajs.com)
- **Styling**: [TailwindCSS 4](https://tailwindcss.com)
- **Admin Panel**: [Filament 3](https://filamentphp.com)
- **Database**: MySQL 8.0
- **Cache & Queue**: Redis
- **Local Development**: Docker

## Prerequisites

- **Docker** and **Docker Compose** installed on your machine.
- **Git** for version control.

## Installation

### Using Docker (Recommended)

1.  **Clone the repository**
    ```bash
    git clone <repository_url>
    cd laravelapp-skeleton
    ```

2.  **Setup Configuration**
    ```bash
    cp .env.example .env
    ```
    > **Note:** The project is configured to forward the database port to **3307** by default.

3.  **Start the containers**
    ```bash
    docker compose up -d
    ```

4.  **Install Dependencies**
    ```bash
    docker compose exec app composer install
    docker compose exec node npm install
    ```

5.  **Run Migrations & Setup**
    This step is crucial to set up the database schema.
    ```bash
    docker compose exec app php artisan key:generate
    docker compose exec app php artisan migrate
    docker compose exec app php artisan filament:upgrade
    docker compose exec node npm run build
    ```

### Local Installation (Fallback)

If you are not using Docker:

1.  **Install Dependencies**
    ```bash
    composer install
    npm install
    ```

2.  **Setup Configuration**
    ```bash
    cp .env.example .env
    php artisan key:generate
    ```

3.  **Run Migrations**
    ```bash
    php artisan migrate
    ```

4.  **Start Dev Server**
    ```bash
    npm run dev
    php artisan serve
    ```

## Usage

### Accessing the Application
- **Web App**: [http://localhost](http://localhost)
- **Filament Admin**: [http://localhost/admin](http://localhost/admin)

### Development
To start the Vite development server:
```bash
docker compose exec node npm run dev
```
Access at [http://localhost:5173](http://localhost:5173).

## Testing

Run the test suite using PHPUnit/Pest:
```bash
docker compose exec app php artisan test
```

## Troubleshooting

- **Debug Docker**: Run `/debug-docker` or check logs with `docker compose logs`.
- **Debug Laravel**: Run `/debug-laravel` or `docker compose exec app tail -f storage/logs/laravel.log`.
- **Filament Assets**: If the admin panel appears unstyled, run `docker compose exec app php artisan filament:upgrade` or `docker compose exec app php artisan vendor:publish --tag=filament-panels-assets --force`.

## License

This project is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
