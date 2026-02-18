<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Page;
use App\Services\SeoService;
use Inertia\Inertia;
use Inertia\Response;

class VisitInfoController extends Controller
{
    public function __invoke(SeoService $seo): Response
    {
        $page = Page::where('slug', 'visit-info')->published()->firstOrFail();

        return Inertia::render('VisitInfo', [
            'seo' => $seo->meta(
                $page->meta_title ?? 'Visit Batuan Village — Travel Guide',
                $page->meta_description,
            ),
            'page' => $page,
        ]);
    }
}
