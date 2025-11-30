"use client"

import { useEffect, useState } from "react"

/**
 * Layout base para las páginas de sitios turísticos
 * Este componente puede ser extendido con más secciones según se necesite
 */
export default function SiteLayout({ site, children }) {
    const [isAnimationReady, setIsAnimationReady] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAnimationReady(true)
        }, 100)
        return () => clearTimeout(timer)
    }, [])

    if (!site) {
        return null
    }

    return (
        <div 
            className="relative min-h-screen flex flex-col overflow-x-hidden z-0"
            style={{
                paddingTop: '64px',
                minHeight: '100vh',
                backgroundColor: '#1f2a37',
                backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="blueprint" width="100" height="100" patternUnits="userSpaceOnUse"><rect width="100" height="100" fill="%231f2a37"/><path d="M0 0 L100 0 M0 10 L100 10 M0 20 L100 20" stroke="%23405b7c" stroke-width="0.5" opacity="0.1"/><path d="M0 0 L0 100 M10 0 L10 100 M20 0 L20 100" stroke="%23405b7c" stroke-width="0.5" opacity="0.1"/></pattern></defs><rect width="100%" height="100%" fill="url(%23blueprint)"/></svg>')`,
                backgroundSize: '200px 200px',
                backgroundRepeat: 'repeat'
            }}
        >
            {/* Overlay de textura */}
            <div 
                className="absolute inset-0 opacity-25 transition-opacity duration-700"
                style={{
                    backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="blueprint" width="100" height="100" patternUnits="userSpaceOnUse"><rect width="100" height="100" fill="%231f2a37"/><path d="M0 0 L100 0 M0 10 L100 10 M0 20 L100 20" stroke="%23405b7c" stroke-width="0.5" opacity="0.1"/><path d="M0 0 L0 100 M10 0 L10 100 M20 0 L20 100" stroke="%23405b7c" stroke-width="0.5" opacity="0.1"/></pattern></defs><rect width="100%" height="100%" fill="url(%23blueprint)"/></svg>')`,
                    backgroundSize: '200px 200px',
                    backgroundRepeat: 'repeat'
                }}
            />

            {/* Contenido principal */}
            <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-5 sm:pt-7 pb-12 sm:pb-16 flex flex-col">
                <div className="max-w-6xl mx-auto flex w-full flex-col gap-8">
                    {/* Título y frase alusiva */}
                    <div className="flex flex-col items-center text-center gap-2 mt-5 sm:mt-7 lg:mt-10">
                        <h1
                            className={`text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-title font-bold drop-shadow-2xl animate-fade-in-up ${isAnimationReady ? 'animate-enter-active' : ''}`}
                            style={{ color: '#e3dcd3', transitionDelay: '0.05s' }}
                        >
                            {site.name}
                        </h1>
                        <p
                            className={`text-base sm:text-lg md:text-xl font-body drop-shadow-lg animate-fade-in-up-delayed ${isAnimationReady ? 'animate-enter-active' : ''}`}
                            style={{ color: '#c0ccd9', transitionDelay: '0.15s' }}
                        >
                            {site.subtitle || site.description}
                        </p>
                    </div>

                    {children}
                </div>
            </div>
        </div>
    )
}

