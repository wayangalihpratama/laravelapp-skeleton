<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Artist;
use App\Services\SeoService;
use Inertia\Inertia;
use Inertia\Response;

class ArtistController extends Controller
{
    public function show(string $slug, SeoService $seo): Response
    {
        $artist = Artist::where('slug', $slug)->published()->firstOrFail();

        return Inertia::render('Artists/Show', [
            'seo' => $seo->meta(
                $artist->name . ' — Batuan Village Artist',
                substr(strip_tags($artist->bio), 0, 160),
                $artist->profile_photo ? asset("storage/{$artist->profile_photo}") : null,
            ),
            'jsonLd' => $seo->person($artist),
            'artist' => $artist,
        ]);
    }
}
