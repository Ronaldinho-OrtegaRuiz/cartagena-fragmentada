"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { menuItems } from "@/data/sections"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isHeaderVisible, setIsHeaderVisible] = useState(true) // Siempre visible por defecto
    const [isHydrated, setIsHydrated] = useState(false)
    const timeoutRef = useRef(null)
    const pathname = usePathname()

    // Hidratación simple
    useEffect(() => {
        setIsHydrated(true)
    }, [])

    // Lógica simple del header
    useEffect(() => {
        if (!isHydrated) return

        const handleScroll = () => {
            const scrollY = window.scrollY
            const windowHeight = window.innerHeight
            
            // Si estamos en el inicio (primeros 10% de la pantalla), header siempre visible
            if (scrollY < windowHeight * 0.1) {
                setIsHeaderVisible(true)
                if (timeoutRef.current) {
                    clearTimeout(timeoutRef.current)
                    timeoutRef.current = null
                }
                return
            }
            
            // Si estamos en una sección, mostrar header y programar ocultar
            if (scrollY >= windowHeight * 0.1) {
                setIsHeaderVisible(true)
                
                // Limpiar timeout anterior
                if (timeoutRef.current) {
                    clearTimeout(timeoutRef.current)
                }
                
                // Programar ocultar después de 2 segundos
                timeoutRef.current = setTimeout(() => {
                    setIsHeaderVisible(false)
                }, 2000)
            }
        }

        window.addEventListener('scroll', handleScroll)
        
        // Limpiar al desmontar
        return () => {
            window.removeEventListener('scroll', handleScroll)
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
        }
    }, [isHydrated])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header 
            className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-500 ease-in-out ${
                isHydrated && isHeaderVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
            }`}
            style={{ 
                background: isHydrated ? 'rgba(0, 0, 0, 0.1)' : 'transparent',
                backdropFilter: isHydrated && isHeaderVisible ? 'blur(8px)' : 'none',
                WebkitBackdropFilter: isHydrated && isHeaderVisible ? 'blur(8px)' : 'none',
                borderBottom: isHydrated && isHeaderVisible ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
            }}
        >
            <div className="max-w-6xl mx-auto px-6 h-full">
                <div className="flex justify-between items-center h-full">
                    {/* Logo */}
                    <Link 
                        href="/" 
                        className="text-xl font-bold transition-colors duration-300"
                        style={{ 
                            color: isHydrated ? 'white' : 'white',
                            fontFamily: 'var(--font-playfair), serif',
                            letterSpacing: '0.05em'
                        }}
                    >
                        <span style={{ color: '#FFD700' }}>Cartagena</span> Fragmentada
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
                                        color: isActive ? '#FFD700' : (isHydrated ? 'white' : 'white'),
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
                        style={{ color: isHydrated ? 'white' : 'white' }}
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
                                        color: isActive ? '#FFD700' : (isHydrated ? 'white' : 'white'),
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
