import MainLayout from "@/Layouts/MainLayout";

export default function About({ page }) {
    return (
        <MainLayout>
            {/* Hero */}
            <section className="bg-gradient-to-b from-stone to-stone/90 text-white py-20 lg:py-28">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
                        Our Story
                    </span>
                    <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-bold mt-3 mb-6">
                        {page.title}
                    </h1>
                    <div className="w-16 h-1 bg-gold mx-auto rounded-full" />
                </div>
            </section>

            {/* Content */}
            <section className="py-16 lg:py-24">
                <div className="max-w-3xl mx-auto px-4 sm:px-6">
                    <div
                        className="prose-batuan"
                        dangerouslySetInnerHTML={{ __html: page.body }}
                    />
                </div>
            </section>
        </MainLayout>
    );
}
