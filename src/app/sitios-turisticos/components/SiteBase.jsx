"use client"

import { useState, useEffect } from "react"
import SiteSlider from "@/components/ui/SiteSlider"

/**
 * Estructura base común para todas las páginas de sitios turísticos
 * Esta es la plantilla que todos los sitios comparten por defecto
 */
export default function SiteBase({ site }) {
    const [isAnimationReady, setIsAnimationReady] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAnimationReady(true)
        }, 100)
        return () => clearTimeout(timer)
    }, [])

    if (!site) return null

    // Lista de 4 items para la sección del mapa
    const mapItems = [
        {
            id: 1,
            title: "Navegación",
            links: [
                { name: "Google Maps", url: "#" },
                { name: "Apple Maps", url: "#" }
            ]
        },
        {
            id: 2,
            title: "Ubicación",
            description: "Centro histórico de Cartagena de Indias, Colombia"
        },
        {
            id: 3,
            title: "Horarios",
            description: "Lunes a Domingo: 8:00 AM - 6:00 PM"
        },
        {
            id: 4,
            title: "Tipo de Sitio",
            description: "Monumento histórico - Patrimonio UNESCO"
        }
    ]

    // Imágenes para el slider - usar gallery si existe, sino usar la imagen principal
    const sliderImages = site.gallery && site.gallery.length > 0 
        ? site.gallery 
        : (site.image ? [{ src: site.image, alt: site.name }] : [])

    return (
        <div className="flex flex-col gap-8">
            {/* Sección de texto y slider */}
            <div className="flex-1 min-h-0 mt-6 flex flex-col gap-6 overflow-visible sm:mt-8 lg:mt-10 lg:flex-row lg:gap-12">
                {/* Texto a la izquierda */}
                <div className="flex-1 text-white">
                    <div className={`space-y-4 animate-fade-in-up ${isAnimationReady ? 'animate-enter-active' : ''}`} style={{ transitionDelay: '0.2s' }}>
                        {site.content && site.content.length > 0 ? (
                            site.content.map((paragraph, index) => (
                                <p 
                                    key={index}
                                    className={`${index === 0 ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'} font-body leading-relaxed`}
                                    style={{ color: index === 0 ? '#e3dcd3' : '#c0ccd9' }}
                                >
                                    {paragraph}
                                </p>
                            ))
                        ) : (
                            <>
                                <p className="text-lg sm:text-xl font-body leading-relaxed" style={{ color: '#e3dcd3' }}>
                                    Este emblemático sitio turístico forma parte del rico patrimonio histórico y cultural de Cartagena de Indias. 
                                    Su arquitectura y significado histórico lo convierten en uno de los lugares más importantes de la ciudad.
                                </p>
                                <p className="text-base sm:text-lg font-body leading-relaxed" style={{ color: '#c0ccd9' }}>
                                    Descubre la historia, la arquitectura y los detalles que hacen de este lugar un destino imperdible 
                                    para quienes visitan la Heroica. Cada rincón cuenta una historia que se remonta a siglos de tradición 
                                    y cultura caribeña.
                                </p>
                            </>
                        )}
                    </div>
                </div>

                {/* Slider a la derecha */}
                <div className="flex-1">
                    <SiteSlider images={sliderImages} />
                </div>
            </div>

            {/* Sección de mapa y lista */}
            <div className="mt-12 sm:mt-16 flex flex-col lg:flex-row gap-8 lg:gap-12">
                {/* Lista a la izquierda */}
                <div className="flex-1">
                    <h2 
                        className={`text-2xl sm:text-3xl font-title font-bold mb-6 animate-fade-in-up ${isAnimationReady ? 'animate-enter-active' : ''}`}
                        style={{ color: '#e3dcd3', transitionDelay: '0.4s' }}
                    >
                        Información
                    </h2>
                    <div className="space-y-4">
                        {mapItems.map((item, index) => (
                            <div
                                key={item.id}
                                className={`glass rounded-2xl border border-white/25 px-4 py-4 sm:px-5 sm:py-5 hover:bg-white/15 transition-all duration-300 animate-fade-in-up ${isAnimationReady ? 'animate-enter-active' : ''}`}
                                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                            >
                                <h3 className="text-lg sm:text-xl font-title font-semibold mb-3" style={{ color: '#e3dcd3' }}>
                                    {item.title}
                                </h3>
                                {item.links ? (
                                    <div className="flex flex-col gap-2">
                                        {item.links.map((link, linkIndex) => (
                                            <a
                                                key={linkIndex}
                                                href={link.url}
                                                className="text-sm sm:text-base font-body hover:text-white transition-colors duration-200"
                                                style={{ color: '#c0ccd9' }}
                                                onClick={(e) => {
                                                    e.preventDefault()
                                                    // Los enlaces todavía no funcionan
                                                }}
                                            >
                                                {link.name}
                                            </a>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-sm sm:text-base font-body" style={{ color: '#c0ccd9' }}>
                                        {item.description}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Espacio para mapa a la derecha */}
                <div className="flex-1">
                    <div 
                        className={`w-full h-96 md:h-[500px] rounded-2xl border border-white/25 bg-white/5 animate-fade-in-up ${isAnimationReady ? 'animate-enter-active' : ''} flex items-center justify-center`}
                        style={{ transitionDelay: '0.6s' }}
                    >
                        <p className="text-white/50 font-body text-center px-4">
                            Mapa interactivo próximamente
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

