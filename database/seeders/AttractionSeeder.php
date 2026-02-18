<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\Attraction;
use Illuminate\Database\Seeder;

class AttractionSeeder extends Seeder
{
    public function run(): void
    {
        $attractions = [
            [
                'name' => 'Pura Puseh Batuan',
                'slug' => 'pura-puseh-batuan',
                'description' => '<p>Pura Puseh Batuan is one of the most historically significant temples in Bali, dating back to 1022 AD. This ancient temple is part of the Tri Kahyangan concept and is dedicated to the worship of God Vishnu (the Preserver). The temple complex showcases exquisite examples of classical Balinese stone carving and architecture.</p><p>The intricate carvings depict scenes from Hindu mythology, including the Ramayana and Mahabharata epics. Visitors will notice the distinctive dark volcanic stone used throughout the temple, adorned with elaborate bas-reliefs of demons, gods, and celestial beings.</p><p>A sarong and sash are provided at the entrance for visitors. The temple is an active place of worship, so visitors should be respectful during ceremonies.</p>',
                'short_description' => 'A thousand-year-old temple dating back to 1022 AD, featuring masterful stone carvings and classical Balinese architecture.',
                'category' => 'temple',
                'latitude' => -8.5344,
                'longitude' => 115.2891,
                'opening_hours' => '08:00 - 18:00 daily',
                'entrance_fee' => 'IDR 20,000 (includes sarong)',
                'visitor_tips' => 'Wear respectful clothing. Sarongs are provided at the entrance. Photography is allowed in most areas. Best visited in the early morning to avoid crowds.',
                'meta_title' => 'Pura Puseh Batuan — Ancient 11th Century Temple in Bali',
                'meta_description' => 'Visit Pura Puseh Batuan, a stunning temple built in 1022 AD with intricate stone carvings depicting Hindu epics. One of Bali\'s most culturally significant temple complexes.',
                'is_featured' => true,
                'status' => 'published',
            ],
            [
                'name' => 'Pura Desa Batuan',
                'slug' => 'pura-desa-batuan',
                'description' => '<p>Pura Desa Batuan is another ancient temple in the village, forming part of the sacred Tri Kahyangan trio alongside Pura Puseh. This temple is dedicated to Lord Brahma (the Creator) and serves as the village\'s main community temple where important ceremonies and festivals are held.</p><p>The temple features a unique blend of ancient and restored architecture, with intricately carved split gates (candi bentar) and elaborate shrine structures. The annual temple anniversary ceremony (odalan) is a spectacular event featuring traditional music, dance performances, and elaborate offerings.</p>',
                'short_description' => 'The village\'s main community temple dedicated to Lord Brahma, hosting spectacular annual ceremony festivals.',
                'category' => 'temple',
                'latitude' => -8.5338,
                'longitude' => 115.2885,
                'opening_hours' => '09:00 - 17:00 daily',
                'entrance_fee' => 'Donation welcome',
                'visitor_tips' => 'Check with local guides for ceremony dates — the odalan festival is a must-see experience. Respectful attire is required.',
                'meta_title' => 'Pura Desa Batuan — Sacred Community Temple',
                'meta_description' => 'Explore Pura Desa Batuan, the sacred community temple dedicated to Lord Brahma. Experience spectacular temple ceremonies and traditional Balinese architecture.',
                'is_featured' => true,
                'status' => 'published',
            ],
            [
                'name' => 'Batuan Painting Galleries',
                'slug' => 'batuan-painting-galleries',
                'description' => '<p>Batuan Village is the birthplace of the renowned Batuan painting style, which emerged in the 1930s and is recognized worldwide for its distinctive dark, dense compositions. The galleries along the main road and throughout the village showcase the work of master painters and their families, many of whom have been practicing this art for generations.</p><p>The Batuan style is characterized by intricate detail, somber color palettes dominated by blacks and grays, and complex compositions depicting spiritual narratives, Hindu epics, scenes of daily Balinese life, and the spirit world. Every inch of the canvas is typically covered with detailed imagery, using a traditional ink-wash technique with fine brushes made from a single strand of hair.</p><p>Visitors can watch artists at work, learn about the painting process, and purchase authentic Batuan paintings directly from the artists\' studios.</p>',
                'short_description' => 'Home of the world-famous Batuan painting style — visit studios where master artists create intricate, sombre-toned masterpieces.',
                'category' => 'gallery',
                'latitude' => -8.5351,
                'longitude' => 115.2906,
                'opening_hours' => '09:00 - 18:00 daily',
                'entrance_fee' => 'Free entry',
                'visitor_tips' => 'Ask artists about the symbolism in their paintings. Prices are negotiable but fair — these are handmade artworks taking weeks to complete.',
                'meta_title' => 'Batuan Painting Galleries — World-Famous Art Style',
                'meta_description' => 'Discover the world-famous Batuan painting style in its village of origin. Visit artist studios, watch masters at work, and purchase authentic Balinese art.',
                'is_featured' => true,
                'status' => 'published',
            ],
            [
                'name' => 'Gambuh Dance Performance',
                'slug' => 'gambuh-dance-performance',
                'description' => '<p>The Gambuh dance is one of the oldest and most refined forms of classical Balinese dance, believed to date back to the 15th century Majapahit era. Batuan Village is one of the few remaining places where this ancient art form is actively preserved and performed.</p><p>Characterized by its slow, graceful movements and haunting gamelan music, the Gambuh dance draws its stories from the Panji cycle — a collection of romantic tales from the Javanese Majapahit court. Performers wear elaborate costumes and makeup, creating a mesmerizing visual spectacle.</p><p>The Batuan community considers Gambuh not merely entertainment, but a sacred duty to preserve their intangible cultural heritage. UNESCO has recognized Gambuh as a Masterpiece of the Oral and Intangible Heritage of Humanity.</p>',
                'short_description' => 'One of Bali\'s oldest classical dance forms dating to the 15th century, recognized by UNESCO as intangible cultural heritage.',
                'category' => 'performance',
                'latitude' => -8.5340,
                'longitude' => 115.2893,
                'opening_hours' => 'Performance schedule varies — check with village office',
                'entrance_fee' => 'IDR 50,000',
                'visitor_tips' => 'Performances are often held during temple ceremonies. Contact the village cultural office to arrange a special performance for groups.',
                'meta_title' => 'Gambuh Dance — UNESCO Recognized Classical Dance',
                'meta_description' => 'Experience Gambuh, a rare 15th-century Balinese dance form recognized by UNESCO. Performed in Batuan Village with haunting gamelan music and elaborate costumes.',
                'is_featured' => true,
                'status' => 'published',
            ],
            [
                'name' => 'Teak Wood Carving Workshops',
                'slug' => 'teak-wood-carving-workshops',
                'description' => '<p>Batuan Village artisans are also renowned for their exceptional wood carving skills. Using locally sourced teak and other hardwoods, master carvers create everything from traditional masks and religious figures to contemporary art pieces.</p><p>Several workshops along the village roads welcome visitors to observe the carving process from raw wood to finished masterpiece. Artisans are happy to explain their techniques and the cultural significance of different motifs — from Barong masks used in sacred dances to Garuda eagles symbolizing divine protection.</p>',
                'short_description' => 'Watch master artisans transform teak wood into intricate traditional masks, religious figures, and contemporary art pieces.',
                'category' => 'gallery',
                'latitude' => -8.5360,
                'longitude' => 115.2880,
                'opening_hours' => '08:00 - 17:00 daily',
                'entrance_fee' => 'Free entry',
                'visitor_tips' => 'Wood carving workshops are great for hands-on experiences. Ask about custom commissions if you have specific designs in mind.',
                'meta_title' => 'Teak Wood Carving — Traditional Balinese Craftsmanship',
                'meta_description' => 'Visit wood carving workshops in Batuan Village. Watch master carvers create traditional Barong masks, Garuda eagles, and contemporary art from teak wood.',
                'is_featured' => false,
                'status' => 'published',
            ],
            [
                'name' => 'Tegenungan Waterfall',
                'slug' => 'tegenungan-waterfall',
                'description' => '<p>Located just a short drive from Batuan Village, Tegenungan Waterfall is one of the most accessible and stunning waterfalls in the Gianyar area. The waterfall is set in a lush green valley and offers a refreshing natural swimming pool at its base.</p><p>The walk down to the waterfall is lined with steps and local vendors. The area surrounding the waterfall has been developed with viewing platforms and photo spots while maintaining its natural beauty.</p>',
                'short_description' => 'A stunning waterfall just minutes from Batuan Village, perfect for nature lovers seeking a refreshing dip in a tropical paradise.',
                'category' => 'nature',
                'latitude' => -8.5753,
                'longitude' => 115.2892,
                'opening_hours' => '07:00 - 18:00 daily',
                'entrance_fee' => 'IDR 20,000',
                'visitor_tips' => 'Visit early morning for fewer crowds. Bring waterproof bags for electronics. Wear comfortable shoes for the stairs.',
                'meta_title' => 'Tegenungan Waterfall — Near Batuan Village',
                'meta_description' => 'Visit Tegenungan Waterfall near Batuan Village. A stunning natural waterfall with swimming pool, lush green surroundings, and easy access from the village.',
                'is_featured' => false,
                'status' => 'published',
            ],
        ];

        foreach ($attractions as $attraction) {
            Attraction::create($attraction);
        }
    }
}
