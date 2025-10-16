"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import ThemeToggle from "./ThemeToggle"
import { menuItems } from "@/data/sections"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const pathname = usePathname()


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50 shadow-lg" style={{ backgroundColor: 'var(--cartagena-sand)' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-xl font-title font-bold transition-colors duration-300 text-primary">
                            <span style={{ color: 'var(--cartagena-gold)' }}>Discover</span> Cartagena
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <nav className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {menuItems.map((item) => {
                                const isActive = pathname === item.href
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="px-3 py-2 rounded-md text-sm font-ui font-medium transition-all duration-300 hover:scale-105"
                                        style={{ 
                                            color: isActive ? 'var(--cartagena-coral)' : 'var(--text-button)',
                                            backgroundColor: isActive ? 'var(--cartagena-gold)' : 'transparent'
                                        }}
                                        onMouseEnter={(e) => {
                                            if (!isActive) {
                                                e.target.style.color = 'var(--cartagena-coral)';
                                                e.target.style.backgroundColor = 'var(--cartagena-gold)';
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            if (!isActive) {
                                                e.target.style.color = 'var(--text-button)';
                                                e.target.style.backgroundColor = 'transparent';
                                            }
                                        }}
                                    >
                                        {item.name}
                                    </Link>
                                )
                            })}
                        </div>
                    </nav>

                    {/* Theme Toggle Button */}
                    <div className="hidden md:block">
                        <ThemeToggle />
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center space-x-2">
                        <ThemeToggle />
                        <button
                            onClick={toggleMenu}
                            className="focus:outline-none transition-colors duration-300 p-2 rounded-md"
                            style={{ color: 'var(--cartagena-soft-black)' }}
                            onMouseEnter={(e) => {
                                e.target.style.color = 'var(--cartagena-coral)';
                                e.target.style.backgroundColor = 'var(--cartagena-gold)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.color = 'var(--cartagena-soft-black)';
                                e.target.style.backgroundColor = 'transparent';
                            }}
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t" style={{ 
                        backgroundColor: 'var(--cartagena-sand)',
                        borderColor: 'var(--cartagena-gold)'
                    }}>
                        {menuItems.map((item) => {
                            const isActive = pathname === item.href
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="block px-3 py-2 rounded-md text-base font-ui font-medium transition-all duration-300"
                                    style={{ 
                                        color: isActive ? 'var(--cartagena-coral)' : 'var(--cartagena-soft-black)',
                                        backgroundColor: isActive ? 'var(--cartagena-gold)' : 'transparent'
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!isActive) {
                                            e.target.style.color = 'var(--cartagena-coral)';
                                            e.target.style.backgroundColor = 'var(--cartagena-gold)';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!isActive) {
                                            e.target.style.color = 'var(--cartagena-soft-black)';
                                            e.target.style.backgroundColor = 'transparent';
                                        }
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
