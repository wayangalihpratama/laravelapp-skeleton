<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Event;
use App\Services\SeoService;
use Inertia\Inertia;
use Inertia\Response;

class EventController extends Controller
{
    public function __invoke(SeoService $seo): Response
    {
        $upcomingEvents = Event::published()
            ->upcoming()
            ->orderBy('event_date')
            ->get();

        $pastEvents = Event::published()
            ->where('event_date', '<', now()->toDateString())
            ->orderBy('event_date', 'desc')
            ->take(6)
            ->get();

        return Inertia::render('Events', [
            'seo' => $seo->meta(
                'Events & Festivals — Batuan Village',
                'Discover upcoming cultural events, temple ceremonies, and traditional festivals in Batuan Village, Bali.',
            ),
            'upcomingEvents' => $upcomingEvents,
            'pastEvents' => $pastEvents,
        ]);
    }
}
