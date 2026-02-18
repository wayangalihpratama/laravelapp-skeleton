<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Page;
use App\Services\SeoService;
use Inertia\Inertia;
use Inertia\Response;

class AboutController extends Controller
{
    public function __invoke(SeoService $seo): Response
    {
        $page = Page::where('slug', 'about')->published()->firstOrFail();

        return Inertia::render('About', [
            'seo' => $seo->meta(
                $page->meta_title ?? 'About Batuan Village',
                $page->meta_description,
                $page->og_image ? asset("storage/{$page->og_image}") : null,
            ),
            'page' => $page,
        ]);
    }
}
