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
                { name: "Google Maps", url: site.googleMapsUrl || "#", target: "_blank", rel: "noopener noreferrer" },
                { name: "Apple Maps", url: site.appleMapsUrl || "#", target: "_blank", rel: "noopener noreferrer" }
            ]
        },
        {
            id: 2,
            title: "Ubicación",
            description: site.location || "Centro histórico de Cartagena de Indias, Colombia"
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
                                        {item.links.map((link, linkIndex) => {
                                            // Iconos SVG para Google Maps y Apple Maps
                                            const getIcon = (name) => {
                                                if (name === "Google Maps") {
                                                    return (
                                                        <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg">
                                                            <defs>
                                                                <style>{`.google-maps-cls-1{fill:#1a73e8;}.google-maps-cls-2{fill:#ea4335;}.google-maps-cls-3{fill:#4285f4;}.google-maps-cls-4{fill:#fbbc04;}.google-maps-cls-5{fill:#34a853;}`}</style>
                                                            </defs>
                                                            <g transform="scale(1.03, 1.03), translate(3.5, 0)">
                                                                <path className="google-maps-cls-1" d="M14.45.78A8.09,8.09,0,0,0,5.8,3.29L9.63,6.51Z" transform="translate(-3.91 -0.4)"></path>
                                                                <path className="google-maps-cls-2" d="M5.8,3.29a8.07,8.07,0,0,0-1.89,5.2,9.06,9.06,0,0,0,.8,3.86L9.63,6.51Z" transform="translate(-3.91 -0.4)"></path>
                                                                <path className="google-maps-cls-3" d="M12,5.4a3.09,3.09,0,0,1,3.1,3.09,3.06,3.06,0,0,1-.74,2l4.82-5.73a8.12,8.12,0,0,0-4.73-4L9.63,6.51A3.07,3.07,0,0,1,12,5.4Z" transform="translate(-3.91 -0.4)"></path>
                                                                <path className="google-maps-cls-4" d="M12,11.59a3.1,3.1,0,0,1-3.1-3.1,3.07,3.07,0,0,1,.73-2L4.71,12.35A28.67,28.67,0,0,0,8.38,17.6l6-7.11A3.07,3.07,0,0,1,12,11.59Z" transform="translate(-3.91 -0.4)"></path>
                                                                <path className="google-maps-cls-5" d="M14.25,19.54c2.7-4.22,5.84-6.14,5.84-11a8.1,8.1,0,0,0-.91-3.73L8.38,17.6c.46.6.92,1.24,1.37,1.94C11.4,22.08,10.94,23.6,12,23.6S12.6,22.08,14.25,19.54Z" transform="translate(-3.91 -0.4)"></path>
                                                            </g>
                                                        </svg>
                                                    )
                                                } else if (name === "Apple Maps") {
                                                    return (
                                                        <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Apple Maps style icon">
                                                            <defs>
                                                                <linearGradient id="apple-maps-bg" x1="0" y1="0" x2="0" y2="1">
                                                                    <stop offset="0%" stopColor="#f7f7f9"/>
                                                                    <stop offset="100%" stopColor="#e9e9ee"/>
                                                                </linearGradient>
                                                                <linearGradient id="apple-maps-green" x1="0" y1="0" x2="1" y2="1">
                                                                    <stop offset="0%" stopColor="#b7e59f"/>
                                                                    <stop offset="100%" stopColor="#6cc070"/>
                                                                </linearGradient>
                                                                <linearGradient id="apple-maps-blue" x1="0" y1="0" x2="1" y2="1">
                                                                    <stop offset="0%" stopColor="#8ecafe"/>
                                                                    <stop offset="100%" stopColor="#3aa0f3"/>
                                                                </linearGradient>
                                                                <linearGradient id="apple-maps-yellow" x1="0" y1="0" x2="1" y2="1">
                                                                    <stop offset="0%" stopColor="#ffd57a"/>
                                                                    <stop offset="100%" stopColor="#f7a928"/>
                                                                </linearGradient>
                                                                <linearGradient id="apple-maps-road" x1="0" y1="0" x2="1" y2="1">
                                                                    <stop offset="0%" stopColor="#cfcfd6"/>
                                                                    <stop offset="100%" stopColor="#b7b7c2"/>
                                                                </linearGradient>
                                                                <filter id="apple-maps-shadow" x="-20%" y="-20%" width="140%" height="140%">
                                                                    <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#00000055"/>
                                                                </filter>
                                                            </defs>
                                                            <rect x="24" y="24" width="464" height="464" rx="100" fill="url(#apple-maps-bg)" filter="url(#apple-maps-shadow)"/>
                                                            <path d="M24,320 C120,260 210,230 280,210 C350,190 430,170 488,150 L488,488 L24,488 Z" fill="url(#apple-maps-green)"/>
                                                            <path d="M24,200 C100,180 180,150 250,130 C330,110 420,90 488,80 L488,24 L24,24 Z" fill="url(#apple-maps-blue)"/>
                                                            <g>
                                                                <path d="M60,460 L452,68" stroke="url(#apple-maps-road)" strokeWidth="28" strokeLinecap="round"/>
                                                                <path d="M110,460 L472,98" stroke="url(#apple-maps-road)" strokeWidth="16" strokeLinecap="round"/>
                                                                <path d="M60,120 L380,440" stroke="url(#apple-maps-road)" strokeWidth="22" strokeLinecap="round"/>
                                                            </g>
                                                            <g>
                                                                <path d="M84,420 C140,360 170,330 210,300 C240,280 270,270 310,260 C360,248 390,228 430,190" fill="none" stroke="#1f87ff" strokeWidth="22" strokeLinecap="round"/>
                                                                <path d="M84,420 C140,360 170,330 210,300 C240,280 270,270 310,260 C360,248 390,228 430,190" fill="none" stroke="#ffffff" strokeWidth="8" strokeLinecap="round" opacity="0.6"/>
                                                            </g>
                                                            <g transform="translate(400,160)">
                                                                <circle cx="0" cy="0" r="36" fill="url(#apple-maps-yellow)" />
                                                                <circle cx="0" cy="0" r="36" fill="#00000011"/>
                                                                <path d="M0,18 C-9,18 -16,11 -16,2 C-16,-7 -9,-14 0,-14 C9,-14 16,-7 16,2 C16,11 9,18 0,18 Z" fill="#fff"/>
                                                            </g>
                                                        </svg>
                                                    )
                                                }
                                                return null
                                            }
                                            
                                            return (
                                                <a
                                                    key={linkIndex}
                                                    href={link.url}
                                                    target={link.target}
                                                    rel={link.rel}
                                                    className="flex items-center gap-2 text-sm sm:text-base font-body hover:text-white transition-colors duration-200"
                                                    style={{ color: '#c0ccd9' }}
                                                >
                                                    {getIcon(link.name)}
                                                    <span>{link.name}</span>
                                                </a>
                                            )
                                        })}
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

