import { Link } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";

const categories = [
    { value: null, label: "All" },
    { value: "temple", label: "Temple" },
    { value: "art", label: "Art" },
    { value: "culture", label: "Culture" },
    { value: "nature", label: "Nature" },
    { value: "village_life", label: "Village Life" },
    { value: "event", label: "Event" },
];

export default function Gallery({ images, activeCategory }) {
    return (
        <MainLayout>
            <section className="bg-gradient-to-b from-stone to-stone/90 text-white py-20 lg:py-28">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
                        Visual Journey
                    </span>
                    <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-bold mt-3 mb-6">
                        Photo Gallery
                    </h1>
                    <p className="text-white/70 text-lg max-w-2xl mx-auto">
                        A visual journey through the temples, art, culture, and
                        everyday beauty of Batuan Village.
                    </p>
                </div>
            </section>

            <section className="py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Category filters */}
                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        {categories.map((cat) => (
                            <Link
                                key={cat.label}
                                href={
                                    cat.value
                                        ? `/gallery?category=${cat.value}`
                                        : "/gallery"
                                }
                                preserveState
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                    activeCategory === cat.value
                                        ? "bg-gold text-stone shadow-md"
                                        : "bg-sand text-gray-stone hover:bg-gold/20"
                                }`}
                            >
                                {cat.label}
                            </Link>
                        ))}
                    </div>

                    {/* Masonry Grid */}
                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                        {images.map((img) => (
                            <div
                                key={img.id}
                                className="break-inside-avoid group relative rounded-xl overflow-hidden bg-sand"
                            >
                                {img.image ? (
                                    <img
                                        src={`/storage/${img.image}`}
                                        alt={img.alt_text || img.title}
                                        className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
                                    />
                                ) : (
                                    <div className="aspect-square flex items-center justify-center">
                                        <span className="text-gray-stone">
                                            {img.title}
                                        </span>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-stone/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <div>
                                        <p className="text-white font-medium text-sm">
                                            {img.title}
                                        </p>
                                        {img.caption && (
                                            <p className="text-white/80 text-xs mt-1">
                                                {img.caption}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {images.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-gray-stone text-lg">
                                No photos found in this category.
                            </p>
                            <Link
                                href="/gallery"
                                className="text-gold-deep font-medium mt-2 inline-block"
                            >
                                View all photos →
                            </Link>
                        </div>
                    )}
                </div>
            </section>
        </MainLayout>
    );
}
