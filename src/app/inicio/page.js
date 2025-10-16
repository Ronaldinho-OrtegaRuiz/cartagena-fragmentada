"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import IntroAnimation from "@/animations/intro-animation"
import { sections } from "@/data/sections"
import { containerVariants, cardVariants } from "@/lib/animations"

export default function Inicio() {
    const [showIntro, setShowIntro] = useState(false)

    useEffect(() => {
        // Verificar si ya se mostró la animación en esta sesión
        const hasSeenIntro = sessionStorage.getItem('hasSeenIntro')
        if (!hasSeenIntro) {
            setShowIntro(true)
            sessionStorage.setItem('hasSeenIntro', 'true')
        }
    }, [])
    


    return (
        <>
            {showIntro && <IntroAnimation onFinish={() => setShowIntro(false)} />}

            {!showIntro && (
                <div className="min-h-screen p-8 sm:p-20" style={{ background: 'linear-gradient(135deg, var(--cartagena-sand) 0%, #E8DCC0 100%)' }}>
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-5xl sm:text-7xl font-title font-bold mb-6 text-title-large" style={{ color: 'var(--cartagena-gold)' }}>
                        Descubre Cartagena
                    </h1>
                    <p className="text-xl sm:text-2xl mb-4 font-body text-elegant text-subtitle-style">
                        Explora todos los rincones de la Heroica Ciudad Amurallada
                    </p>
                    <p className="text-lg font-ui text-base">
                        Selecciona una sección para comenzar tu aventura
                    </p>
                </div>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {sections.map((section) => (
                        <motion.div
                            key={section.id}
                            variants={cardVariants}
                        >
                            <Link
                                href={section.href}
                                className="group block p-6 rounded-lg card-base card-hover"
                            >
                            <div className="text-center">
                                <h3 className="text-2xl font-title font-bold mb-3 transition-colors duration-300 text-primary group-hover:text-coral">
                                    {section.title}
                                </h3>
                                <p className="text-sm mb-4 font-body text-elegant text-base">
                                    {section.description}
                                </p>
                                <div className="space-y-1">
                                    {section.highlights.map((highlight, index) => (
                                        <span
                                            key={index}
                                            className="inline-block px-2 py-1 text-xs font-ui rounded-full mr-1 mb-1 card-highlight"
                                        >
                                            {highlight}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
            )}
        </>
    )
}
