<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Attraction;
use App\Models\Event;
use App\Models\GalleryImage;
use App\Models\Inquiry;
use App\Models\Page;
use App\Models\SiteSetting;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PageControllerTest extends TestCase
{
    use RefreshDatabase;

    public function test_home_page_returns_200(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) => $page->component('Home')
            ->has('seo')
            ->has('featuredAttractions')
            ->has('upcomingEvents')
            ->has('galleryPreview')
        );
    }

    public function test_about_page_returns_200(): void
    {
        Page::factory()->create(['slug' => 'about', 'status' => 'published']);

        $response = $this->get('/about');

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) => $page->component('About'));
    }

    public function test_attractions_index_returns_200(): void
    {
        Attraction::factory()->count(3)->create(['status' => 'published']);

        $response = $this->get('/attractions');

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) => $page
            ->component('Attractions/Index')
            ->has('attractions', 3)
        );
    }

    public function test_attractions_show_returns_200(): void
    {
        $attraction = Attraction::factory()->create([
            'slug' => 'pura-puseh',
            'status' => 'published',
        ]);

        $response = $this->get('/attractions/pura-puseh');

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) => $page
            ->component('Attractions/Show')
            ->has('attraction')
            ->has('jsonLd')
        );
    }

    public function test_art_culture_page_returns_200(): void
    {
        $response = $this->get('/art-culture');

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) => $page->component('ArtCulture'));
    }

    public function test_visit_info_page_returns_200(): void
    {
        Page::factory()->create(['slug' => 'visit-info', 'status' => 'published']);

        $response = $this->get('/visit');

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) => $page->component('VisitInfo'));
    }

    public function test_gallery_page_returns_200(): void
    {
        $response = $this->get('/gallery');

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) => $page->component('Gallery'));
    }

    public function test_events_page_returns_200(): void
    {
        $response = $this->get('/events');

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) => $page->component('Events'));
    }

    public function test_contact_page_returns_200(): void
    {
        $response = $this->get('/contact');

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) => $page->component('Contact'));
    }

    public function test_contact_form_submission(): void
    {
        $response = $this->post('/contact', [
            'name' => 'John Doe',
            'email' => 'john@example.com',
            'subject' => 'Visit Inquiry',
            'message' => 'I would like to visit Batuan Village.',
        ]);

        $response->assertRedirect();
        $this->assertDatabaseHas('inquiries', [
            'name' => 'John Doe',
            'email' => 'john@example.com',
        ]);
    }

    public function test_contact_form_validation(): void
    {
        $response = $this->post('/contact', []);

        $response->assertSessionHasErrors(['name', 'email', 'subject', 'message']);
    }
}
