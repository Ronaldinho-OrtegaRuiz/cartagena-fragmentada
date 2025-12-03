"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { sites } from "./data/sites"
import SitesMap from "./components/SitesMap"

export default function SitiosTuristicos() {
    const [hoveredPair, setHoveredPair] = useState(null) // [rowIndex, cardIndex]
    const [isMobile, setIsMobile] = useState(false)
    const [isAnimationReady, setIsAnimationReady] = useState(false)
    
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }
        
        checkMobile()
        window.addEventListener('resize', checkMobile)
        
        return () => window.removeEventListener('resize', checkMobile)
    }, [])
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAnimationReady(true)
        }, 100)
        return () => clearTimeout(timer)
    }, [])
    
    // Agrupar sites en pares (filas de 2)
    const sitePairs = []
    for (let i = 0; i < sites.length; i += 2) {
        sitePairs.push([sites[i], sites[i + 1]])
    }

    return (
        <div className="min-h-screen relative bg-gradient-to-br from-slate-800 via-gray-700 to-stone-800">
            {/* Capa negra overlay */}
            <div className="absolute inset-0 bg-black/30 z-0" />
            
            <div className="relative z-10 w-full">
                <div className="max-w-6xl mx-auto mb-8 sm:mb-12 pt-20 sm:pt-28 px-4 sm:px-8 md:px-20">
                    <h1 className={`text-3xl sm:text-5xl md:text-6xl font-title font-bold mb-3 sm:mb-4 text-center text-white animate-fade-in-up ${isAnimationReady ? 'animate-enter-active' : ''}`} style={{ transitionDelay: '0.1s' }}>
                        Sitios Turísticos
                    </h1>
                    <p className={`text-base sm:text-lg md:text-xl text-center font-body px-2 animate-fade-in-up ${isAnimationReady ? 'animate-enter-active' : ''}`} style={{ color: '#ffffff', transitionDelay: '0.2s' }}>
                        Descubre los monumentos y lugares emblemáticos de la Heroica
                    </p>
                </div>
                
                <div className="relative z-10 pb-8 sm:pb-20 flex justify-center">
                    <div className="w-full sm:w-[90%] md:w-[80%] space-y-0 px-4 sm:px-0">
                        {sitePairs.map((pair, rowIndex) => {
                            const isLastRow = rowIndex === sitePairs.length - 1
                            
                            return (
                                <div 
                                    key={rowIndex}
                                    className={`flex flex-col md:flex-row animate-fade-in-up ${isAnimationReady ? 'animate-enter-active' : ''}`}
                                    style={{ transitionDelay: `${0.3 + rowIndex * 0.1}s` }}
                                    onMouseLeave={() => setHoveredPair(null)}
                                >
                                    {pair.map((site, cardIndex) => {
                                        if (!site) return null
                                        
                                        const pairKey = `${rowIndex}-${cardIndex}`
                                        const isHovered = hoveredPair === pairKey
                                        const isLeft = cardIndex === 0
                                        
                                        return (
                                            <Link 
                                                key={site.id} 
                                                href={`/sitios-turisticos/${site.slug}`}
                                                className={`relative block min-h-[280px] sm:min-h-[320px] md:min-h-[350px] overflow-hidden transition-all duration-500 ease-in-out ${
                                                    isLastRow ? '' : 'border-b md:border-b-0'
                                                } ${isLeft ? 'md:border-r' : ''}`}
                                                style={{ 
                                                    borderColor: 'rgba(255, 255, 255, 0.2)',
                                                    borderWidth: '2px',
                                                    width: isMobile ? '100%' : (isHovered ? '80%' : (hoveredPair && hoveredPair.startsWith(`${rowIndex}-`) ? '20%' : '50%'))
                                                }}
                                                onMouseEnter={() => {
                                                    if (!isMobile) {
                                                        setHoveredPair(pairKey)
                                                    }
                                                }}
                                            >
                                                {/* Imagen de fondo */}
                                                <div 
                                                    className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500"
                                                    style={{ 
                                                        backgroundImage: `url(${site.image})`,
                                                        transform: isMobile ? 'scale(1)' : (isHovered ? 'scale(1.05)' : 'scale(1)')
                                                    }}
                                                />
                                                
                                                {/* Overlay con gradiente */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                                                
                                                {/* Contenido */}
                                                <div className="relative h-full flex flex-col justify-end p-4 sm:p-6 md:p-8 text-white">
                                                    <h2 className="text-lg sm:text-xl md:text-2xl font-title font-bold mb-1 sm:mb-2">
                                                        {site.name}
                                                    </h2>
                                                    <p className="text-xs sm:text-sm md:text-base font-body opacity-90 leading-relaxed">
                                                        {site.description}
                                                    </p>
                                                </div>
                                            </Link>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Sección del Mapa */}
                <div className={`relative z-10 pb-8 sm:pb-20 mt-8 sm:mt-12 md:mt-16 animate-fade-in-up ${isAnimationReady ? 'animate-enter-active' : ''}`} style={{ transitionDelay: `${0.3 + sitePairs.length * 0.1 + 0.2}s` }}>
                    <div className="flex justify-center">
                        <div className="w-full sm:w-[90%] md:w-[80%] px-4 sm:px-0">
                            <div className="mb-6 sm:mb-8 text-center">
                                <h2 className={`text-2xl sm:text-3xl md:text-4xl font-title font-bold mb-3 sm:mb-4 text-white animate-fade-in-up ${isAnimationReady ? 'animate-enter-active' : ''}`} style={{ transitionDelay: `${0.3 + sitePairs.length * 0.1 + 0.3}s` }}>
                                    Ubicación de los Sitios
                                </h2>
                                <p className={`text-base sm:text-lg md:text-xl font-body px-2 animate-fade-in-up ${isAnimationReady ? 'animate-enter-active' : ''}`} style={{ color: '#ffffff', transitionDelay: `${0.3 + sitePairs.length * 0.1 + 0.4}s` }}>
                                    Explora la ubicación de todos los sitios turísticos en el mapa
                                </p>
                            </div>
                            <div className={`w-full animate-fade-in-up ${isAnimationReady ? 'animate-enter-active' : ''}`} style={{ transitionDelay: `${0.3 + sitePairs.length * 0.1 + 0.5}s` }}>
                                <SitesMap />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

