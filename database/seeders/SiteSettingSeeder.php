<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\SiteSetting;
use Illuminate\Database\Seeder;

class SiteSettingSeeder extends Seeder
{
    public function run(): void
    {
        $settings = [
            // Contact info
            ['key' => 'site_email', 'value' => 'info@batuanvillage.com', 'group' => 'contact'],
            ['key' => 'site_phone', 'value' => '+62 361 298 XXX', 'group' => 'contact'],
            ['key' => 'site_address', 'value' => 'Desa Batuan, Kecamatan Sukawati, Kabupaten Gianyar, Bali, Indonesia', 'group' => 'contact'],
            ['key' => 'google_maps_url', 'value' => 'https://maps.google.com/?q=-8.5344,115.2891', 'group' => 'contact'],
            ['key' => 'google_maps_embed', 'value' => '', 'group' => 'contact'],

            // Social links
            ['key' => 'instagram', 'value' => 'https://instagram.com/batuanvillage', 'group' => 'social'],
            ['key' => 'facebook', 'value' => 'https://facebook.com/batuanvillage', 'group' => 'social'],
            ['key' => 'youtube', 'value' => '', 'group' => 'social'],

            // General
            ['key' => 'site_name', 'value' => 'Batuan Village', 'group' => 'general'],
            ['key' => 'site_tagline', 'value' => 'Where a Thousand Years of Art Lives On', 'group' => 'general'],
        ];

        foreach ($settings as $setting) {
            SiteSetting::create($setting);
        }
    }
}
