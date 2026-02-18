<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Attraction;
use App\Models\Artist;
use App\Models\Event;
use App\Models\GalleryImage;
use App\Models\Inquiry;
use App\Models\Page;
use App\Models\SiteSetting;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ModelTest extends TestCase
{
    use RefreshDatabase;

    public function test_page_can_be_created(): void
    {
        $page = Page::factory()->create(['title' => 'About Batuan']);

        $this->assertDatabaseHas('pages', ['title' => 'About Batuan']);
        $this->assertEquals('About Batuan', $page->title);
    }

    public function test_page_published_scope(): void
    {
        Page::factory()->create(['status' => 'published']);
        Page::factory()->create(['status' => 'draft']);

        $this->assertCount(1, Page::published()->get());
    }

    public function test_page_language_scope(): void
    {
        Page::factory()->create(['language' => 'en']);
        Page::factory()->indonesian()->create();

        $this->assertCount(1, Page::inLanguage('id')->get());
    }

    public function test_attraction_can_be_created(): void
    {
        $attraction = Attraction::factory()->create(['name' => 'Pura Puseh']);

        $this->assertDatabaseHas('attractions', ['name' => 'Pura Puseh']);
    }

    public function test_attraction_featured_scope(): void
    {
        Attraction::factory()->featured()->create();
        Attraction::factory()->create(['is_featured' => false]);

        $this->assertCount(1, Attraction::featured()->get());
    }

    public function test_attraction_category_scope(): void
    {
        Attraction::factory()->create(['category' => 'temple']);
        Attraction::factory()->create(['category' => 'gallery']);

        $this->assertCount(1, Attraction::inCategory('temple')->get());
    }

    public function test_artist_can_be_created_with_json_contact(): void
    {
        $artist = Artist::factory()->create([
            'contact_info' => ['phone' => '123', 'instagram' => 'test'],
        ]);

        $this->assertIsArray($artist->contact_info);
        $this->assertEquals('123', $artist->contact_info['phone']);
    }

    public function test_event_upcoming_scope(): void
    {
        Event::factory()->create(['event_date' => now()->addDays(5), 'status' => 'published']);
        Event::factory()->create(['event_date' => now()->subDays(5), 'status' => 'published']);

        $this->assertCount(1, Event::published()->upcoming()->get());
    }

    public function test_gallery_image_ordered_scope(): void
    {
        GalleryImage::factory()->create(['sort_order' => 3, 'is_published' => true]);
        GalleryImage::factory()->create(['sort_order' => 1, 'is_published' => true]);

        $images = GalleryImage::published()->ordered()->get();
        $this->assertEquals(1, $images->first()->sort_order);
    }

    public function test_inquiry_mark_as_responded(): void
    {
        $inquiry = Inquiry::factory()->create(['status' => 'new']);

        $inquiry->markAsResponded();

        $this->assertEquals('responded', $inquiry->fresh()->status);
        $this->assertNotNull($inquiry->fresh()->responded_at);
    }

    public function test_site_setting_get_value(): void
    {
        SiteSetting::create(['key' => 'site_name', 'value' => 'Batuan', 'group' => 'general']);

        $this->assertEquals('Batuan', SiteSetting::getValue('site_name'));
        $this->assertEquals('default', SiteSetting::getValue('missing', 'default'));
    }

    public function test_site_setting_get_group(): void
    {
        SiteSetting::create(['key' => 'phone', 'value' => '123', 'group' => 'contact']);
        SiteSetting::create(['key' => 'email', 'value' => 'a@b.com', 'group' => 'contact']);

        $group = SiteSetting::getGroup('contact');
        $this->assertCount(2, $group);
        $this->assertEquals('123', $group['phone']);
    }
}
