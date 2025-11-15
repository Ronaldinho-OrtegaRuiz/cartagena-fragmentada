"use client"

export default function HeroPostal({ sections, registerSectionRef }) {
    return (
        <section
            ref={registerSectionRef}
            className="relative overflow-hidden min-h-screen"
        >
            <div className="absolute inset-0">
                <img
                    src="https://i.pinimg.com/1200x/bd/7e/bb/bd7ebb2044ce209a0f6579d3138eb108.jpg"
                    alt="Cartagena de Indias - Vista panorámica"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                <div className="max-w-4xl mx-auto text-center">
                    <h1
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 sm:mb-6 animate-fade-in-up leading-tight"
                        style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
                    >
                        Cartagena vibra entre historia y mar
                    </h1>

                    <p
                        className="text-lg md:text-xl font-light text-white/90 max-w-2xl mx-auto mb-8 sm:mb-12 animate-fade-in-up-delayed leading-relaxed"
                        style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
                    >
                        Donde el mar abraza la historia y las palmas susurran leyendas, Cartagena vibra con alma propia. Déjate llevar por sus colores, sus calles y sus memorias.
                    </p>

                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 animate-fade-in-up-delayed">
                        {sections.map((section, index) => (
                            <button
                                key={section.id}
                                onClick={() => {
                                    const element = document.getElementById(`section-${section.id}`)
                                    if (element) {
                                        element.scrollIntoView({ behavior: "smooth" })
                                    }
                                }}
                                className="px-4 sm:px-6 py-2 sm:py-3 bg-white/20 rounded-full text-white font-medium hover:bg-white/30 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm border border-white/30 text-sm sm:text-base"
                                style={{
                                    animationDelay: `${0.8 + index * 0.1}s`,
                                    textShadow: "1px 1px 3px rgba(0,0,0,0.8)",
                                    boxShadow: "0 4px 8px rgba(0,0,0,0.3)"
                                }}
                            >
                                {section.title}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="absolute top-10 left-10 w-16 h-16 bg-white/10 rounded-full blur-xl animate-float hidden sm:block" />
            <div className="absolute bottom-10 right-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float-delayed hidden sm:block" />
            <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white/10 rounded-full blur-xl animate-float hidden sm:block" />
        </section>
    )
}

