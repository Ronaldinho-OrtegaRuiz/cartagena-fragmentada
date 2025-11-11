"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { menuItems } from "@/data/sections"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isHeaderVisible, setIsHeaderVisible] = useState(true) // Siempre visible por defecto
    const [isHydrated, setIsHydrated] = useState(false)
    const [historiaPalette, setHistoriaPalette] = useState(null)
    const timeoutRef = useRef(null)
    const pathname = usePathname()

    // Hidratación simple
    useEffect(() => {
        setIsHydrated(true)
    }, [])

    // Lógica simple del header
    useEffect(() => {
        if (!isHydrated) return

        // En la página de historia, header siempre visible (no hay scroll vertical en window)
        if (pathname === '/historia') {
            setIsHeaderVisible(true)
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
                timeoutRef.current = null
            }
            return
        }

        const handleScroll = () => {
            const scrollY = window.scrollY
            const windowHeight = window.innerHeight
            const isMobile = window.innerWidth < 768 // md breakpoint
            
            // En móviles, header siempre visible para mejor UX
            if (isMobile) {
                setIsHeaderVisible(true)
                return
            }
            
            // En desktop, mantener lógica original
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
    }, [isHydrated, pathname])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const isHistoriaPage = pathname === '/historia'

    const historiaHeader = historiaPalette?.header
    const logoTextColor = isHistoriaPage && historiaHeader ? historiaHeader.text : 'white'
    const logoAccentColor = isHistoriaPage && historiaHeader ? historiaHeader.accent : '#FFD700'
    const menuTextColor = isHistoriaPage && historiaHeader ? historiaHeader.menuText : (isHydrated ? 'white' : 'white')
    const menuActiveColor = isHistoriaPage && historiaHeader ? historiaHeader.menuActive : '#FFD700'
    const menuHoverColor = isHistoriaPage && historiaHeader ? historiaHeader.hover : '#FFD700'

    useEffect(() => {
        if (!isHistoriaPage) {
            setHistoriaPalette(null)
            return
        }

        const handlePaletteChange = (event) => {
            if (event.detail) {
                setHistoriaPalette(event.detail)
            }
        }

        if (typeof window !== 'undefined') {
            window.addEventListener('historia:palette-change', handlePaletteChange)
            if (window.__historiaPalette) {
                setHistoriaPalette(window.__historiaPalette)
            }
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('historia:palette-change', handlePaletteChange)
            }
        }
    }, [isHistoriaPage])
    
    return (
        <header 
            className={`fixed top-0 left-0 right-0 z-[100] h-16 transition-all duration-500 ease-in-out ${
                isHydrated && isHeaderVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
            }`}
            style={isHistoriaPage && historiaPalette ? {
                background: historiaPalette.header.background,
                borderBottom: isHydrated && isHeaderVisible ? `1px solid ${historiaPalette.header.border}` : 'none',
                boxShadow: '0 25px 50px -25px rgba(0,0,0,0.6)'
            } : { 
                background: isHydrated ? 'rgba(0, 0, 0, 0.1)' : 'transparent',
                backdropFilter: isHydrated && isHeaderVisible ? 'blur(8px)' : 'none',
                WebkitBackdropFilter: isHydrated && isHeaderVisible ? 'blur(8px)' : 'none',
                borderBottom: isHydrated && isHeaderVisible ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
            }}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 h-full">
                <div className="flex justify-between items-center h-full">
                    {/* Logo */}
                    <Link 
                        href="/" 
                        className="text-xl font-bold transition-colors duration-300"
                        style={{ 
                            color: logoTextColor,
                            fontFamily: 'var(--font-playfair), serif',
                            letterSpacing: '0.05em'
                        }}
                    >
                        <span style={{ color: logoAccentColor }}>Cartagena</span> Fragmentada
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {menuItems.map((item) => {
                            const isActive = pathname === item.href
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`text-sm font-medium transition-colors duration-300 ${isHistoriaPage ? 'historia-nav-link' : 'hover:text-yellow-400'}`}
                                    style={{ 
                                        color: isActive ? menuActiveColor : menuTextColor,
                                        fontFamily: 'var(--font-raleway), sans-serif',
                                        '--historia-hover-color': menuHoverColor
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
                        style={{ color: menuTextColor }}
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
                <div className="md:hidden backdrop-blur-sm border-t border-white/10" style={{ background: isHistoriaPage && historiaHeader ? 'rgba(0, 0, 0, 0.35)' : 'rgba(0, 0, 0, 0.3)' }}>
                    <div className="px-6 py-4 space-y-3">
                        {menuItems.map((item) => {
                            const isActive = pathname === item.href
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`block text-sm font-medium transition-colors duration-300 ${isHistoriaPage ? 'historia-nav-link' : 'hover:text-yellow-400'}`}
                                    style={{ 
                                        color: isActive ? menuActiveColor : menuTextColor,
                                        fontFamily: 'var(--font-raleway), sans-serif',
                                        '--historia-hover-color': menuHoverColor
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
