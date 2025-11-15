"use client"

export default function SitesSection({ section, registerSectionRef, registerParallaxRef, handleNavigate }) {
    return (
        <section
            ref={registerSectionRef}
            id={`section-${section.id}`}
            className="relative min-h-screen bg-gradient-to-br from-slate-800 via-gray-700 to-stone-800"
        >
            <div
                ref={registerParallaxRef}
                className="absolute inset-0 opacity-20 parallax-bg"
                style={{
                    backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><pattern id="colonial" width="80" height="80" patternUnits="userSpaceOnUse"><path d="M 0 0 L 80 0 L 80 80 L 0 80 Z" fill="none" stroke="white" stroke-width="1" opacity="0.1"/><path d="M 20 20 L 60 20 L 60 60 L 20 60 Z" fill="none" stroke="white" stroke-width="1" opacity="0.05"/><circle cx="40" cy="40" r="15" fill="none" stroke="white" stroke-width="1" opacity="0.08"/></pattern></defs><rect width="100%" height="100%" fill="url(%23colonial)"/></svg>')`,
                    backgroundSize: "120px 120px"
                }}
            />

            <div className="absolute inset-0 bg-black/30" />

            <div className="relative z-10 min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div className="relative animate-fade-in-up">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://i.pinimg.com/1200x/0f/29/12/0f291208d9653b3bad8f6fc44c1f32e1.jpg"
                                    alt="Cartagena de Indias - Vista panorámica de las murallas y el mar"
                                    className="w-full h-80 sm:h-96 md:h-[500px] object-cover transition-all duration-1000 ease-in-out hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4 text-white">
                                    <p className="text-xs sm:text-sm font-ui opacity-90">
                                        Vista panorámica de Cartagena de Indias
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="text-white">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-title font-bold mb-4 sm:mb-6 drop-shadow-2xl animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                                {section.title}
                            </h2>

                            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                                <p className="text-lg sm:text-xl md:text-2xl font-body drop-shadow-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s", color: "white" }}>
                                    {section.description}
                                </p>
                                <p className="text-sm sm:text-lg md:text-xl font-body drop-shadow-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.3s", color: "white" }}>
                                    Desde las majestuosas murallas que han resistido siglos de historia hasta las plazas coloniales que susurran secretos del pasado, cada rincón de Cartagena cuenta una historia única.
                                </p>
                                <p className="text-sm sm:text-lg md:text-xl font-body drop-shadow-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.4s", color: "white" }}>
                                    Descubre la magia de la Heroica Ciudad Amurallada, donde la arquitectura colonial se funde con la brisa caribeña y cada calle empedrada te lleva a un nuevo descubrimiento.
                                </p>
                            </div>

                            <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                                {section.highlights.map((highlight, highlightIndex) => (
                                    <div
                                        key={highlight}
                                        className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 sm:p-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
                                        style={{ animationDelay: `${0.5 + highlightIndex * 0.1}s` }}
                                    >
                                        <span className="text-sm sm:text-lg md:text-xl font-ui font-medium flex items-center text-white">
                                            <span className="w-2 h-2 bg-amber-400 rounded-full mr-3 animate-pulse"></span>
                                            {highlight}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={() => handleNavigate("/sitios-turisticos")}
                                className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-ui font-semibold rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-105 animate-fade-in-up text-sm sm:text-base"
                                style={{ animationDelay: "0.8s" }}
                            >
                                Explorar Sitios Turísticos
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute top-10 right-10 w-20 h-20 bg-amber-300/20 rounded-full blur-xl animate-float hidden sm:block" />
            <div className="absolute bottom-10 left-10 w-24 h-24 bg-stone-400/20 rounded-full blur-xl animate-float-delayed hidden sm:block" />
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gray-400/20 rounded-full blur-xl animate-float hidden sm:block" />
        </section>
    )
}

