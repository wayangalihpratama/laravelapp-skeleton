import { Link } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";

const categories = [
    { value: null, label: "All" },
    { value: "temple", label: "Temples" },
    { value: "gallery", label: "Galleries" },
    { value: "landmark", label: "Landmarks" },
    { value: "performance", label: "Performances" },
    { value: "nature", label: "Nature" },
];

const categoryEmoji = {
    temple: "🛕",
    gallery: "🎨",
    landmark: "📍",
    performance: "💃",
    nature: "🌿",
};

export default function AttractionsIndex({ attractions, activeCategory }) {
    return (
        <MainLayout>
            <section className="bg-gradient-to-b from-stone to-stone/90 text-white py-20 lg:py-28">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
                        Explore
                    </span>
                    <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-bold mt-3 mb-6">
                        Attractions
                    </h1>
                    <p className="text-white/70 text-lg max-w-2xl mx-auto">
                        Discover ancient temples, world-class art galleries,
                        natural wonders, and living cultural performances.
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
                                        ? `/attractions?category=${cat.value}`
                                        : "/attractions"
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

                    {/* Grid */}
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
                                            {categoryEmoji[
                                                attraction.category
                                            ] || "📍"}
                                        </div>
                                    )}
                                    <div className="absolute top-4 left-4 flex gap-2">
                                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-stone capitalize">
                                            {attraction.category}
                                        </span>
                                        {attraction.is_featured && (
                                            <span className="px-3 py-1 bg-gold/90 backdrop-blur-sm rounded-full text-xs font-semibold text-stone">
                                                Featured
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="font-serif text-xl font-semibold text-stone mb-2 group-hover:text-gold-deep transition-colors">
                                        {attraction.name}
                                    </h3>
                                    <p className="text-gray-stone text-sm line-clamp-2">
                                        {attraction.short_description}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {attractions.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-gray-stone text-lg">
                                No attractions found in this category.
                            </p>
                            <Link
                                href="/attractions"
                                className="text-gold-deep font-medium mt-2 inline-block"
                            >
                                View all attractions →
                            </Link>
                        </div>
                    )}
                </div>
            </section>
        </MainLayout>
    );
}
