<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Attraction;
use App\Services\SeoService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AttractionController extends Controller
{
    public function index(Request $request, SeoService $seo): Response
    {
        $category = $request->query('category');

        $attractions = Attraction::published()
            ->when($category, fn ($q) => $q->inCategory($category))
            ->orderBy('is_featured', 'desc')
            ->orderBy('name')
            ->get();

        return Inertia::render('Attractions/Index', [
            'seo' => $seo->meta(
                'Attractions — Batuan Village',
                'Explore temples, art galleries, natural landmarks, and cultural performances in Batuan Village, Bali.',
            ),
            'attractions' => $attractions,
            'activeCategory' => $category,
        ]);
    }

    public function show(string $slug, SeoService $seo): Response
    {
        $attraction = Attraction::where('slug', $slug)->published()->firstOrFail();

        $related = Attraction::published()
            ->where('id', '!=', $attraction->id)
            ->inCategory($attraction->category)
            ->take(3)
            ->get();

        return Inertia::render('Attractions/Show', [
            'seo' => $seo->meta(
                $attraction->meta_title ?? $attraction->name . ' — Batuan Village',
                $attraction->meta_description ?? $attraction->short_description,
                $attraction->featured_image ? asset("storage/{$attraction->featured_image}") : null,
            ),
            'jsonLd' => $seo->touristAttraction($attraction),
            'attraction' => $attraction,
            'related' => $related,
        ]);
    }
}
