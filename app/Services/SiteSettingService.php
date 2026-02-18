<?php

declare(strict_types=1);

namespace App\Services;

use App\Models\SiteSetting;
use Illuminate\Support\Facades\Cache;

class SiteSettingService
{
    private const CACHE_TTL = 3600; // 1 hour

    public function get(string $key, mixed $default = null): mixed
    {
        return Cache::remember("site_setting.{$key}", self::CACHE_TTL, function () use ($key, $default) {
            return SiteSetting::getValue($key, $default);
        });
    }

    public function getGroup(string $group): array
    {
        return Cache::remember("site_settings_group.{$group}", self::CACHE_TTL, function () use ($group) {
            return SiteSetting::getGroup($group);
        });
    }

    public function getContactInfo(): array
    {
        return $this->getGroup('contact');
    }

    public function getSocialLinks(): array
    {
        return $this->getGroup('social');
    }

    public static function clearCache(): void
    {
        Cache::forget('site_setting.*');
        $groups = ['contact', 'social', 'general'];
        foreach ($groups as $group) {
            Cache::forget("site_settings_group.{$group}");
        }
    }
}
