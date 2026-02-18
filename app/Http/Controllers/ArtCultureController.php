<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Artist;
use App\Services\SeoService;
use Inertia\Inertia;
use Inertia\Response;

class ArtCultureController extends Controller
{
    public function __invoke(SeoService $seo): Response
    {
        $artists = Artist::published()
            ->orderBy('is_featured', 'desc')
            ->orderBy('name')
            ->get();

        return Inertia::render('ArtCulture', [
            'seo' => $seo->meta(
                'Art & Culture — Batuan Village',
                'Discover the legendary Batuan painting style, traditional wood carving, and the vibrant artisan community of Batuan Village.',
            ),
            'jsonLd' => $seo->artGallery(),
            'artists' => $artists,
        ]);
    }
}
