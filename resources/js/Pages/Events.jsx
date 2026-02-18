import MainLayout from "@/Layouts/MainLayout";

export default function Events({ upcomingEvents, pastEvents }) {
    return (
        <MainLayout>
            <section className="bg-gradient-to-b from-stone to-stone/90 text-white py-20 lg:py-28">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <span className="text-emerald text-sm tracking-[0.3em] uppercase font-medium">
                        Calendar
                    </span>
                    <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-bold mt-3 mb-6">
                        Events & Festivals
                    </h1>
                    <p className="text-white/70 text-lg max-w-2xl mx-auto">
                        Experience the vibrant ceremonial and cultural life of
                        Batuan Village.
                    </p>
                </div>
            </section>

            {/* Upcoming */}
            <section className="py-16 lg:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    <h2 className="font-serif text-2xl font-bold text-stone mb-8 flex items-center gap-3">
                        <span className="w-3 h-3 bg-emerald rounded-full animate-pulse" />
                        Upcoming Events
                    </h2>

                    {upcomingEvents?.length > 0 ? (
                        <div className="space-y-6">
                            {upcomingEvents.map((event) => (
                                <div
                                    key={event.id}
                                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <div className="flex flex-col sm:flex-row gap-6">
                                        <div className="bg-gold/10 rounded-xl p-4 text-center min-w-[80px] self-start">
                                            <span className="block text-3xl font-bold text-gold-deep">
                                                {new Date(
                                                    event.event_date,
                                                ).getDate()}
                                            </span>
                                            <span className="block text-sm font-medium text-gold-deep uppercase">
                                                {new Date(
                                                    event.event_date,
                                                ).toLocaleDateString("en", {
                                                    month: "short",
                                                    year: "numeric",
                                                })}
                                            </span>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-serif text-xl font-semibold text-stone mb-2">
                                                {event.title}
                                            </h3>
                                            {event.location && (
                                                <p className="text-sm text-gray-stone flex items-center gap-1 mb-3">
                                                    📍 {event.location}
                                                </p>
                                            )}
                                            <div
                                                className="text-sm text-gray-stone line-clamp-3"
                                                dangerouslySetInnerHTML={{
                                                    __html: event.description,
                                                }}
                                            />
                                            <div className="flex gap-3 mt-4">
                                                {event.is_recurring && (
                                                    <span className="px-3 py-1 bg-emerald/10 text-emerald text-xs font-medium rounded-full">
                                                        🔄 Recurring
                                                    </span>
                                                )}
                                                {event.end_date && (
                                                    <span className="px-3 py-1 bg-sand text-gray-stone text-xs font-medium rounded-full">
                                                        Until{" "}
                                                        {new Date(
                                                            event.end_date,
                                                        ).toLocaleDateString(
                                                            "en",
                                                            {
                                                                month: "short",
                                                                day: "numeric",
                                                            },
                                                        )}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="bg-white rounded-2xl p-12 text-center">
                            <p className="text-gray-stone text-lg">
                                No upcoming events scheduled at the moment.
                            </p>
                            <p className="text-gray-stone text-sm mt-2">
                                Check back soon or contact us for ceremony
                                dates.
                            </p>
                        </div>
                    )}

                    {/* Past Events */}
                    {pastEvents?.length > 0 && (
                        <div className="mt-16">
                            <h2 className="font-serif text-2xl font-bold text-stone mb-8">
                                Recent Events
                            </h2>
                            <div className="space-y-4">
                                {pastEvents.map((event) => (
                                    <div
                                        key={event.id}
                                        className="bg-sand/40 rounded-xl p-5 flex flex-col sm:flex-row gap-4 items-start"
                                    >
                                        <span className="text-sm text-gray-stone min-w-[100px]">
                                            {new Date(
                                                event.event_date,
                                            ).toLocaleDateString("en", {
                                                month: "short",
                                                day: "numeric",
                                                year: "numeric",
                                            })}
                                        </span>
                                        <div>
                                            <h3 className="font-serif font-semibold text-stone">
                                                {event.title}
                                            </h3>
                                            {event.location && (
                                                <p className="text-sm text-gray-stone">
                                                    📍 {event.location}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </MainLayout>
    );
}
