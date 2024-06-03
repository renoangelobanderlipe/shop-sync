<?php

use App\Repositories\DataMapper\DataMapperRepository;
use App\Repositories\DataMapper\IDataMapperRepository;
use App\Services\DataMapper\DataMapperService;
use App\Services\DataMapper\IDataMapperService;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->registerRepository();
        $this->registerServices();
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
    }

    protected function registerRepository()
    {
        $repositories = [
            IDataMapperRepository::class => DataMapperRepository::class,
        ];

        foreach ($repositories as $repositoryKey => $repositoryValue) {
            $this->app->bind($repositoryKey, $repositoryValue);
        }
    }

    protected function registerServices()
    {
        $services = [
            IDataMapperService::class => fn ($app) => new DataMapperService($app->make(IDataMapperService::class)),
        ];

        foreach ($services as $serviceKey => $serviceValue) {
            $this->app->bind($serviceKey, $serviceValue);
        }
    }
}
