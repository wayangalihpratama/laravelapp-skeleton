import { useForm, usePage } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";

export default function Contact({ contactInfo, socialLinks }) {
    const { flash } = usePage().props;
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        subject: "",
        message: "",
        preferred_date: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        post("/contact", {
            onSuccess: () => reset(),
        });
    }

    return (
        <MainLayout>
            <section className="bg-gradient-to-b from-stone to-stone/90 text-white py-20 lg:py-28">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
                        Get in Touch
                    </span>
                    <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-bold mt-3 mb-6">
                        Contact Us
                    </h1>
                    <p className="text-white/70 text-lg max-w-2xl mx-auto">
                        Have questions about visiting Batuan Village? We'd love
                        to hear from you.
                    </p>
                </div>
            </section>

            <section className="py-16 lg:py-24">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                        {/* Contact Form */}
                        <div className="lg:col-span-3">
                            {flash?.success && (
                                <div className="mb-8 bg-emerald/10 border border-emerald/20 text-emerald rounded-xl p-4">
                                    <p className="font-medium">
                                        {flash.success}
                                    </p>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-stone mb-2">
                                            Name *
                                        </label>
                                        <input
                                            type="text"
                                            value={data.name}
                                            onChange={(e) =>
                                                setData("name", e.target.value)
                                            }
                                            className="w-full px-4 py-3 rounded-lg border border-gray-light bg-white text-stone focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                                            placeholder="Your name"
                                        />
                                        {errors.name && (
                                            <p className="text-terracotta text-sm mt-1">
                                                {errors.name}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-stone mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            value={data.email}
                                            onChange={(e) =>
                                                setData("email", e.target.value)
                                            }
                                            className="w-full px-4 py-3 rounded-lg border border-gray-light bg-white text-stone focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                                            placeholder="your@email.com"
                                        />
                                        {errors.email && (
                                            <p className="text-terracotta text-sm mt-1">
                                                {errors.email}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-stone mb-2">
                                        Subject *
                                    </label>
                                    <input
                                        type="text"
                                        value={data.subject}
                                        onChange={(e) =>
                                            setData("subject", e.target.value)
                                        }
                                        className="w-full px-4 py-3 rounded-lg border border-gray-light bg-white text-stone focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                                        placeholder="What is this about?"
                                    />
                                    {errors.subject && (
                                        <p className="text-terracotta text-sm mt-1">
                                            {errors.subject}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-stone mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        value={data.message}
                                        onChange={(e) =>
                                            setData("message", e.target.value)
                                        }
                                        rows={5}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-light bg-white text-stone focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors resize-y"
                                        placeholder="Tell us about your inquiry..."
                                    />
                                    {errors.message && (
                                        <p className="text-terracotta text-sm mt-1">
                                            {errors.message}
                                        </p>
                                    )}
                                </div>

                                <div className="max-w-xs">
                                    <label className="block text-sm font-medium text-stone mb-2">
                                        Preferred Visit Date
                                    </label>
                                    <input
                                        type="date"
                                        value={data.preferred_date}
                                        onChange={(e) =>
                                            setData(
                                                "preferred_date",
                                                e.target.value,
                                            )
                                        }
                                        className="w-full px-4 py-3 rounded-lg border border-gray-light bg-white text-stone focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                                    />
                                    {errors.preferred_date && (
                                        <p className="text-terracotta text-sm mt-1">
                                            {errors.preferred_date}
                                        </p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="px-8 py-4 bg-gold text-stone font-semibold rounded-lg hover:bg-gold-light transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {processing ? "Sending..." : "Send Inquiry"}
                                </button>
                            </form>
                        </div>

                        {/* Contact Information Sidebar */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-24 space-y-8">
                                <h3 className="font-serif text-xl font-semibold text-stone">
                                    Contact Information
                                </h3>

                                {contactInfo?.site_address && (
                                    <div className="flex gap-3">
                                        <span className="text-lg">📍</span>
                                        <div>
                                            <p className="text-sm font-medium text-stone">
                                                Address
                                            </p>
                                            <p className="text-sm text-gray-stone">
                                                {contactInfo.site_address}
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {contactInfo?.site_email && (
                                    <div className="flex gap-3">
                                        <span className="text-lg">📧</span>
                                        <div>
                                            <p className="text-sm font-medium text-stone">
                                                Email
                                            </p>
                                            <a
                                                href={`mailto:${contactInfo.site_email}`}
                                                className="text-sm text-gold-deep hover:underline"
                                            >
                                                {contactInfo.site_email}
                                            </a>
                                        </div>
                                    </div>
                                )}

                                {contactInfo?.site_phone && (
                                    <div className="flex gap-3">
                                        <span className="text-lg">📞</span>
                                        <div>
                                            <p className="text-sm font-medium text-stone">
                                                Phone
                                            </p>
                                            <p className="text-sm text-gray-stone">
                                                {contactInfo.site_phone}
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {(socialLinks?.instagram ||
                                    socialLinks?.facebook) && (
                                    <div>
                                        <p className="text-sm font-medium text-stone mb-3">
                                            Follow Us
                                        </p>
                                        <div className="flex gap-3">
                                            {socialLinks.instagram && (
                                                <a
                                                    href={socialLinks.instagram}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="px-4 py-2 bg-sand rounded-lg text-sm text-gray-stone hover:text-stone hover:bg-gold/10 transition-colors"
                                                >
                                                    Instagram
                                                </a>
                                            )}
                                            {socialLinks.facebook && (
                                                <a
                                                    href={socialLinks.facebook}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="px-4 py-2 bg-sand rounded-lg text-sm text-gray-stone hover:text-stone hover:bg-gold/10 transition-colors"
                                                >
                                                    Facebook
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {contactInfo?.google_maps_url && (
                                    <a
                                        href={contactInfo.google_maps_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full text-center px-4 py-3 bg-stone text-white rounded-lg font-medium hover:bg-stone-warm transition-colors text-sm"
                                    >
                                        View on Google Maps →
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
