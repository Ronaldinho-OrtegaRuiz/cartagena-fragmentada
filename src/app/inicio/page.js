"use client"

import { useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { sections } from "@/data/sections"
import HistorySlider from "@/components/ui/HistorySlider"

export default function Inicio() {
    const parallaxRefs = useRef([])
    const router = useRouter()

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.pageYOffset
            const windowHeight = window.innerHeight
            const documentHeight = document.documentElement.scrollHeight

            parallaxRefs.current.forEach((ref, index) => {
                if (ref) {
                    // Limitar el efecto parallax para evitar scroll infinito
                    const maxScroll = documentHeight - windowHeight
                    const limitedScroll = Math.min(scrolled, maxScroll)
                    
                    // Velocidad más sutil para evitar problemas
                    const speed = 0.1 + (index * 0.05)
                    const translateY = limitedScroll * speed
                    
                    // Limitar el movimiento para evitar que se salga del viewport
                    const maxTranslate = windowHeight * 0.5
                    const limitedTranslate = Math.min(Math.max(translateY, -maxTranslate), maxTranslate)
                    
                    ref.style.transform = `translateY(${limitedTranslate}px)`
                }
            })
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const addToRefs = (el) => {
        if (el && !parallaxRefs.current.includes(el)) {
            parallaxRefs.current.push(el)
        }
    }

    return (
        <div className="relative overflow-hidden">
            {/* Hero Section con Parallax */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div 
                    ref={addToRefs}
                    className="absolute inset-0 bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 parallax-bg"
                    style={{
                        backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><radialGradient id="a" cx="50%" cy="50%"><stop offset="0%" stop-color="%23FFD700" stop-opacity="0.8"/><stop offset="100%" stop-color="%23FF6B6B" stop-opacity="0.4"/></radialGradient></defs><rect width="100%" height="100%" fill="url(%23a)"/></svg>')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                />
                
                {/* Overlay con patrón */}
                <div className="absolute inset-0 bg-black/20" />
                
                {/* Contenido Hero */}
                <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className="text-6xl md:text-8xl font-title font-bold mb-6 drop-shadow-2xl animate-fade-in-up">
                        <span className="block text-yellow-300 animate-glow">Discover</span>
                        <span className="block text-white">Cartagena</span>
                    </h1>
                    <p className="text-xl md:text-2xl font-body mb-8 text-yellow-100 drop-shadow-lg animate-fade-in-up-delayed">
                        La Heroica Ciudad Amurallada te espera
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
                        <button className="px-8 py-4 bg-yellow-400 text-black font-ui font-semibold rounded-full hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                            Explorar Ahora
                        </button>
                        <button className="px-8 py-4 border-2 border-white text-white font-ui font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 glass">
                            Ver Historia
                        </button>
                    </div>
                </div>

                {/* Elementos decorativos flotantes */}
                <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-300/20 rounded-full blur-xl animate-float" />
                <div className="absolute bottom-20 right-10 w-32 h-32 bg-orange-400/20 rounded-full blur-xl animate-float-delayed" />
                <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-red-400/20 rounded-full blur-xl animate-float" />
                <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-yellow-200/30 rounded-full blur-lg animate-float-delayed" />
            </section>

            {/* Secciones */}
            {sections.map((section, index) => {
                // Sección especial para Historia
                if (section.title === "Historia") {
                    return (
                        <section 
                            key={section.id}
                            className="relative min-h-screen bg-gradient-to-br from-amber-800 via-orange-700 to-red-800"
                        >
                            {/* Textura de Piedra Colonial - Solo en el fondo */}
                            <div 
                                className="absolute inset-0 opacity-25"
                                style={{
                                    backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="stone" width="100" height="100" patternUnits="userSpaceOnUse"><!-- Piedra 1 --><rect x="2" y="3" width="28" height="22" fill="none" stroke="white" stroke-width="0.8" opacity="0.4"/><path d="M8 12 L22 12 M15 6 L15 18" stroke="white" stroke-width="0.4" opacity="0.3"/><!-- Piedra 2 --><rect x="32" y="5" width="32" height="25" fill="none" stroke="white" stroke-width="0.8" opacity="0.4"/><path d="M40 15 L55 15 M47 8 L47 22" stroke="white" stroke-width="0.4" opacity="0.3"/><!-- Piedra 3 --><rect x="3" y="30" width="25" height="28" fill="none" stroke="white" stroke-width="0.8" opacity="0.4"/><path d="M10 40 L20 40 M15 32 L15 48" stroke="white" stroke-width="0.4" opacity="0.3"/><!-- Piedra 4 --><rect x="30" y="32" width="30" height="20" fill="none" stroke="white" stroke-width="0.8" opacity="0.4"/><path d="M38 40 L52 40 M45 35 L45 47" stroke="white" stroke-width="0.4" opacity="0.3"/><!-- Piedra 5 --><rect x="62" y="2" width="26" height="30" fill="none" stroke="white" stroke-width="0.8" opacity="0.4"/><path d="M70 12 L80 12 M75 5 L75 25" stroke="white" stroke-width="0.4" opacity="0.3"/><!-- Piedra 6 --><rect x="62" y="35" width="31" height="24" fill="none" stroke="white" stroke-width="0.8" opacity="0.4"/><path d="M70 45 L85 45 M77 38 L77 52" stroke="white" stroke-width="0.4" opacity="0.3"/><!-- Piedra 7 --><rect x="2" y="60" width="24" height="25" fill="none" stroke="white" stroke-width="0.8" opacity="0.4"/><path d="M8 70 L18 70 M13 62 L13 78" stroke="white" stroke-width="0.4" opacity="0.3"/><!-- Piedra 8 --><rect x="28" y="55" width="28" height="30" fill="none" stroke="white" stroke-width="0.8" opacity="0.4"/><path d="M36 68 L48 68 M42 58 L42 78" stroke="white" stroke-width="0.4" opacity="0.3"/><!-- Piedra 9 --><rect x="58" y="62" width="25" height="23" fill="none" stroke="white" stroke-width="0.8" opacity="0.4"/><path d="M65 72 L75 72 M70 65 L70 80" stroke="white" stroke-width="0.4" opacity="0.3"/><!-- Grietas principales --><path d="M0 50 L100 50" stroke="white" stroke-width="0.6" opacity="0.2"/><path d="M50 0 L50 100" stroke="white" stroke-width="0.6" opacity="0.2"/><path d="M0 15 L100 15" stroke="white" stroke-width="0.4" opacity="0.15"/><path d="M0 85 L100 85" stroke="white" stroke-width="0.4" opacity="0.15"/><path d="M15 0 L15 100" stroke="white" stroke-width="0.4" opacity="0.15"/><path d="M85 0 L85 100" stroke="white" stroke-width="0.4" opacity="0.15"/></pattern></defs><rect width="100%" height="100%" fill="url(%23stone)"/></svg>')`,
                                    backgroundSize: '120px 120px',
                                    backgroundRepeat: 'repeat',
                                    backgroundPosition: '0 0',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0
                                }}
                            />
                            
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/30" />
                            
                            {/* Contenido dividido en dos mitades */}
                            <div className="relative z-10 min-h-screen flex items-center px-4 sm:px-6 lg:px-8">
                                <div className="max-w-7xl mx-auto w-full">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                                        
                                        {/* Mitad izquierda - Texto introductorio */}
                                        <div className="text-white animate-slide-in-left">
                                            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-title font-bold mb-6 drop-shadow-2xl">
                                                {section.title}
                                            </h2>
                                            <p className="text-lg md:text-xl font-body mb-8 text-yellow-100 drop-shadow-lg leading-relaxed">
                                                {section.description}
                                            </p>
                                            
                                            {/* Highlights en formato vertical */}
                                            <div className="space-y-4 mb-8">
                                                {section.highlights.map((highlight, highlightIndex) => (
                                                    <div 
                                                        key={highlightIndex}
                                                        className="glass rounded-lg p-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
                                                        style={{ animationDelay: `${highlightIndex * 0.2}s` }}
                                                    >
                                                        <span className="text-base md:text-lg font-ui font-medium flex items-center">
                                                            <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                                                            {highlight}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                            
                                            {/* Botón CTA */}
                                            <button 
                                                onClick={() => router.push('/historia')}
                                                className="px-8 py-4 glass border border-white/30 text-white font-ui font-semibold rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-105 animate-fade-in-up-delayed"
                                            >
                                                Explorar Historia Completa
                                            </button>
                                        </div>
                                        
                                        {/* Mitad derecha - Slider de fotos */}
                                        <div className="animate-slide-in-right">
                                            <HistorySlider />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Elementos decorativos específicos para Historia */}
                            <div className="absolute top-10 right-10 w-20 h-20 bg-amber-300/20 rounded-full blur-xl animate-float hidden sm:block" />
                            <div className="absolute bottom-10 left-10 w-24 h-24 bg-orange-400/20 rounded-full blur-xl animate-float-delayed hidden sm:block" />
                            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-red-400/20 rounded-full blur-xl animate-float hidden sm:block" />
                        </section>
                    )
                }

                // Sección especial para Sitios Turísticos
                if (section.title === "Sitios Turísticos") {
                    return (
                        <section 
                            key={section.id}
                            className="relative min-h-screen bg-gradient-to-br from-slate-800 via-gray-700 to-stone-800"
                        >
                            {/* Fondo Parallax */}
                            <div 
                                ref={addToRefs}
                                className="absolute inset-0 opacity-20 parallax-bg"
                                style={{
                                    backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><pattern id="colonial" width="80" height="80" patternUnits="userSpaceOnUse"><path d="M 0 0 L 80 0 L 80 80 L 0 80 Z" fill="none" stroke="white" stroke-width="1" opacity="0.1"/><path d="M 20 20 L 60 20 L 60 60 L 20 60 Z" fill="none" stroke="white" stroke-width="1" opacity="0.05"/><circle cx="40" cy="40" r="15" fill="none" stroke="white" stroke-width="1" opacity="0.08"/></pattern></defs><rect width="100%" height="100%" fill="url(%23colonial)"/></svg>')`,
                                    backgroundSize: '120px 120px'
                                }}
                            />
                            
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/30" />
                            
                            {/* Contenido dividido en dos mitades */}
                            <div className="relative z-10 min-h-screen flex items-center px-4 sm:px-6 lg:px-8">
                                <div className="max-w-7xl mx-auto w-full">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                                        
                                        {/* Mitad izquierda - Imagen fija */}
                                        <div className="relative animate-slide-in-left">
                                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                                <img
                                                    src="https://i.pinimg.com/1200x/0f/29/12/0f291208d9653b3bad8f6fc44c1f32e1.jpg"
                                                    alt="Cartagena de Indias - Vista panorámica de las murallas y el mar"
                                                    className="w-full h-96 md:h-[500px] object-cover transition-all duration-1000 ease-in-out hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                                                
                                                {/* Overlay con información de la imagen */}
                                                <div className="absolute bottom-4 left-4 right-4 text-white">
                                                    <p className="text-sm font-ui opacity-90">
                                                        Vista panorámica de Cartagena de Indias
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Mitad derecha - Narrativa fluida */}
                                        <div className="text-white animate-slide-in-right">
                                            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-title font-bold mb-6 drop-shadow-2xl">
                                                {section.title}
                                            </h2>
                                            
                                            <div className="space-y-6 mb-8">
                                                <p className="text-lg md:text-xl font-body drop-shadow-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s', color: '#FFFFFF !important' }}>
                                                    {section.description}
                                                </p>
                                                
                                                <p className="text-base md:text-lg font-body drop-shadow-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s', color: '#FFFFFF !important' }}>
                                                    Desde las majestuosas murallas que han resistido siglos de historia hasta las plazas coloniales que susurran secretos del pasado, cada rincón de Cartagena cuenta una historia única.
                                                </p>
                                                
                                                <p className="text-base md:text-lg font-body drop-shadow-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.6s', color: '#FFFFFF !important' }}>
                                                    Descubre la magia de la Heroica Ciudad Amurallada, donde la arquitectura colonial se funde con la brisa caribeña y cada calle empedrada te lleva a un nuevo descubrimiento.
                                                </p>
                                            </div>
                                            
                                            {/* Highlights en formato narrativo */}
                                            <div className="space-y-3 mb-8">
                                                {section.highlights.map((highlight, highlightIndex) => (
                                                    <div 
                                                        key={highlightIndex}
                                                        className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
                                                        style={{ animationDelay: `${0.8 + highlightIndex * 0.1}s` }}
                                                    >
                                                        <span className="text-base md:text-lg font-ui font-medium flex items-center text-white">
                                                            <span className="w-2 h-2 bg-amber-400 rounded-full mr-3 animate-pulse"></span>
                                                            {highlight}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                            
                                            {/* Botón CTA */}
                                            <button 
                                                onClick={() => router.push('/sitios-turisticos')}
                                                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-ui font-semibold rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
                                                style={{ animationDelay: '1.2s' }}
                                            >
                                                Explorar Sitios Turísticos
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Elementos decorativos específicos para Sitios Turísticos */}
                            <div className="absolute top-10 right-10 w-20 h-20 bg-amber-300/20 rounded-full blur-xl animate-float hidden sm:block" />
                            <div className="absolute bottom-10 left-10 w-24 h-24 bg-stone-400/20 rounded-full blur-xl animate-float-delayed hidden sm:block" />
                            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gray-400/20 rounded-full blur-xl animate-float hidden sm:block" />
                        </section>
                    )
                }

                // Secciones normales para el resto
                return (
                    <section 
                        key={section.id}
                        className={`relative min-h-screen flex items-center justify-center ${
                            index % 2 === 0 ? 'bg-gradient-to-br from-blue-600 to-purple-700' : 'bg-gradient-to-br from-emerald-600 to-teal-700'
                        }`}
                    >
                        {/* Fondo Parallax */}
                        <div 
                            ref={addToRefs}
                            className="absolute inset-0 opacity-30 parallax-bg"
                            style={{
                                backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse"><path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" stroke-width="1" opacity="0.3"/></pattern></defs><rect width="100%" height="100%" fill="url(%23grid)"/></svg>')`,
                                backgroundSize: '100px 100px'
                            }}
                        />
                        
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/40" />
                        
                        {/* Contenido */}
                        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                            <div className="mb-8">
                                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-title font-bold mb-4 md:mb-6 drop-shadow-2xl animate-fade-in-up">
                                    {section.title}
                                </h2>
                                <p className="text-base sm:text-lg md:text-xl font-body mb-6 md:mb-8 text-gray-200 drop-shadow-lg max-w-2xl mx-auto animate-fade-in-up-delayed px-4">
                                    {section.description}
                                </p>
                            </div>
                            
                            {/* Highlights Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-8">
                                {section.highlights.map((highlight, highlightIndex) => (
                                    <div 
                                        key={highlightIndex}
                                        className="glass rounded-lg p-3 md:p-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 animate-scale-in"
                                        style={{ animationDelay: `${highlightIndex * 0.1}s` }}
                                    >
                                        <span className="text-xs sm:text-sm md:text-base font-ui font-medium">
                                            {highlight}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            
                            {/* Botón CTA */}
                            <button className="px-6 md:px-8 py-3 md:py-4 glass border border-white/30 text-white font-ui font-semibold rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-105 animate-fade-in-up-delayed text-sm md:text-base">
                                Descubrir {section.title}
                            </button>
                        </div>

                        {/* Elementos decorativos específicos por sección - Responsive */}
                        {index === 0 && (
                            <>
                                <div className="absolute top-5 md:top-10 right-5 md:right-10 w-16 md:w-24 h-16 md:h-24 bg-yellow-300/20 rounded-full blur-xl animate-float hidden sm:block" />
                                <div className="absolute bottom-5 md:bottom-10 left-5 md:left-10 w-20 md:w-32 h-20 md:h-32 bg-orange-400/20 rounded-full blur-xl animate-float-delayed hidden sm:block" />
                            </>
                        )}
                        {index === 3 && (
                            <>
                                <div className="absolute top-1/2 left-5 md:left-10 w-12 md:w-20 h-12 md:h-20 bg-blue-300/20 rounded-full blur-xl animate-float hidden sm:block" />
                                <div className="absolute bottom-1/2 right-5 md:right-10 w-16 md:w-28 h-16 md:h-28 bg-purple-400/20 rounded-full blur-xl animate-float-delayed hidden sm:block" />
                            </>
                        )}
                        {index === 4 && (
                            <>
                                <div className="absolute top-1/4 right-1/3 w-12 md:w-18 h-12 md:h-18 bg-emerald-300/20 rounded-full blur-xl animate-float hidden sm:block" />
                                <div className="absolute bottom-1/4 left-1/3 w-16 md:w-26 h-16 md:h-26 bg-teal-400/20 rounded-full blur-xl animate-float-delayed hidden sm:block" />
                            </>
                        )}
                        {index === 5 && (
                            <>
                                <div className="absolute top-1/3 left-1/4 w-14 md:w-22 h-14 md:h-22 bg-blue-300/20 rounded-full blur-xl animate-float hidden sm:block" />
                                <div className="absolute bottom-1/3 right-1/4 w-18 md:w-30 h-18 md:h-30 bg-purple-400/20 rounded-full blur-xl animate-float-delayed hidden sm:block" />
                            </>
                        )}
                    </section>
                )
            })}

            {/* Sección Final con Call to Action */}
            <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-500 via-orange-600 to-red-600">
                <div 
                    ref={addToRefs}
                    className="absolute inset-0 opacity-20 parallax-bg"
                    style={{
                        backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><radialGradient id="b" cx="50%" cy="50%"><stop offset="0%" stop-color="%23FFD700" stop-opacity="0.6"/><stop offset="100%" stop-color="%23FF6B6B" stop-opacity="0.2"/></radialGradient></defs><rect width="100%" height="100%" fill="url(%23b)"/></svg>')`,
                        backgroundSize: 'cover'
                    }}
                />
                
                <div className="absolute inset-0 bg-black/30" />
                
                <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-title font-bold mb-4 md:mb-6 drop-shadow-2xl animate-fade-in-up">
                        ¿Listo para la Aventura?
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-body mb-6 md:mb-8 text-yellow-100 drop-shadow-lg max-w-2xl mx-auto animate-fade-in-up-delayed px-4">
                        Cartagena de Indias te espera con sus historias, colores y magia caribeña
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center animate-scale-in px-4">
                        <button className="px-6 md:px-10 py-3 md:py-5 bg-yellow-400 text-black font-ui font-bold text-sm md:text-lg rounded-full hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl animate-glow">
                            Comenzar Viaje
                        </button>
                        <button className="px-6 md:px-10 py-3 md:py-5 border-2 border-white text-white font-ui font-bold text-sm md:text-lg rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 glass">
                            Ver Galería
                        </button>
                    </div>
                </div>

                {/* Elementos decorativos finales - Responsive */}
                <div className="absolute top-10 md:top-20 left-10 md:left-20 w-16 md:w-24 h-16 md:h-24 bg-yellow-300/30 rounded-full blur-xl animate-float hidden sm:block" />
                <div className="absolute bottom-10 md:bottom-20 right-10 md:right-20 w-20 md:w-32 h-20 md:h-32 bg-orange-400/30 rounded-full blur-xl animate-float-delayed hidden sm:block" />
                <div className="absolute top-1/2 left-1/3 w-12 md:w-20 h-12 md:h-20 bg-red-400/30 rounded-full blur-xl animate-float hidden sm:block" />
                <div className="absolute top-1/3 right-1/3 w-10 md:w-16 h-10 md:h-16 bg-yellow-200/30 rounded-full blur-xl animate-float-delayed hidden sm:block" />
                <div className="absolute top-1/4 left-1/2 w-8 md:w-14 h-8 md:h-14 bg-orange-300/25 rounded-full blur-lg animate-float hidden sm:block" />
                <div className="absolute bottom-1/4 left-1/5 w-12 md:w-18 h-12 md:h-18 bg-red-300/25 rounded-full blur-lg animate-float-delayed hidden sm:block" />
            </section>
        </div>
    )
}