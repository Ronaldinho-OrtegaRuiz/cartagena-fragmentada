"use client"

import { useEffect } from "react"
import { beaches } from "./data/beaches"
import BeachSection from "./components/BeachSection"
import EmptyBeachSection from "./components/EmptyBeachSection"
import HeroBeachSection from "./components/HeroBeachSection"
import SeaOnlySection from "./components/SeaOnlySection"

export default function Playas() {
    useEffect(() => {
        // Activate fade-in animations on mount
        const timer = setTimeout(() => {
            const fadeElements = document.querySelectorAll('.animate-fade-in-up, .animate-fade-in-up-delayed, .beach-fade-in')
            fadeElements.forEach(el => {
                el.classList.add('animate-enter-active')
            })
        }, 100)
        
        return () => clearTimeout(timer)
    }, [])

    // Orden de secciones: vacía, con data, vacía, con data, etc.
    const sections = [
        { type: 'empty', id: 'empty-1' },
        { type: 'beach', beach: beaches[0] }, // Manzanillo
        { type: 'empty', id: 'empty-2' },
        { type: 'beach', beach: beaches[1] }, // Bocagrande
        { type: 'empty', id: 'empty-3' },
        { type: 'beach', beach: beaches[2] }, // Castillogrande
        { type: 'empty', id: 'empty-4' },
        { type: 'beach', beach: beaches[3] }, // Playa Blanca
    ]

    return (
        <div className="relative overflow-auto" style={{ height: "100vh", width: "100vw" }}>
            <div className="flex flex-col">
                {/* Fila 1: Hero + Mar */}
                <div className="flex flex-shrink-0" style={{ width: "200vw" }}>
                    <div className="flex-shrink-0" style={{ width: "100vw" }}>
                        <HeroBeachSection />
                    </div>
                    <div className="flex-shrink-0" style={{ width: "100vw", height: "100vh" }}>
                        <SeaOnlySection />
                    </div>
                </div>
                
                {/* Filas: Secciones + Mar */}
                {sections.map((section, index) => {
                    return (
                        <div key={section.id || section.beach.id} className="flex flex-shrink-0" style={{ width: "200vw" }}>
                            {/* Sección de playa */}
                            <div className="flex-shrink-0" style={{ width: "100vw" }}>
                                {section.type === 'empty' ? (
                                    <EmptyBeachSection />
                                ) : (
                                    <BeachSection beach={section.beach} />
                                )}
                            </div>
                            
                            {/* Sección de solo mar */}
                            <div className="flex-shrink-0" style={{ width: "100vw", height: "100vh" }}>
                                <SeaOnlySection />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
