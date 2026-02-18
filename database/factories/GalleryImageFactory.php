<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\GalleryImage;
use Illuminate\Database\Eloquent\Factories\Factory;

/** @extends Factory<GalleryImage> */
class GalleryImageFactory extends Factory
{
    protected $model = GalleryImage::class;

    public function definition(): array
    {
        return [
            'title' => fake()->sentence(3),
            'image' => 'gallery/placeholder-' . fake()->numberBetween(1, 20) . '.jpg',
            'category' => fake()->randomElement(['temple', 'art', 'culture', 'nature', 'village_life', 'event']),
            'caption' => fake()->sentence(8),
            'alt_text' => fake()->sentence(6),
            'sort_order' => fake()->numberBetween(0, 100),
            'is_published' => true,
        ];
    }
}
