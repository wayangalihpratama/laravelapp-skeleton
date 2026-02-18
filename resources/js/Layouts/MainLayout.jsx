import { Head, Link, usePage } from "@inertiajs/react";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/attractions", label: "Attractions" },
    { href: "/art-culture", label: "Art & Culture" },
    { href: "/visit", label: "Visit" },
    { href: "/gallery", label: "Gallery" },
    { href: "/events", label: "Events" },
    { href: "/contact", label: "Contact" },
];

function Navbar() {
    const { url } = usePage();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-gray-light/50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 lg:h-20">
                    <Link href="/" className="flex items-center gap-2">
                        <span className="text-xl lg:text-2xl font-serif font-bold text-stone">
                            Batuan Village
                        </span>
                    </Link>

                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                                    url === link.href ||
                                    (link.href !== "/" &&
                                        url.startsWith(link.href))
                                        ? "text-gold-deep bg-gold/10"
                                        : "text-gray-stone hover:text-stone hover:bg-sand/50"
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <MobileMenuButton />
                </div>
            </div>
        </nav>
    );
}

function MobileMenuButton() {
    return (
        <details className="lg:hidden group">
            <summary className="list-none cursor-pointer p-2 rounded-lg hover:bg-sand/50 transition-colors">
                <svg
                    className="w-6 h-6 text-stone group-open:hidden"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
                <svg
                    className="w-6 h-6 text-stone hidden group-open:block"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </summary>
            <div className="absolute top-16 left-0 right-0 bg-cream border-b border-gray-light shadow-lg">
                <div className="flex flex-col p-4 gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="px-4 py-3 rounded-lg text-gray-stone hover:text-stone hover:bg-sand/50 transition-colors font-medium"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </details>
    );
}

function Footer() {
    return (
        <footer className="bg-stone text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    <div>
                        <h3 className="font-serif text-xl font-bold text-gold mb-4">
                            Batuan Village
                        </h3>
                        <p className="text-white/70 text-sm leading-relaxed">
                            A thousand-year-old cultural gem in Bali, famous for
                            its traditional painting style, ancient temples, and
                            vibrant artisan community.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-gold-light mb-4">
                            Explore
                        </h4>
                        <div className="flex flex-col gap-2">
                            <Link
                                href="/attractions"
                                className="text-white/70 hover:text-gold transition-colors text-sm"
                            >
                                Attractions
                            </Link>
                            <Link
                                href="/art-culture"
                                className="text-white/70 hover:text-gold transition-colors text-sm"
                            >
                                Art & Culture
                            </Link>
                            <Link
                                href="/gallery"
                                className="text-white/70 hover:text-gold transition-colors text-sm"
                            >
                                Gallery
                            </Link>
                            <Link
                                href="/events"
                                className="text-white/70 hover:text-gold transition-colors text-sm"
                            >
                                Events
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold text-gold-light mb-4">
                            Visit
                        </h4>
                        <div className="flex flex-col gap-2">
                            <Link
                                href="/visit"
                                className="text-white/70 hover:text-gold transition-colors text-sm"
                            >
                                Plan Your Visit
                            </Link>
                            <Link
                                href="/contact"
                                className="text-white/70 hover:text-gold transition-colors text-sm"
                            >
                                Contact Us
                            </Link>
                            <Link
                                href="/about"
                                className="text-white/70 hover:text-gold transition-colors text-sm"
                            >
                                About
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold text-gold-light mb-4">
                            Contact
                        </h4>
                        <div className="flex flex-col gap-2 text-white/70 text-sm">
                            <p>Desa Batuan, Sukawati</p>
                            <p>Gianyar, Bali, Indonesia</p>
                            <a
                                href="mailto:info@batuanvillage.com"
                                className="hover:text-gold transition-colors"
                            >
                                info@batuanvillage.com
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/50 text-sm">
                    <p>
                        &copy; {new Date().getFullYear()} Batuan Village. All
                        rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

function SeoHead({ seo, jsonLd }) {
    return (
        <Head>
            <title>{seo?.title}</title>
            <meta
                name="description"
                content={seo?.description}
                head-key="description"
            />
            <meta
                property="og:title"
                content={seo?.title}
                head-key="og:title"
            />
            <meta
                property="og:description"
                content={seo?.description}
                head-key="og:description"
            />
            {seo?.image && (
                <meta
                    property="og:image"
                    content={seo.image}
                    head-key="og:image"
                />
            )}
            {seo?.url && (
                <meta property="og:url" content={seo.url} head-key="og:url" />
            )}
            <meta property="og:type" content="website" head-key="og:type" />
            <meta
                name="twitter:card"
                content="summary_large_image"
                head-key="twitter:card"
            />
            {jsonLd && (
                <script type="application/ld+json">
                    {JSON.stringify(jsonLd)}
                </script>
            )}
        </Head>
    );
}

export default function MainLayout({ children }) {
    const { seo, jsonLd } = usePage().props;

    return (
        <div className="min-h-screen flex flex-col bg-cream">
            <SeoHead seo={seo} jsonLd={jsonLd} />
            <Navbar />
            <main className="flex-1 pt-16 lg:pt-20">{children}</main>
            <Footer />
        </div>
    );
}
