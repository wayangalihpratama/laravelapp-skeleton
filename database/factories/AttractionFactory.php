<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\Attraction;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/** @extends Factory<Attraction> */
class AttractionFactory extends Factory
{
    protected $model = Attraction::class;

    public function definition(): array
    {
        $name = fake()->sentence(3);

        return [
            'name' => $name,
            'slug' => Str::slug($name),
            'description' => fake()->paragraphs(4, true),
            'short_description' => fake()->sentence(15),
            'category' => fake()->randomElement(['temple', 'gallery', 'landmark', 'performance', 'nature']),
            'latitude' => fake()->latitude(-8.56, -8.52),
            'longitude' => fake()->longitude(115.27, 115.31),
            'opening_hours' => '08:00 - 17:00',
            'entrance_fee' => fake()->randomElement(['Free', 'IDR 20,000', 'IDR 50,000']),
            'visitor_tips' => fake()->sentence(20),
            'meta_title' => $name,
            'meta_description' => fake()->sentence(10),
            'is_featured' => fake()->boolean(30),
            'status' => 'published',
        ];
    }

    public function draft(): static
    {
        return $this->state(fn () => ['status' => 'draft']);
    }

    public function featured(): static
    {
        return $this->state(fn () => ['is_featured' => true]);
    }
}
