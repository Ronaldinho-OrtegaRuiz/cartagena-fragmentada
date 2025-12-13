"use client"

import { useState, useEffect } from "react"

export default function BeachSlider({ images = [] }) {
    const [currentImage, setCurrentImage] = useState(0)
    const [isHovered, setIsHovered] = useState(false)
    const [isTransitioning, setIsTransitioning] = useState(false)

    // Si no hay imágenes, usar un placeholder
    const displayImages = images.length > 0 ? images : [{ src: '', alt: 'Imagen próximamente' }]

    useEffect(() => {
        if (!isHovered && displayImages.length > 1) {
            const interval = setInterval(() => {
                setIsTransitioning(true)
                setTimeout(() => {
                    setCurrentImage((prev) => (prev + 1) % displayImages.length)
                    setIsTransitioning(false)
                }, 500)
            }, 5000)

            return () => clearInterval(interval)
        }
    }, [isHovered, displayImages.length])

    const goToPrevious = () => {
        if (displayImages.length <= 1) return
        setIsTransitioning(true)
        setTimeout(() => {
            setCurrentImage((prev) => prev === 0 ? displayImages.length - 1 : prev - 1)
            setIsTransitioning(false)
        }, 500)
    }

    const goToNext = () => {
        if (displayImages.length <= 1) return
        setIsTransitioning(true)
        setTimeout(() => {
            setCurrentImage((prev) => (prev + 1) % displayImages.length)
            setIsTransitioning(false)
        }, 500)
    }

    return (
        <div className="relative w-full max-w-lg mx-auto">
            {/* Contenedor principal del slider */}
            <div 
                className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Imagen actual o placeholder */}
                {displayImages[currentImage]?.src ? (
                    <img
                        src={displayImages[currentImage].src}
                        alt={displayImages[currentImage].alt || 'Imagen de la playa'}
                        className={`w-full h-full object-cover transition-all duration-1000 ease-in-out transform group-hover:scale-105 ${
                            isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                        }`}
                    />
                ) : (
                    <div className="w-full h-full bg-white/10 flex items-center justify-center">
                        <p className="text-white/50 font-body text-center px-4">
                            Imagen próximamente
                        </p>
                    </div>
                )}

                {/* Flechas de navegación - solo si hay más de una imagen */}
                {displayImages.length > 1 && (
                    <>
                        <button
                            onClick={(e) => {
                                e.stopPropagation()
                                goToPrevious()
                            }}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/40 disabled:opacity-50"
                            disabled={isTransitioning}
                        >
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button
                            onClick={(e) => {
                                e.stopPropagation()
                                goToNext()
                            }}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/40 disabled:opacity-50"
                            disabled={isTransitioning}
                        >
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </>
                )}
            </div>
            
            {/* Indicador de progreso temporal - solo si hay más de una imagen */}
            {displayImages.length > 1 && (
                <div className="flex justify-center mt-3 space-x-2">
                    {displayImages.map((_, index) => (
                        <div
                            key={index}
                            className={`h-1 w-8 rounded-full transition-all duration-500 ${
                                index === currentImage 
                                    ? 'bg-white' 
                                    : index < currentImage 
                                        ? 'bg-white/50' 
                                        : 'bg-white/20'
                            }`}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

