<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\Inquiry;
use Illuminate\Database\Eloquent\Factories\Factory;

/** @extends Factory<Inquiry> */
class InquiryFactory extends Factory
{
    protected $model = Inquiry::class;

    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'email' => fake()->safeEmail(),
            'subject' => fake()->randomElement([
                'Visit Inquiry',
                'Group Tour Request',
                'Art Class Booking',
                'Cultural Performance',
                'General Information',
            ]),
            'message' => fake()->paragraph(3),
            'preferred_date' => fake()->optional(0.6)->dateTimeBetween('now', '+3 months'),
            'status' => 'new',
        ];
    }

    public function read(): static
    {
        return $this->state(fn () => ['status' => 'read']);
    }

    public function responded(): static
    {
        return $this->state(fn () => [
            'status' => 'responded',
            'responded_at' => now(),
        ]);
    }
}
