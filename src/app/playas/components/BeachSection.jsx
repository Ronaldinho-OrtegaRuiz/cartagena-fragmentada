"use client"

import { useEffect, useState } from "react"
import BeachSlider from "./BeachSlider"

export default function BeachSection({ beach }) {
    const [isAnimationReady, setIsAnimationReady] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAnimationReady(true)
        }, 100)
        return () => clearTimeout(timer)
    }, [])

    if (!beach) return null

    return (
        <section className="relative min-h-screen overflow-hidden">
            {/* Fondo de playa */}
            <div 
                className="absolute inset-0"
                style={{
                    background: "#80D0D2"
                }}
            >

                {/* Capa de arena horizontal */}
                <div
                    className="absolute inset-0 pointer-events-none z-10"
                    style={{
                        background: "linear-gradient(to right, #F5E6D3 0%, #E8D5B7 20%, #D4C4A8 40%, transparent 100%)"
                    }}
                />
            </div>

            {/* Contenido */}
            <div className="relative z-20 min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                <div className="w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                        {/* Contenido en la tierra (lado izquierdo) - pegado a la izquierda */}
                        <div className="relative animate-fade-in-up flex items-start justify-start pr-4 lg:pr-6">
                            <div className={`max-w-3xl space-y-6 ${isAnimationReady ? 'animate-enter-active' : ''}`} style={{ transitionDelay: '0.1s' }}>
                                {/* Título */}
                                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-title font-bold text-amber-900 drop-shadow-2xl">
                                    {beach.title}
                                </h2>

                                {/* Frase */}
                                <p className="text-lg sm:text-xl md:text-2xl font-body text-amber-800 drop-shadow-lg leading-relaxed">
                                    {beach.phrase}
                                </p>

                                {/* Contenido */}
                                <p className="text-base sm:text-lg md:text-xl font-body text-amber-900/90 drop-shadow-md leading-relaxed">
                                    {beach.content}
                                </p>
                            </div>
                        </div>

                        {/* Slider en el agua (lado derecho) - más cerca del texto */}
                        <div className={`relative animate-fade-in-up pl-4 lg:pl-6 ${isAnimationReady ? 'animate-enter-active' : ''}`} style={{ transitionDelay: '0.2s' }}>
                            <BeachSlider images={beach.gallery || []} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

