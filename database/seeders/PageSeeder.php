<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\Page;
use Illuminate\Database\Seeder;

class PageSeeder extends Seeder
{
    public function run(): void
    {
        $pages = [
            [
                'title' => 'About Batuan Village',
                'slug' => 'about',
                'body' => '<h2>A Living Cultural Heritage</h2><p>Batuan Village (Desa Batuan) is one of Bali\'s oldest and most culturally significant villages, with a documented history stretching back over a thousand years to 1022 AD. Located in the Sukawati district of Gianyar regency, approximately 10 kilometers south of Ubud, Batuan has evolved from a quiet agricultural settlement into one of Bali\'s most important centers of art, dance, and spiritual tradition.</p><h2>The Batuan Painting Legacy</h2><p>The village gained international recognition in the 1930s when a distinctive painting style emerged — characterized by intricate detail, somber palettes of black and gray ink washes, and complex compositions that fill every inch of the canvas. The Batuan painting style depicts spiritual narratives, Hindu epics, scenes of daily Balinese life, and the mysterious spirit world, all rendered with extraordinary precision using brushes made from a single strand of hair.</p><h2>Sacred Temples</h2><p>At the heart of village life stand two ancient temples: Pura Puseh (Temple of Origin), dating to 1022 AD and dedicated to Lord Vishnu, and Pura Desa (Village Temple), dedicated to Lord Brahma. Together with Pura Dalem, they form the sacred Tri Kahyangan trio that anchors the spiritual life of every Balinese village.</p><h2>Gambuh Dance</h2><p>Batuan is one of the rare villages that continues to perform the Gambuh, one of the oldest forms of classical Balinese dance dating to the 15th century Majapahit era. This UNESCO-recognized intangible cultural heritage is performed with haunting gamelan music and elaborate costumes.</p>',
                'meta_title' => 'About Batuan Village — History, Culture & Art Heritage',
                'meta_description' => 'Learn about Batuan Village\'s thousand-year history, world-famous painting style, ancient temples, and UNESCO-recognized Gambuh dance tradition.',
                'language' => 'en',
                'status' => 'published',
                'sort_order' => 1,
            ],
            [
                'title' => 'Visit Information',
                'slug' => 'visit-info',
                'body' => '<h2>Getting Here</h2><p>Batuan Village is located in the Sukawati district of Gianyar regency, Bali. It is approximately 10 km south of Ubud and 7 km north of Denpasar. The village is easily accessible by car, motorcycle, or organized tour.</p><h3>From Ngurah Rai Airport</h3><p>Approximately 45 minutes by car (25 km). Head north via the Ida Bagus Mantra Bypass Road.</p><h3>From Ubud Center</h3><p>Approximately 20 minutes south on Jalan Raya Batuan.</p><h2>Best Time to Visit</h2><p>Batuan Village can be visited year-round. The dry season (April to October) offers the most pleasant weather. Early morning visits (8-10 AM) are recommended to avoid the midday heat and tour bus crowds.</p><h2>What to Wear</h2><p>Comfortable, modest clothing is recommended. When visiting temples, a sarong and sash are required — these are typically provided at temple entrances. Wearing shoes you can easily remove is helpful for temple visits.</p><h2>Local Etiquette</h2><ul><li>Always ask permission before photographing people, especially during ceremonies</li><li>Never touch offerings (canang sari) placed on the ground</li><li>Remove shoes before entering temples and sacred spaces</li><li>Dress modestly — cover shoulders and knees at temples</li><li>Women who are menstruating are traditionally asked not to enter temples</li></ul><h2>Services Available</h2><ul><li>Local guides (available at village entrance)</li><li>Parking areas near main attractions</li><li>Small restaurants and warungs throughout the village</li><li>ATMs on the main road</li></ul>',
                'meta_title' => 'Visit Batuan Village — Travel Guide & Practical Information',
                'meta_description' => 'Plan your visit to Batuan Village, Bali. Get directions, best times to visit, dress code for temples, local etiquette tips, and available services.',
                'language' => 'en',
                'status' => 'published',
                'sort_order' => 2,
            ],
        ];

        foreach ($pages as $page) {
            Page::create($page);
        }
    }
}
