<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\Artist;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/** @extends Factory<Artist> */
class ArtistFactory extends Factory
{
    protected $model = Artist::class;

    public function definition(): array
    {
        $name = fake()->name();

        return [
            'name' => $name,
            'slug' => Str::slug($name),
            'bio' => fake()->paragraphs(3, true),
            'specialization' => fake()->randomElement(['Batuan Painting', 'Wood Carving', 'Stone Carving', 'Mask Making', 'Silver Work']),
            'gallery_name' => fake()->optional(0.6)->company(),
            'contact_info' => [
                'phone' => fake()->optional()->phoneNumber(),
                'instagram' => fake()->optional()->userName(),
            ],
            'is_featured' => fake()->boolean(30),
            'status' => 'published',
        ];
    }

    public function featured(): static
    {
        return $this->state(fn () => ['is_featured' => true]);
    }
}
