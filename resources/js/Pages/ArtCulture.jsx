import { Link } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";

export default function ArtCulture({ artists }) {
    return (
        <MainLayout>
            {/* Hero */}
            <section className="bg-gradient-to-b from-stone to-stone/90 text-white py-20 lg:py-28">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
                        Heritage
                    </span>
                    <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-bold mt-3 mb-6">
                        Art & Culture
                    </h1>
                    <p className="text-white/70 text-lg max-w-2xl mx-auto">
                        Batuan Village is the birthplace of one of Bali's most
                        distinctive art forms — the intricate, sombre-toned
                        Batuan painting style.
                    </p>
                </div>
            </section>

            {/* Art History */}
            <section className="py-16 lg:py-24 bg-sand/30">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    <h2 className="font-serif text-3xl font-bold text-stone mb-8 text-center">
                        The Batuan Painting Tradition
                    </h2>
                    <div className="prose-batuan text-center">
                        <p>
                            Since the 1930s, Batuan painters have created
                            intricate works characterized by dense compositions,
                            dark ink-wash techniques, and narratives drawn from
                            Hindu mythology, Balinese folklore, and daily
                            village life. Every inch of canvas tells a story.
                        </p>
                    </div>
                </div>
            </section>

            {/* Artists */}
            <section className="py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
                            Artisans
                        </span>
                        <h2 className="font-serif text-3xl font-bold text-stone mt-2">
                            Meet Our Artists
                        </h2>
                        <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {artists.map((artist) => (
                            <Link
                                key={artist.id}
                                href={`/artists/${artist.slug}`}
                                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 text-center"
                            >
                                <div className="aspect-square bg-sand overflow-hidden">
                                    {artist.profile_photo ? (
                                        <img
                                            src={`/storage/${artist.profile_photo}`}
                                            alt={artist.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <div className="w-24 h-24 rounded-full bg-gold/20 flex items-center justify-center">
                                                <span className="text-3xl font-serif font-bold text-gold-deep">
                                                    {artist.name
                                                        .charAt(0)
                                                        .toUpperCase()}
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="p-6">
                                    <h3 className="font-serif text-lg font-semibold text-stone group-hover:text-gold-deep transition-colors">
                                        {artist.name}
                                    </h3>
                                    {artist.specialization && (
                                        <p className="text-sm text-gold-deep mt-1">
                                            {artist.specialization}
                                        </p>
                                    )}
                                    {artist.gallery_name && (
                                        <p className="text-sm text-gray-stone mt-1">
                                            {artist.gallery_name}
                                        </p>
                                    )}
                                    {artist.is_featured && (
                                        <span className="inline-block mt-3 px-3 py-1 bg-gold/10 text-gold-deep text-xs font-medium rounded-full">
                                            Featured Artist
                                        </span>
                                    )}
                                </div>
                            </Link>
                        ))}
                    </div>

                    {artists.length === 0 && (
                        <div className="text-center py-16">
                            <p className="text-gray-stone text-lg">
                                Artist profiles coming soon.
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </MainLayout>
    );
}
