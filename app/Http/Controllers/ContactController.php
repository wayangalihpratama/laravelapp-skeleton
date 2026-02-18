<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\InquiryRequest;
use App\Models\Inquiry;
use App\Services\SeoService;
use App\Services\SiteSettingService;
use Inertia\Inertia;
use Inertia\Response;

class ContactController extends Controller
{
    public function show(SeoService $seo, SiteSettingService $settings): Response
    {
        return Inertia::render('Contact', [
            'seo' => $seo->meta(
                'Contact — Batuan Village',
                'Get in touch with Batuan Village. Inquire about visits, cultural tours, art classes, and more.',
            ),
            'contactInfo' => $settings->getContactInfo(),
            'socialLinks' => $settings->getSocialLinks(),
        ]);
    }

    public function store(InquiryRequest $request): \Illuminate\Http\RedirectResponse
    {
        Inquiry::create($request->validated());

        return back()->with('success', 'Thank you for your inquiry! We will get back to you soon.');
    }
}
