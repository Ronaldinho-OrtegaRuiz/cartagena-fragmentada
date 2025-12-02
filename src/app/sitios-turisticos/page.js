"use client"

import { useState } from "react"
import Link from "next/link"
import { sites } from "./data/sites"
import SitesMap from "./components/SitesMap"

export default function SitiosTuristicos() {
    const [hoveredPair, setHoveredPair] = useState(null) // [rowIndex, cardIndex]
    
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
                <div className="max-w-6xl mx-auto mb-12 pt-8 sm:pt-20 px-8 sm:px-20">
                    <h1 className="text-4xl sm:text-6xl font-title font-bold mb-4 text-center text-white" style={{ color: 'white' }}>
                        Sitios Turísticos
                    </h1>
                    <p className="text-lg sm:text-xl text-center font-body text-white/90">
                        Descubre los monumentos y lugares emblemáticos de la Heroica
                    </p>
                </div>
                
                <div className="relative z-10 pb-8 sm:pb-20 flex justify-center">
                    <div className="w-[80%] space-y-0">
                        {sitePairs.map((pair, rowIndex) => {
                            const isLastRow = rowIndex === sitePairs.length - 1
                            
                            return (
                                <div 
                                    key={rowIndex}
                                    className="flex flex-col md:flex-row"
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
                                                className={`relative block min-h-[300px] sm:min-h-[350px] overflow-hidden transition-all duration-500 ease-in-out ${
                                                    isLastRow ? '' : 'border-b md:border-b-0'
                                                } ${isLeft ? 'md:border-r' : ''}`}
                                                style={{ 
                                                    borderColor: 'rgba(255, 255, 255, 0.2)',
                                                    borderWidth: '2px',
                                                    width: isHovered ? '80%' : (hoveredPair && hoveredPair.startsWith(`${rowIndex}-`) ? '20%' : '50%')
                                                }}
                                                onMouseEnter={() => setHoveredPair(pairKey)}
                                            >
                                                {/* Imagen de fondo */}
                                                <div 
                                                    className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500"
                                                    style={{ 
                                                        backgroundImage: `url(${site.image})`,
                                                        transform: isHovered ? 'scale(1.05)' : 'scale(1)'
                                                    }}
                                                />
                                                
                                                {/* Overlay con gradiente */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                                                
                                                {/* Contenido */}
                                                <div className="relative h-full flex flex-col justify-end p-6 sm:p-8 text-white">
                                                    <h2 className="text-xl sm:text-2xl font-title font-bold mb-2">
                                                        {site.name}
                                                    </h2>
                                                    <p className="text-sm sm:text-base font-body opacity-90 leading-relaxed">
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
                <div className="relative z-10 pb-8 sm:pb-20 mt-12 sm:mt-16">
                    <div className="flex justify-center">
                        <div className="w-[80%]">
                            <div className="mb-8 text-center">
                                <h2 className="text-3xl sm:text-4xl font-title font-bold mb-4 text-white">
                                    Ubicación de los Sitios
                                </h2>
                                <p className="text-lg sm:text-xl font-body text-white/90">
                                    Explora la ubicación de todos los sitios turísticos en el mapa
                                </p>
                            </div>
                            <div className="w-full">
                                <SitesMap />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

