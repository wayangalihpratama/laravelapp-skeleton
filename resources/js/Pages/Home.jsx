import { Link } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";

function HeroSection({ tagline }) {
    return (
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-stone-warm via-stone/90 to-stone/80" />
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C8A55C' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                }}
            />
            <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
                <div className="inline-block mb-6">
                    <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
                        Desa Wisata
                    </span>
                </div>
                <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight">
                    Batuan
                    <span className="block text-gold">Village</span>
                </h1>
                <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
                    {tagline}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/attractions"
                        className="px-8 py-4 bg-gold text-stone font-semibold rounded-lg hover:bg-gold-light transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                    >
                        Explore Attractions
                    </Link>
                    <Link
                        href="/about"
                        className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                    >
                        Our Story
                    </Link>
                </div>
            </div>
        </section>
    );
}

function FeaturedAttractions({ attractions }) {
    if (!attractions?.length) return null;

    const categoryIcons = {
        temple: "🛕",
        gallery: "🎨",
        the: "📍",
        performance: "💃",
        nature: "🌿",
    };

    return (
        <section className="py-20 lg:py-28 bg-cream">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
                        Discover
                    </span>
                    <h2 className="font-serif text-3xl lg:text-4xl font-bold text-stone mt-2">
                        Featured Attractions
                    </h2>
                    <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {attractions.map((attraction) => (
                        <Link
                            key={attraction.id}
                            href={`/attractions/${attraction.slug}`}
                            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                        >
                            <div className="aspect-[4/3] bg-sand relative overflow-hidden">
                                {attraction.featured_image ? (
                                    <img
                                        src={`/storage/${attraction.featured_image}`}
                                        alt={attraction.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-6xl">
                                        {categoryIcons[attraction.category] ||
                                            "📍"}
                                    </div>
                                )}
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-stone capitalize">
                                        {attraction.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="font-serif text-xl font-semibold text-stone mb-2 group-hover:text-gold-deep transition-colors">
                                    {attraction.name}
                                </h3>
                                <p className="text-gray-stone text-sm line-clamp-2">
                                    {attraction.short_description}
                                </p>
                                <div className="mt-4 flex items-center text-gold-deep text-sm font-medium">
                                    Learn more
                                    <svg
                                        className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        href="/attractions"
                        className="inline-flex items-center px-6 py-3 bg-stone text-white font-medium rounded-lg hover:bg-stone-warm transition-colors"
                    >
                        View All Attractions
                        <svg
                            className="w-4 h-4 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}

function UpcomingEvents({ events }) {
    if (!events?.length) return null;

    return (
        <section className="py-20 lg:py-28 bg-sand/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-emerald text-sm tracking-[0.2em] uppercase font-medium">
                        What's On
                    </span>
                    <h2 className="font-serif text-3xl lg:text-4xl font-bold text-stone mt-2">
                        Upcoming Events
                    </h2>
                    <div className="w-16 h-1 bg-emerald mx-auto mt-4 rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {events.map((event) => (
                        <div
                            key={event.id}
                            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
                        >
                            <div className="flex items-start gap-4">
                                <div className="bg-gold/10 rounded-xl p-3 text-center min-w-[64px]">
                                    <span className="block text-2xl font-bold text-gold-deep">
                                        {new Date(event.event_date).getDate()}
                                    </span>
                                    <span className="block text-xs font-medium text-gold-deep uppercase">
                                        {new Date(
                                            event.event_date,
                                        ).toLocaleDateString("en", {
                                            month: "short",
                                        })}
                                    </span>
                                </div>
                                <div>
                                    <h3 className="font-serif text-lg font-semibold text-stone mb-1">
                                        {event.title}
                                    </h3>
                                    {event.location && (
                                        <p className="text-sm text-gray-stone flex items-center gap-1">
                                            <svg
                                                className="w-3.5 h-3.5"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                            </svg>
                                            {event.location}
                                        </p>
                                    )}
                                    {event.is_recurring && (
                                        <span className="inline-block mt-2 px-2 py-0.5 bg-emerald/10 text-emerald text-xs font-medium rounded-full">
                                            Recurring
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        href="/events"
                        className="text-emerald font-medium hover:text-emerald/80 transition-colors"
                    >
                        View all events →
                    </Link>
                </div>
            </div>
        </section>
    );
}

function GalleryPreview({ images }) {
    if (!images?.length) return null;

    return (
        <section className="py-20 lg:py-28 bg-cream">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
                        Gallery
                    </span>
                    <h2 className="font-serif text-3xl lg:text-4xl font-bold text-stone mt-2">
                        Visual Journey
                    </h2>
                    <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {images.map((img) => (
                        <div
                            key={img.id}
                            className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
                        >
                            <div className="w-full h-full bg-sand flex items-center justify-center">
                                {img.image ? (
                                    <img
                                        src={`/storage/${img.image}`}
                                        alt={img.alt_text || img.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                ) : (
                                    <span className="text-gray-stone text-sm">
                                        {img.title}
                                    </span>
                                )}
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-stone/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <p className="text-white text-sm font-medium">
                                    {img.caption || img.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        href="/gallery"
                        className="inline-flex items-center px-6 py-3 border-2 border-stone text-stone font-medium rounded-lg hover:bg-stone hover:text-white transition-all duration-300"
                    >
                        View Full Gallery
                    </Link>
                </div>
            </div>
        </section>
    );
}

function CTASection() {
    return (
        <section className="py-20 lg:py-28 bg-stone text-white relative overflow-hidden">
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C8A55C' fill-opacity='0.6'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2l2 3-2 3zm0-3.5V0h2v17l-2-3zM0 0h18v2H0V0z'/%3E%3C/g%3E%3C/svg%3E\")",
                }}
            />
            <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-bold mb-6">
                    Plan Your Visit to{" "}
                    <span className="text-gold">Batuan Village</span>
                </h2>
                <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
                    Whether you're seeking spiritual discovery, artistic
                    inspiration, or a glimpse into authentic Balinese culture —
                    Batuan Village welcomes you warmly.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/visit"
                        className="px-8 py-4 bg-gold text-stone font-semibold rounded-lg hover:bg-gold-light transition-all duration-300 shadow-lg"
                    >
                        Plan Your Visit
                    </Link>
                    <Link
                        href="/contact"
                        className="px-8 py-4 border-2 border-gold/50 text-gold font-semibold rounded-lg hover:bg-gold/10 transition-all duration-300"
                    >
                        Get in Touch
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default function Home({
    tagline,
    featuredAttractions,
    upcomingEvents,
    galleryPreview,
}) {
    return (
        <MainLayout>
            <HeroSection tagline={tagline} />
            <FeaturedAttractions attractions={featuredAttractions} />
            <UpcomingEvents events={upcomingEvents} />
            <GalleryPreview images={galleryPreview} />
            <CTASection />
        </MainLayout>
    );
}
