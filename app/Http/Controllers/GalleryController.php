<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\GalleryImage;
use App\Services\SeoService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class GalleryController extends Controller
{
    public function __invoke(Request $request, SeoService $seo): Response
    {
        $category = $request->query('category');

        $images = GalleryImage::published()
            ->when($category, fn ($q) => $q->inCategory($category))
            ->ordered()
            ->get();

        return Inertia::render('Gallery', [
            'seo' => $seo->meta(
                'Photo Gallery — Batuan Village',
                'Browse beautiful photos of Batuan Village — temples, traditional art, culture, nature, and village life in this Balinese cultural gem.',
            ),
            'images' => $images,
            'activeCategory' => $category,
        ]);
    }
}
