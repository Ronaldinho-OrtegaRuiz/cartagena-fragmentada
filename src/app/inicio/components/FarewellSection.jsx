"use client"

export default function FarewellSection({ registerSectionRef }) {
    return (
        <section
            ref={registerSectionRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-blue-50" />

            <div className="absolute inset-0 overflow-hidden">
                <div className="wave-layer wave-sunset-1"></div>
                <div className="wave-layer wave-sunset-2"></div>
                <div className="wave-layer wave-sunset-3"></div>
            </div>

            <div
                className="absolute inset-0 opacity-25"
                style={{
                    backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><filter id="paper"><feTurbulence baseFrequency="0.8" numOctaves="3" result="noise"/><feColorMatrix in="noise" type="saturate" values="0.3"/></filter><pattern id="agedPaper" width="300" height="300" patternUnits="userSpaceOnUse"><rect width="300" height="300" fill="%23F4E4BC" filter="url(%23paper)"/><path d="M0 0 L300 0 L300 300 L0 300 Z" fill="none" stroke="%23D4C4A8" stroke-width="0.5" opacity="0.4"/><circle cx="80" cy="80" r="1.5" fill="%23B8A082" opacity="0.6"/><circle cx="220" cy="150" r="1" fill="%23B8A082" opacity="0.5"/><circle cx="150" cy="220" r="2" fill="%23B8A082" opacity="0.4"/><circle cx="50" cy="250" r="1.5" fill="%23B8A082" opacity="0.7"/><circle cx="250" cy="50" r="1" fill="%23B8A082" opacity="0.3"/><path d="M20 20 Q50 30 80 20 Q110 30 140 20" stroke="%23B8A082" stroke-width="0.3" opacity="0.4" fill="none"/><path d="M200 200 Q230 210 260 200 Q290 210 280 200" stroke="%23B8A082" stroke-width="0.2" opacity="0.3" fill="none"/></pattern></defs><rect width="100%" height="100%" fill="url(%23agedPaper)"/></svg>')`,
                    backgroundSize: "600px 600px",
                    backgroundRepeat: "repeat"
                }}
            />

            <div className="absolute inset-0 bg-gray-100/30" />

            <div className="absolute top-10 left-10 w-32 h-32 opacity-20 animate-palm-sway">
                <svg viewBox="0 0 100 100" className="w-full h-full text-white">
                    <path d="M50 10 Q30 20 20 40 Q15 50 20 60 Q25 70 30 80 Q35 85 40 90 Q45 95 50 100 Q55 95 60 90 Q65 85 70 80 Q75 70 80 60 Q85 50 80 40 Q70 20 50 10" fill="currentColor" opacity="0.6" />
                    <path d="M50 15 Q35 25 25 45 Q20 55 25 65 Q30 75 35 85 Q40 90 45 95 Q50 100 55 95 Q60 90 65 85 Q70 75 75 65 Q80 55 75 45 Q65 25 50 15" fill="currentColor" opacity="0.4" />
                </svg>
            </div>

            <div className="absolute top-20 right-16 w-24 h-24 opacity-15 animate-palm-sway-delayed">
                <svg viewBox="0 0 100 100" className="w-full h-full text-white">
                    <path d="M50 10 Q30 20 20 40 Q15 50 20 60 Q25 70 30 80 Q35 85 40 90 Q45 95 50 100 Q55 95 60 90 Q65 85 70 80 Q75 70 80 60 Q85 50 80 40 Q70 20 50 10" fill="currentColor" opacity="0.5" />
                </svg>
            </div>

            <div className="absolute bottom-20 left-20 w-28 h-28 opacity-18 animate-palm-sway">
                <svg viewBox="0 0 100 100" className="w-full h-full text-white">
                    <path d="M50 10 Q30 20 20 40 Q15 50 20 60 Q25 70 30 80 Q35 85 40 90 Q45 95 50 100 Q55 95 60 90 Q65 85 70 80 Q75 70 80 60 Q85 50 80 40 Q70 20 50 10" fill="currentColor" opacity="0.4" />
                </svg>
            </div>

            <div className="absolute top-1/4 left-1/4 w-full h-1 opacity-20 animate-breeze">
                <svg viewBox="0 0 1000 10" className="w-full h-full text-white">
                    <path d="M0 5 Q100 2 200 5 Q300 8 400 5 Q500 2 600 5 Q700 8 800 5 Q900 2 1000 5" stroke="currentColor" strokeWidth="1" fill="none" />
                </svg>
            </div>

            <div className="absolute top-1/3 right-1/4 w-full h-1 opacity-15 animate-breeze-delayed">
                <svg viewBox="0 0 1000 10" className="w-full h-full text-white">
                    <path d="M0 5 Q150 3 300 5 Q450 7 600 5 Q750 3 900 5 Q950 7 1000 5" stroke="currentColor" strokeWidth="1" fill="none" />
                </svg>
            </div>

            <div className="relative z-10 text-center text-gray-800 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                <div className="mb-8">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 drop-shadow-2xl animate-fade-in-up leading-tight">
                        Esto es solo el inicio
                    </h2>
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-light mb-4 drop-shadow-lg animate-fade-in-up-delayed leading-relaxed text-gray-700">
                        Cartagena te espera con nuevas atmósferas
                    </p>
                    <p className="text-lg sm:text-xl md:text-2xl font-body mb-8 text-gray-600 drop-shadow-md animate-fade-in-up-delayed max-w-3xl mx-auto leading-relaxed">
                        Muchas más secciones nos esperan. Más playas, más museos, más alma caribeña por descubrir.
                    </p>
                </div>

                <div className="mb-12 animate-logo-fade">
                    <div className="inline-block px-8 py-4 bg-gray-100/80 backdrop-blur-sm rounded-full border border-gray-300/50 shadow-lg">
                        <span className="text-2xl sm:text-3xl font-serif font-bold text-gray-800">
                            <span style={{ color: "#FFD700" }}>Cartagena</span> Fragmentada
                        </span>
                    </div>
                </div>

                <div className="animate-fade-in-up-delayed">
                    <p className="text-base sm:text-lg md:text-xl font-body text-gray-600 drop-shadow-md italic max-w-2xl mx-auto leading-relaxed">
                        "Donde cada rincón cuenta una historia, cada ola susurra un secreto, y cada atardecer promete un nuevo amanecer."
                    </p>
                </div>
            </div>

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-1/4 w-1 h-1 bg-gray-400/40 rounded-full animate-float" style={{ animationDelay: "0s" }}></div>
                <div className="absolute top-40 right-1/3 w-1.5 h-1.5 bg-gray-500/35 rounded-full animate-float-delayed" style={{ animationDelay: "1s" }}></div>
                <div className="absolute bottom-40 left-1/3 w-1 h-1 bg-gray-400/45 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
                <div className="absolute bottom-20 right-1/4 w-1.5 h-1.5 bg-gray-500/30 rounded-full animate-float-delayed" style={{ animationDelay: "3s" }}></div>
                <div className="absolute top-1/2 left-1/5 w-1 h-1 bg-gray-400/50 rounded-full animate-float" style={{ animationDelay: "4s" }}></div>
                <div className="absolute top-1/3 right-1/5 w-1.5 h-1.5 bg-gray-500/35 rounded-full animate-float-delayed" style={{ animationDelay: "5s" }}></div>
            </div>
        </section>
    )
}

