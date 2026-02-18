<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Attraction;
use App\Models\Event;
use App\Models\GalleryImage;
use App\Services\SeoService;
use App\Services\SiteSettingService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function __invoke(Request $request, SeoService $seo, SiteSettingService $settings): Response
    {
        $featuredAttractions = Attraction::published()
            ->featured()
            ->take(6)
            ->get();

        $upcomingEvents = Event::published()
            ->upcoming()
            ->orderBy('event_date')
            ->take(3)
            ->get();

        $galleryPreview = GalleryImage::published()
            ->ordered()
            ->take(6)
            ->get();

        return Inertia::render('Home', [
            'seo' => $seo->meta(
                'Batuan Village — Where a Thousand Years of Art Lives On',
                'Discover Batuan Village, a culturally significant tourism village in Bali with ancient temples, world-famous painting art, and traditional dance performances.',
            ),
            'jsonLd' => $seo->localBusiness(),
            'featuredAttractions' => $featuredAttractions,
            'upcomingEvents' => $upcomingEvents,
            'galleryPreview' => $galleryPreview,
            'tagline' => $settings->get('site_tagline', 'Where a Thousand Years of Art Lives On'),
        ]);
    }
}
