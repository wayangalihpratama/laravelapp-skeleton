<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\Event;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/** @extends Factory<Event> */
class EventFactory extends Factory
{
    protected $model = Event::class;

    public function definition(): array
    {
        $title = fake()->sentence(4);
        $eventDate = fake()->dateTimeBetween('now', '+1 year');

        return [
            'title' => $title,
            'slug' => Str::slug($title),
            'description' => fake()->paragraphs(3, true),
            'event_date' => $eventDate,
            'end_date' => fake()->optional(0.4)->dateTimeBetween($eventDate, '+1 year'),
            'location' => fake()->randomElement(['Pura Puseh Batuan', 'Pura Desa Batuan', 'Batuan Village Center', 'Batuan Main Road']),
            'is_recurring' => fake()->boolean(20),
            'recurrence_note' => null,
            'status' => 'published',
        ];
    }

    public function recurring(): static
    {
        return $this->state(fn () => [
            'is_recurring' => true,
            'recurrence_note' => 'Every full moon (Purnama)',
        ]);
    }
}
