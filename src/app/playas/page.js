"use client"

import { useEffect } from "react"

export default function Playas() {
    useEffect(() => {
        // Activate fade-in animations on mount
        const timer = setTimeout(() => {
            const fadeElements = document.querySelectorAll('.animate-fade-in-up, .animate-fade-in-up-delayed')
            fadeElements.forEach(el => {
                el.classList.add('animate-enter-active')
            })
        }, 100)
        
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="relative h-screen overflow-hidden flex flex-col" style={{
            background: "linear-gradient(135deg, #A7E3E2 0%, #8DD4D0 25%, #7FD1C3 50%, #6BC5D6 75%, #5BC0DE 100%)",
            animation: "waveBackground 18s ease-in-out infinite"
        }}>
            {/* Wave layers */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="wave-layer wave-1"></div>
                <div className="wave-layer wave-2"></div>
                <div className="wave-layer wave-3"></div>
                <div className="wave-layer wave-4"></div>
            </div>

            {/* Capa de arena horizontal - cubre toda la página */}
            <div
                className="absolute inset-0 pointer-events-none z-10"
                style={{
                    background: "linear-gradient(to right, #F5E6D3 0%, #E8D5B7 25%, #D4C4A8 50%, transparent 100%)"
                }}
            />

            {/* Header section */}
            <div
                className="relative w-full z-20 flex-shrink-0"
            >
                <div className="relative z-30 flex items-start justify-start px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-8 sm:pb-12">
                    <div className="text-left max-w-3xl">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-title font-bold mb-4 sm:mb-6 text-amber-900 drop-shadow-lg animate-fade-in-up">
                            Playas de Cartagena
                        </h1>
                        <div className="space-y-4 sm:space-y-5 animate-fade-in-up-delayed">
                            <p className="text-base sm:text-lg md:text-xl font-body text-amber-900/90 drop-shadow-md leading-relaxed animate-text-breeze">
                                Cartagena no tiene playas. Tiene memorias líquidas. Cada rincón costero guarda un suspiro del Caribe: Bocagrande vibra entre luces y espuma, Castillogrande susurra calma familiar, Playa Blanca brilla como un secreto de arena y cielo.
                            </p>
                            <p className="text-base sm:text-lg md:text-xl font-body text-amber-900/90 drop-shadow-md leading-relaxed animate-text-breeze-delayed">
                                Y más allá, donde el mar se vuelve cristal, las Islas del Rosario y Cholón te invitan a sumergirte, no solo en agua, sino en ritmo, color y libertad.
                            </p>
                            <p className="text-base sm:text-lg md:text-xl font-body text-amber-900/90 drop-shadow-sm leading-relaxed">
                                Aquí, cada ola es una historia. Cada playa, una emoción distinta. Cartagena se fragmenta en orillas, y tú decides por cuál empezar.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content section */}
            <div className="relative z-20 w-full flex-1 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full py-4 sm:py-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 h-full">
                        {/* Playas en la arena (lado izquierdo) */}
                        <div className="flex flex-col gap-6 sm:gap-8">
                            {/* Playa de Bocagrande */}
                            <div className="flex items-center gap-4 beach-card-floating">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
                                    <img src="/svgs/playas/bocagrande.svg" alt="Bocagrande" className="w-full h-full" />
                                </div>
                                <h2 className="text-lg sm:text-xl font-title font-semibold text-amber-900">
                                    Playa de Bocagrande
                                </h2>
                            </div>

                            {/* Playa de Castillogrande */}
                            <div className="flex items-center gap-4 beach-card-floating" style={{ animationDelay: '0.5s' }}>
                                <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
                                    <img src="/svgs/playas/castillogrande.svg" alt="Castillogrande" className="w-full h-full" />
                                </div>
                                <h2 className="text-lg sm:text-xl font-title font-semibold text-amber-900">
                                    Playa de Castillogrande
                                </h2>
                            </div>

                            {/* Playa de Manzanillo */}
                            <div className="flex items-center gap-4 beach-card-floating" style={{ animationDelay: '1s' }}>
                                <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
                                    <img src="/svgs/playas/manzanillo.svg" alt="Manzanillo" className="w-full h-full" />
                                </div>
                                <h2 className="text-lg sm:text-xl font-title font-semibold text-amber-900">
                                    Playa de Manzanillo
                                </h2>
                            </div>

                            {/* Playa Blanca */}
                            <div className="flex items-center gap-4 beach-card-floating" style={{ animationDelay: '1.5s' }}>
                                <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
                                    <img src="/svgs/playas/playa-blanca.svg" alt="Playa Blanca" className="w-full h-full" />
                                </div>
                                <h2 className="text-lg sm:text-xl font-title font-semibold text-amber-900">
                                    Playa Blanca
                                </h2>
                            </div>
                        </div>

                        {/* Islas flotando en el agua (lado derecho) */}
                        <div className="flex flex-col gap-6 sm:gap-8 items-end">
                            {/* Islas del Rosario */}
                            <div className="flex items-center gap-4 beach-card-floating" style={{ animationDelay: '2s' }}>
                                <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
                                    <img src="/svgs/playas/islas-rosario.svg" alt="Islas del Rosario" className="w-full h-full" />
                                </div>
                                <h2 className="text-lg sm:text-xl font-title font-semibold text-white drop-shadow-lg">
                                    Islas del Rosario
                                </h2>
                            </div>

                            {/* Cholón */}
                            <div className="flex items-center gap-4 beach-card-floating" style={{ animationDelay: '2.5s' }}>
                                <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
                                    <img src="/svgs/playas/cholon.svg" alt="Cholón" className="w-full h-full" />
                                </div>
                                <h2 className="text-lg sm:text-xl font-title font-semibold text-white drop-shadow-lg">
                                    Cholón
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

