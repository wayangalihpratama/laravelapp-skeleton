import { Link } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";

export default function ArtistShow({ artist }) {
    return (
        <MainLayout>
            <section className="py-20 lg:py-28">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    <Link
                        href="/art-culture"
                        className="text-gold-deep text-sm font-medium hover:text-gold transition-colors"
                    >
                        ← Back to Art & Culture
                    </Link>

                    <div className="mt-8 flex flex-col md:flex-row gap-8 items-start">
                        {/* Photo */}
                        <div className="w-48 h-48 rounded-2xl overflow-hidden bg-sand shrink-0">
                            {artist.profile_photo ? (
                                <img
                                    src={`/storage/${artist.profile_photo}`}
                                    alt={artist.name}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                    <span className="text-5xl font-serif font-bold text-gold-deep">
                                        {artist.name.charAt(0).toUpperCase()}
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Info */}
                        <div>
                            <h1 className="font-serif text-3xl lg:text-4xl font-bold text-stone">
                                {artist.name}
                            </h1>
                            {artist.specialization && (
                                <p className="text-gold-deep font-medium mt-2">
                                    {artist.specialization}
                                </p>
                            )}
                            {artist.gallery_name && (
                                <p className="text-gray-stone mt-1">
                                    {artist.gallery_name}
                                </p>
                            )}
                            {artist.is_featured && (
                                <span className="inline-block mt-3 px-3 py-1 bg-gold/10 text-gold-deep text-xs font-medium rounded-full">
                                    Featured Artist
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="mt-12">
                        <div
                            className="prose-batuan"
                            dangerouslySetInnerHTML={{ __html: artist.bio }}
                        />
                    </div>

                    {artist.contact_info && (
                        <div className="mt-12 bg-white rounded-2xl p-6 shadow-sm">
                            <h3 className="font-serif text-lg font-semibold text-stone mb-4">
                                Contact
                            </h3>
                            <div className="space-y-2">
                                {artist.contact_info.phone && (
                                    <p className="text-sm text-gray-stone">
                                        📞 {artist.contact_info.phone}
                                    </p>
                                )}
                                {artist.contact_info.instagram && (
                                    <p className="text-sm text-gray-stone">
                                        📷 @{artist.contact_info.instagram}
                                    </p>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </MainLayout>
    );
}
