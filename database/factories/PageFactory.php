<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\Page;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/** @extends Factory<Page> */
class PageFactory extends Factory
{
    protected $model = Page::class;

    public function definition(): array
    {
        $title = fake()->sentence(4);

        return [
            'title' => $title,
            'slug' => Str::slug($title),
            'body' => fake()->paragraphs(5, true),
            'meta_title' => $title,
            'meta_description' => fake()->sentence(10),
            'language' => 'en',
            'status' => 'published',
            'sort_order' => fake()->numberBetween(0, 10),
        ];
    }

    public function draft(): static
    {
        return $this->state(fn () => ['status' => 'draft']);
    }

    public function indonesian(): static
    {
        return $this->state(fn () => ['language' => 'id']);
    }
}
