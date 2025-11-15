"use client"

export default function GenericSection({ section, registerSectionRef, registerParallaxRef, variantIndex }) {
    return (
        <section
            ref={registerSectionRef}
            id={`section-${section.id}`}
            className={`relative min-h-screen flex items-center justify-center ${
                variantIndex % 2 === 0 ? "bg-gradient-to-br from-blue-600 to-purple-700" : "bg-gradient-to-br from-emerald-600 to-teal-700"
            }`}
        >
            <div
                ref={registerParallaxRef}
                className="absolute inset-0 opacity-30 parallax-bg"
                style={{
                    backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse"><path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" stroke-width="1" opacity="0.3"/></pattern></defs><rect width="100%" height="100%" fill="url(%23grid)"/></svg>')`,
                    backgroundSize: "100px 100px"
                }}
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <div className="mb-8">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-title font-bold mb-4 md:mb-6 drop-shadow-2xl animate-fade-in-up">
                        {section.title}
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl font-body mb-6 md:mb-8 text-gray-200 drop-shadow-lg max-w-2xl mx-auto animate-fade-in-up-delayed px-4">
                        {section.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-8">
                    {section.highlights.map((highlight, highlightIndex) => (
                        <div
                            key={`${highlight}-${highlightIndex}`}
                            className="glass rounded-lg p-3 md:p-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 animate-scale-in"
                            style={{ animationDelay: `${highlightIndex * 0.1}s` }}
                        >
                            <span className="text-xs sm:text-sm md:text-base font-ui font-medium">
                                {highlight}
                            </span>
                        </div>
                    ))}
                </div>

                <button className="px-6 md:px-8 py-3 md:py-4 glass border border-white/30 text-white font-ui font-semibold rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-105 animate-fade-in-up-delayed text-sm md:text-base">
                    Descubrir {section.title}
                </button>
            </div>

            {variantIndex === 0 && (
                <>
                    <div className="absolute top-5 md:top-10 right-5 md:right-10 w-16 md:w-24 h-16 md:h-24 bg-yellow-300/20 rounded-full blur-xl animate-float hidden sm:block" />
                    <div className="absolute bottom-5 md:bottom-10 left-5 md:left-10 w-20 md:w-32 h-20 md:h-32 bg-orange-400/20 rounded-full blur-xl animate-float-delayed hidden sm:block" />
                </>
            )}
            {variantIndex === 1 && (
                <>
                    <div className="absolute top-12 left-10 w-12 md:w-20 h-12 md:h-20 bg-emerald-300/20 rounded-full blur-xl animate-float hidden sm:block" />
                    <div className="absolute bottom-12 right-10 w-16 md:w-28 h-16 md:h-28 bg-teal-400/20 rounded-full blur-xl animate-float-delayed hidden sm:block" />
                </>
            )}
            {variantIndex === 2 && (
                <>
                    <div className="absolute top-16 right-8 w-14 md:w-22 h-14 md:h-22 bg-purple-300/20 rounded-full blur-xl animate-float hidden sm:block" />
                    <div className="absolute bottom-16 left-8 w-18 md:w-30 h-18 md:h-30 bg-indigo-400/20 rounded-full blur-xl animate-float-delayed hidden sm:block" />
                </>
            )}
            {variantIndex === 3 && (
                <>
                    <div className="absolute top-1/2 left-5 md:left-10 w-12 md:w-20 h-12 md:h-20 bg-blue-300/20 rounded-full blur-xl animate-float hidden sm:block" />
                    <div className="absolute bottom-1/2 right-5 md:right-10 w-16 md:w-28 h-16 md:h-28 bg-purple-400/20 rounded-full blur-xl animate-float-delayed hidden sm:block" />
                </>
            )}
            {variantIndex === 4 && (
                <>
                    <div className="absolute top-1/4 right-1/3 w-12 md:w-18 h-12 md:h-18 bg-emerald-300/20 rounded-full blur-xl animate-float hidden sm:block" />
                    <div className="absolute bottom-1/4 left-1/3 w-16 md:w-26 h-16 md:h-26 bg-teal-400/20 rounded-full blur-xl animate-float-delayed hidden sm:block" />
                </>
            )}
            {variantIndex === 5 && (
                <>
                    <div className="absolute top-1/3 left-1/4 w-14 md:w-22 h-14 md:h-22 bg-blue-300/20 rounded-full blur-xl animate-float hidden sm:block" />
                    <div className="absolute bottom-1/3 right-1/4 w-18 md:w-30 h-18 md:h-30 bg-purple-400/20 rounded-full blur-xl animate-float-delayed hidden sm:block" />
                </>
            )}
        </section>
    )
}

