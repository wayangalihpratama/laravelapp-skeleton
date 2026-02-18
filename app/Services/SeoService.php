<?php

declare(strict_types=1);

namespace App\Services;

use App\Models\Attraction;
use App\Models\Artist;
use App\Models\Event;

class SeoService
{
    public function meta(string $title, ?string $description = null, ?string $image = null, ?string $url = null): array
    {
        return [
            'title' => $title,
            'description' => $description ?? 'Discover Batuan Village — a thousand-year-old cultural gem in Bali, famous for its traditional painting style, ancient temples, and vibrant artisan community.',
            'image' => $image,
            'url' => $url ?? url()->current(),
        ];
    }

    public function localBusiness(): array
    {
        return [
            '@context' => 'https://schema.org',
            '@type' => 'LocalBusiness',
            'name' => 'Batuan Village (Desa Wisata Batuan)',
            'description' => 'A thousand-year-old cultural tourism village in Bali, famous for the Batuan painting style, ancient temples, and traditional dance performances.',
            'url' => url('/'),
            'telephone' => \App\Models\SiteSetting::getValue('site_phone', ''),
            'email' => \App\Models\SiteSetting::getValue('site_email', ''),
            'address' => [
                '@type' => 'PostalAddress',
                'addressLocality' => 'Batuan, Sukawati',
                'addressRegion' => 'Gianyar, Bali',
                'addressCountry' => 'ID',
            ],
            'geo' => [
                '@type' => 'GeoCoordinates',
                'latitude' => -8.5344,
                'longitude' => 115.2891,
            ],
            'image' => asset('images/batuan-village.jpg'),
        ];
    }

    public function touristAttraction(Attraction $attraction): array
    {
        $data = [
            '@context' => 'https://schema.org',
            '@type' => 'TouristAttraction',
            'name' => $attraction->name,
            'description' => $attraction->short_description ?? substr(strip_tags($attraction->description), 0, 200),
            'url' => url("/attractions/{$attraction->slug}"),
        ];

        if ($attraction->latitude && $attraction->longitude) {
            $data['geo'] = [
                '@type' => 'GeoCoordinates',
                'latitude' => $attraction->latitude,
                'longitude' => $attraction->longitude,
            ];
        }

        if ($attraction->opening_hours) {
            $data['openingHours'] = $attraction->opening_hours;
        }

        if ($attraction->featured_image) {
            $data['image'] = asset("storage/{$attraction->featured_image}");
        }

        return $data;
    }

    public function artGallery(): array
    {
        return [
            '@context' => 'https://schema.org',
            '@type' => 'ArtGallery',
            'name' => 'Batuan Village Art Galleries',
            'description' => 'Home of the legendary Batuan painting style — intricate, sombre-palette artworks depicting spiritual narratives, Hindu epics, and Balinese daily life since the 1930s.',
            'url' => url('/art-culture'),
            'address' => [
                '@type' => 'PostalAddress',
                'addressLocality' => 'Batuan, Sukawati',
                'addressRegion' => 'Gianyar, Bali',
                'addressCountry' => 'ID',
            ],
        ];
    }

    public function person(Artist $artist): array
    {
        $data = [
            '@context' => 'https://schema.org',
            '@type' => 'Person',
            'name' => $artist->name,
            'description' => substr(strip_tags($artist->bio), 0, 200),
            'url' => url("/artists/{$artist->slug}"),
            'jobTitle' => $artist->specialization ?? 'Batuan Artist',
        ];

        if ($artist->profile_photo) {
            $data['image'] = asset("storage/{$artist->profile_photo}");
        }

        return $data;
    }

    public function event(Event $event): array
    {
        $data = [
            '@context' => 'https://schema.org',
            '@type' => 'Event',
            'name' => $event->title,
            'description' => substr(strip_tags($event->description), 0, 200),
            'startDate' => $event->event_date->toIso8601String(),
            'url' => url('/events'),
            'location' => [
                '@type' => 'Place',
                'name' => $event->location ?? 'Batuan Village',
                'address' => [
                    '@type' => 'PostalAddress',
                    'addressLocality' => 'Batuan, Sukawati',
                    'addressRegion' => 'Gianyar, Bali',
                    'addressCountry' => 'ID',
                ],
            ],
        ];

        if ($event->end_date) {
            $data['endDate'] = $event->end_date->toIso8601String();
        }

        return $data;
    }
}
