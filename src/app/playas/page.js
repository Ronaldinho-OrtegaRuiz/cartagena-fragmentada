"use client"

import { useEffect } from "react"
import { beaches } from "./data/beaches"
import BeachSection from "./components/BeachSection"
import EmptyBeachSection from "./components/EmptyBeachSection"
import HeroBeachSection from "./components/HeroBeachSection"

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
        <div className="relative overflow-hidden">
            {/* Sección inicial con header */}
            <HeroBeachSection />
            
            {/* Secciones intercaladas */}
            {sections.map((section, index) => {
                if (section.type === 'empty') {
                    return <EmptyBeachSection key={section.id} />
                } else {
                    return <BeachSection key={section.beach.id} beach={section.beach} />
                }
            })}
        </div>
    )
}
