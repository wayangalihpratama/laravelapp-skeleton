import { Link } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";

export default function AttractionShow({ attraction, related }) {
    return (
        <MainLayout>
            {/* Hero */}
            <section className="relative">
                <div className="aspect-[21/9] bg-sand overflow-hidden">
                    {attraction.featured_image ? (
                        <img
                            src={`/storage/${attraction.featured_image}`}
                            alt={attraction.name}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-full bg-gradient-to-b from-stone to-stone/80 flex items-center justify-center text-8xl">
                            {attraction.category === "temple"
                                ? "🛕"
                                : attraction.category === "gallery"
                                  ? "🎨"
                                  : "📍"}
                        </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-stone/80 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
                    <div className="max-w-7xl mx-auto">
                        <span className="px-3 py-1 bg-gold/90 rounded-full text-xs font-semibold text-stone capitalize">
                            {attraction.category}
                        </span>
                        <h1 className="font-serif text-3xl lg:text-5xl font-bold text-white mt-4">
                            {attraction.name}
                        </h1>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-12 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            {attraction.short_description && (
                                <p className="text-lg text-gray-stone leading-relaxed mb-8 border-l-4 border-gold pl-4">
                                    {attraction.short_description}
                                </p>
                            )}
                            <div
                                className="prose-batuan"
                                dangerouslySetInnerHTML={{
                                    __html: attraction.description,
                                }}
                            />
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-24 space-y-6">
                                <h3 className="font-serif text-xl font-semibold text-stone">
                                    Visitor Information
                                </h3>

                                {attraction.opening_hours && (
                                    <div className="flex gap-3">
                                        <span className="text-gold text-lg">
                                            🕐
                                        </span>
                                        <div>
                                            <p className="text-sm font-medium text-stone">
                                                Opening Hours
                                            </p>
                                            <p className="text-sm text-gray-stone">
                                                {attraction.opening_hours}
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {attraction.entrance_fee && (
                                    <div className="flex gap-3">
                                        <span className="text-gold text-lg">
                                            🎟️
                                        </span>
                                        <div>
                                            <p className="text-sm font-medium text-stone">
                                                Entrance Fee
                                            </p>
                                            <p className="text-sm text-gray-stone">
                                                {attraction.entrance_fee}
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {attraction.latitude &&
                                    attraction.longitude && (
                                        <div className="flex gap-3">
                                            <span className="text-gold text-lg">
                                                📍
                                            </span>
                                            <div>
                                                <p className="text-sm font-medium text-stone">
                                                    Location
                                                </p>
                                                <a
                                                    href={`https://maps.google.com/?q=${attraction.latitude},${attraction.longitude}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-sm text-gold-deep hover:underline"
                                                >
                                                    View on Google Maps →
                                                </a>
                                            </div>
                                        </div>
                                    )}

                                {attraction.visitor_tips && (
                                    <div className="bg-gold/5 rounded-xl p-4 mt-4">
                                        <p className="text-sm font-medium text-stone mb-1">
                                            💡 Visitor Tips
                                        </p>
                                        <p className="text-sm text-gray-stone">
                                            {attraction.visitor_tips}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related */}
            {related?.length > 0 && (
                <section className="py-16 bg-sand/40">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="font-serif text-2xl font-bold text-stone mb-8">
                            Related Attractions
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {related.map((item) => (
                                <Link
                                    key={item.id}
                                    href={`/attractions/${item.slug}`}
                                    className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="aspect-[4/3] bg-sand">
                                        {item.featured_image && (
                                            <img
                                                src={`/storage/${item.featured_image}`}
                                                alt={item.name}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        )}
                                    </div>
                                    <div className="p-5">
                                        <h3 className="font-serif text-lg font-semibold text-stone group-hover:text-gold-deep transition-colors">
                                            {item.name}
                                        </h3>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <div className="py-8 text-center">
                <Link
                    href="/attractions"
                    className="text-gold-deep font-medium hover:text-gold transition-colors"
                >
                    ← Back to All Attractions
                </Link>
            </div>
        </MainLayout>
    );
}
