"use client"

export default function PlayasSection({ section, registerSectionRef, handleNavigate }) {
    const beaches = [
        { name: "Bocagrande", category: "Urbana", image: "https://blog.redbus.co/wp-content/uploads/2020/06/BOCAGRANDE-5.jpg", position: "self-start", height: "h-44", delay: "0s" },
        { name: "Marbella", category: "Local", image: "https://www.isouthamerica.com/wp-content/uploads/2021/11/marbella-beach-cartagena.jpg", position: "self-end", height: "h-56", delay: "0.5s" },
        { name: "La Boquilla", category: "Tradicional", image: "https://i.pinimg.com/originals/c4/47/92/c44792992dd71bb3924fce6eafb5b99c.jpg", position: "self-center", height: "h-52", delay: "1s" },
        { name: "Islas del Rosario", category: "Cristalina", image: "https://www.cartagenaexplorer.com/wp-content/uploads/2020/07/Depositphotos_156273740_xl-2015-scaled.jpg", position: "self-end", height: "h-48", delay: "1.5s" },
        { name: "Playa Blanca", category: "Paradisíaca", image: "https://i.pinimg.com/736x/1b/a1/66/1ba166f7b8e21c1e28eeb4a4760f8baa.jpg", position: "self-start", height: "h-60", delay: "2s" },
        { name: "Cholón", category: "Fiesta", image: "https://cdn.yate.co/img/blog/2024/17/cholon-75t.jpg", position: "self-center", height: "h-50", delay: "2.5s" }
    ]

    return (
        <section
            ref={registerSectionRef}
            id={`section-${section.id}`}
            className="relative min-h-screen overflow-hidden"
            style={{
                background: "linear-gradient(135deg, #A7E3E2 0%, #8DD4D0 25%, #7FD1C3 50%, #6BC5D6 75%, #5BC0DE 100%)",
                animation: "waveBackground 18s ease-in-out infinite"
            }}
        >
            <div className="absolute inset-0 overflow-hidden">
                <div className="wave-layer wave-1"></div>
                <div className="wave-layer wave-2"></div>
                <div className="wave-layer wave-3"></div>
                <div className="wave-layer wave-4"></div>
            </div>

            <div className="relative flex flex-col lg:block min-h-screen">
                <div
                    className="relative lg:absolute top-0 left-0 w-full z-20"
                    style={{
                        minHeight: "40vh",
                        background: "linear-gradient(to bottom, #F5E6D3 0%, #E8D5B7 30%, #D4C4A8 60%, transparent 100%)"
                    }}
                >
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-16 left-12 w-1.5 h-1.5 bg-white/50 rounded-full animate-float" style={{ animationDelay: "0s" }}></div>
                        <div className="absolute top-24 right-16 w-1 h-1 bg-white/40 rounded-full animate-float-delayed" style={{ animationDelay: "1.5s" }}></div>
                        <div className="absolute bottom-24 left-1/3 w-1.5 h-1.5 bg-white/45 rounded-full animate-float" style={{ animationDelay: "3s" }}></div>
                        <div className="absolute bottom-16 right-1/4 w-1 h-1 bg-white/35 rounded-full animate-float-delayed" style={{ animationDelay: "4.5s" }}></div>
                    </div>

                    <div className="absolute top-20 left-16 w-16 h-16 opacity-20 animate-breeze hidden sm:block">
                        <svg viewBox="0 0 100 100" className="w-full h-full text-amber-600">
                            <path d="M10 40 Q25 25 40 40 T70 40" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.6" />
                            <path d="M10 50 Q25 35 40 50 T70 50" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.4" />
                        </svg>
                    </div>

                    <div className="absolute top-32 right-20 w-12 h-12 opacity-15 animate-breeze-delayed hidden sm:block">
                        <svg viewBox="0 0 100 100" className="w-full h-full text-amber-500">
                            <path d="M10 35 Q20 20 35 35 T60 35" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
                            <path d="M10 45 Q20 30 35 45 T60 45" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.3" />
                        </svg>
                    </div>

                    <div className="relative z-30 flex items-start justify-start px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8 sm:pb-12 lg:pb-0" style={{ minHeight: "40vh" }}>
                        <div className="text-left max-w-2xl">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-title font-bold mb-4 sm:mb-6 text-amber-900 drop-shadow-lg animate-fade-in-up">
                                {section.title}
                            </h2>
                            <div className="space-y-3 sm:space-y-4 animate-fade-in-up-delayed">
                                <p className="text-base sm:text-lg md:text-xl font-body text-amber-800 drop-shadow-md leading-relaxed animate-text-breeze">
                                    Aquí el mar no solo se ve, se siente.
                                </p>
                                <p className="text-sm sm:text-base md:text-lg font-body text-amber-800 drop-shadow-sm leading-relaxed animate-text-breeze-delayed">
                                    Descubre las playas que hacen de Cartagena un suspiro del Caribe.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative lg:absolute z-20 w-full lg:top-[40vh] lg:h-[60vh] flex flex-col lg:justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 px-4 sm:px-6 md:px-8 py-8 sm:py-12 lg:py-8 lg:items-start lg:h-full">
                        {beaches.map((beach) => {
                            const positionClass = beach.position === "self-start" ? "lg:self-start" : beach.position === "self-end" ? "lg:self-end" : "lg:self-center"
                            const heightClass = `h-48 sm:h-52 lg:${beach.height}`

                            return (
                                <div
                                    key={beach.name}
                                    className={`${heightClass} ${positionClass} beach-card-floating rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 cursor-pointer border border-white/30 animate-fade-in-up`}
                                    onClick={() => handleNavigate("/playas")}
                                    style={{
                                        animationDelay: beach.delay,
                                        filter: "drop-shadow(0 12px 24px rgba(0,0,0,0.15))",
                                        background: "rgba(255, 255, 255, 0.2)",
                                        backdropFilter: "blur(6px)"
                                    }}
                                >
                                    <div className="h-24 sm:h-28 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 relative overflow-hidden">
                                        <img src={beach.image} alt={beach.name} className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                                    </div>

                                    <h3 className="text-sm sm:text-base font-title font-bold text-white mb-2 sm:mb-3 text-center leading-tight drop-shadow-lg">
                                        {beach.name}
                                    </h3>
                                    <p className="text-xs sm:text-sm font-ui font-semibold text-yellow-300 text-center mb-2 drop-shadow-md">
                                        {beach.category}
                                    </p>
                                </div>
                            )
                        })}
                    </div>

                    <div className="flex justify-center px-4 sm:px-6 py-8 sm:py-12 lg:py-4">
                        <button
                            onClick={() => handleNavigate("/playas")}
                            className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-white/30 backdrop-blur-sm border-2 border-white/60 text-white font-ui font-semibold rounded-full hover:bg-white/40 hover:border-white/80 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl beach-card-floating animate-fade-in-up text-sm sm:text-base"
                            style={{
                                animationDelay: "3s",
                                filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.2))"
                            }}
                        >
                            Explorar Todas las Playas
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

