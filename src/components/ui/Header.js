"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { menuItems } from "@/data/sections"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [headerStyle, setHeaderStyle] = useState({
        background: 'transparent',
        opacity: 0,
        textColor: 'white'
    })
    const [isHeaderVisible, setIsHeaderVisible] = useState(false)
    const pathname = usePathname()

    // Función para detectar el color dominante del contenido y mostrar header
    const updateHeaderStyle = () => {
        const scrollY = window.scrollY
        const windowHeight = window.innerHeight
        const threshold = windowHeight * 0.1 // 10vh threshold - más temprano
        
        // Mostrar header después del threshold con transparencia
        if (scrollY > threshold) {
            setIsHeaderVisible(true)
            
            // Detectar en qué sección estamos basado en el scroll y ajustar color del texto según el fondo
            if (scrollY < windowHeight * 0.8) {
                // Hero Section - Fondo dorado/naranja, texto blanco
                setHeaderStyle({
                    background: 'transparent',
                    opacity: 0.95,
                    textColor: 'white'
                })
            } else if (scrollY < windowHeight * 1.8) {
                // Historia - Fondo azul/púrpura, texto blanco
                setHeaderStyle({
                    background: 'transparent',
                    opacity: 0.9,
                    textColor: 'white'
                })
            } else if (scrollY < windowHeight * 2.8) {
                // Sitios Turísticos - Fondo esmeralda/teal, texto blanco
                setHeaderStyle({
                    background: 'transparent',
                    opacity: 0.9,
                    textColor: 'white'
                })
            } else if (scrollY < windowHeight * 3.8) {
                // Playas - Fondo azul/púrpura, texto blanco
                setHeaderStyle({
                    background: 'transparent',
                    opacity: 0.9,
                    textColor: 'white'
                })
            } else if (scrollY < windowHeight * 4.8) {
                // Museos - Fondo esmeralda/teal, texto blanco
                setHeaderStyle({
                    background: 'transparent',
                    opacity: 0.9,
                    textColor: 'white'
                })
            } else if (scrollY < windowHeight * 5.8) {
                // Centros Comerciales - Fondo azul/púrpura, texto blanco
                setHeaderStyle({
                    background: 'transparent',
                    opacity: 0.9,
                    textColor: 'white'
                })
            } else if (scrollY < windowHeight * 6.8) {
                // Lugares Poco Conocidos - Fondo esmeralda/teal, texto blanco
                setHeaderStyle({
                    background: 'transparent',
                    opacity: 0.9,
                    textColor: 'white'
                })
            } else {
                // Sección Final - Fondo dorado/naranja, texto blanco
                setHeaderStyle({
                    background: 'transparent',
                    opacity: 0.9,
                    textColor: 'white'
                })
            }
        } else {
            setIsHeaderVisible(false)
            setHeaderStyle({
                background: 'transparent',
                opacity: 0,
                textColor: 'white'
            })
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            updateHeaderStyle()
        }

        window.addEventListener('scroll', handleScroll)
        updateHeaderStyle() // Llamar una vez al montar

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header 
            className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-500 ease-in-out ${
                isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
            }`}
            style={{ 
                background: 'transparent',
                backdropFilter: isHeaderVisible ? 'blur(8px)' : 'none',
                WebkitBackdropFilter: isHeaderVisible ? 'blur(8px)' : 'none',
                borderBottom: isHeaderVisible ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
            }}
        >
            <div className="max-w-6xl mx-auto px-6 h-full">
                <div className="flex justify-between items-center h-full">
                    {/* Logo */}
                    <Link 
                        href="/" 
                        className="text-xl font-bold transition-colors duration-300"
                        style={{ 
                            color: headerStyle.textColor,
                            fontFamily: 'var(--font-playfair), serif',
                            letterSpacing: '0.05em'
                        }}
                    >
                        <span style={{ color: '#FFD700' }}>Discover</span> Cartagena
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {menuItems.map((item) => {
                            const isActive = pathname === item.href
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-sm font-medium transition-colors duration-300 hover:text-yellow-400"
                                    style={{ 
                                        color: isActive ? '#FFD700' : headerStyle.textColor,
                                        fontFamily: 'var(--font-raleway), sans-serif'
                                    }}
                                >
                                    {item.name}
                                </Link>
                            )
                        })}
                    </nav>

                    {/* Mobile menu button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden p-2 transition-colors duration-300"
                        style={{ color: headerStyle.textColor }}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden backdrop-blur-sm border-t border-white/10" style={{ background: 'rgba(0, 0, 0, 0.3)' }}>
                    <div className="px-6 py-4 space-y-3">
                        {menuItems.map((item) => {
                            const isActive = pathname === item.href
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="block text-sm font-medium transition-colors duration-300 hover:text-yellow-400"
                                    style={{ 
                                        color: isActive ? '#FFD700' : headerStyle.textColor,
                                        fontFamily: 'var(--font-raleway), sans-serif'
                                    }}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            )
                        })}
                    </div>
                </div>
            )}
        </header>
    )
}
