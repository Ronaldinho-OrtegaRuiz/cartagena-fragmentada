"use client"

import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { sections } from "@/data/sections"
import HistorySlider from "@/components/ui/HistorySlider"

export default function Inicio() {
    const parallaxRefs = useRef([])
    const sectionRefs = useRef([])
    const [visibleSections, setVisibleSections] = useState(new Set())
    const router = useRouter()

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.pageYOffset
            const windowHeight = window.innerHeight
            const documentHeight = document.documentElement.scrollHeight

            // Efecto parallax para fondos
            parallaxRefs.current.forEach((ref, index) => {
                if (ref) {
                    const maxScroll = documentHeight - windowHeight
                    const limitedScroll = Math.min(scrolled, maxScroll)
                    
                    const speed = 0.1 + (index * 0.05)
                    const translateY = limitedScroll * speed
                    
                    const maxTranslate = windowHeight * 0.5
                    const limitedTranslate = Math.min(Math.max(translateY, -maxTranslate), maxTranslate)
                    
                    ref.style.transform = `translateY(${limitedTranslate}px)`
                }
            })

            // Detectar secciones visibles para animaciones
            const newVisibleSections = new Set()
            sectionRefs.current.forEach((section, index) => {
                if (section) {
                    const rect = section.getBoundingClientRect()
                    const isVisible = rect.top < windowHeight * 0.8 && rect.bottom > windowHeight * 0.2
                    const wasVisible = visibleSections.has(index)
                    
                    if (isVisible) {
                        newVisibleSections.add(index)
                        
                        // Aplicar animaciones cada vez que la sección sea visible
                        const animatedElements = section.querySelectorAll('.animate-slide-in-left, .animate-slide-in-right, .animate-fade-in-up, .animate-fade-in-up-delayed, .animate-scale-in')
                        const elementsArray = Array.from(animatedElements)
                        
                        // Detectar dirección del scroll
                        const scrollDirection = scrolled > (section.dataset.lastScroll || 0) ? 'down' : 'up'
                        section.dataset.lastScroll = scrolled
                        
                        elementsArray.forEach((element, elementIndex) => {
                            // Aplicar animación con delay según la dirección
                            const delay = scrollDirection === 'down' 
                                ? elementIndex * 200  // Orden normal al bajar
                                : (elementsArray.length - 1 - elementIndex) * 200  // Orden invertido al subir
                            
                            setTimeout(() => {
                                if (element.classList.contains('animate-slide-in-left')) {
                                    element.style.opacity = '1'
                                    element.style.transform = 'translateX(0)'
                                } else if (element.classList.contains('animate-slide-in-right')) {
                                    element.style.opacity = '1'
                                    element.style.transform = 'translateX(0)'
                                } else if (element.classList.contains('animate-scale-in')) {
                                    element.style.opacity = '1'
                                    element.style.transform = 'scale(1)'
                                } else {
                                    element.style.opacity = '1'
                                    element.style.transform = 'translateY(0)'
                                }
                            }, delay)
                        })
                    } else {
                        // Ocultar elementos cuando no son visibles
                        const animatedElements = section.querySelectorAll('.animate-slide-in-left, .animate-slide-in-right, .animate-fade-in-up, .animate-fade-in-up-delayed, .animate-scale-in')
                        
                        animatedElements.forEach((element) => {
                            if (element.classList.contains('animate-slide-in-left')) {
                                element.style.opacity = '0'
                                element.style.transform = 'translateX(-50px)'
                            } else if (element.classList.contains('animate-slide-in-right')) {
                                element.style.opacity = '0'
                                element.style.transform = 'translateX(50px)'
                            } else if (element.classList.contains('animate-scale-in')) {
                                element.style.opacity = '0'
                                element.style.transform = 'scale(0.8)'
                            } else {
                                element.style.opacity = '0'
                                element.style.transform = 'translateY(30px)'
                            }
                        })
                    }
                }
            })
            
            setVisibleSections(newVisibleSections)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll() // Llamar una vez al montar
        
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const addToRefs = (el) => {
        if (el && !parallaxRefs.current.includes(el)) {
            parallaxRefs.current.push(el)
        }
    }

    return (
        <div className="relative overflow-hidden">
            {/* Postal Animada - Estilo Costero */}
            <section 
                ref={(el) => {
                    if (el && !sectionRefs.current.includes(el)) {
                        sectionRefs.current.push(el)
                    }
                }}
                className="relative overflow-hidden min-h-screen"
            >
                {/* Imagen aérea de Cartagena */}
                <div className="absolute inset-0">
                    <img 
                        src="https://i.pinimg.com/1200x/bd/7e/bb/bd7ebb2044ce209a0f6579d3138eb108.jpg"
                        alt="Cartagena de Indias - Vista panorámica"
                        className="w-full h-full object-cover"
                    />
                    {/* Overlay con gradiente desde negro translúcido abajo hacia transparente arriba */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                
                {/* Contenido flotante sobre el gradiente */}
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Texto principal con tipografía serif elegante */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 sm:mb-6 animate-fade-in-up leading-tight" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                            Cartagena vibra entre historia y mar
                        </h1>
                        
                        {/* Subtítulo más ligero */}
                        <p className="text-lg md:text-xl font-light text-white/90 max-w-2xl mx-auto mb-8 sm:mb-12 animate-fade-in-up-delayed leading-relaxed" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
                            Donde el mar abraza la historia y las palmas susurran leyendas, Cartagena vibra con alma propia. Déjate llevar por sus colores, sus calles y sus memorias.
                        </p>
                        
                        {/* Botones con estilo costero */}
                        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 animate-fade-in-up-delayed">
                            {sections.map((section, index) => (
                                <button
                                    key={section.id}
                                    onClick={() => {
                                        const element = document.getElementById(`section-${section.id}`)
                                        if (element) {
                                            element.scrollIntoView({ behavior: 'smooth' })
                                        }
                                    }}
                                    className="px-4 sm:px-6 py-2 sm:py-3 bg-white/20 rounded-full text-white font-medium hover:bg-white/30 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm border border-white/30 text-sm sm:text-base"
                                    style={{ 
                                        animationDelay: `${0.8 + index * 0.1}s`,
                                        textShadow: '1px 1px 3px rgba(0,0,0,0.8)',
                                        boxShadow: '0 4px 8px rgba(0,0,0,0.3)'
                                    }}
                                >
                                    {section.title}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                
                {/* Elementos decorativos flotantes sutiles */}
                <div className="absolute top-10 left-10 w-16 h-16 bg-white/10 rounded-full blur-xl animate-float hidden sm:block" />
                <div className="absolute bottom-10 right-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float-delayed hidden sm:block" />
                <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white/10 rounded-full blur-xl animate-float hidden sm:block" />
            </section>


            {/* Secciones */}
            {sections.map((section, index) => {
                // Sección especial para Historia
                if (section.title === "Historia") {
                    return (
                        <section 
                            ref={(el) => {
                                if (el && !sectionRefs.current.includes(el)) {
                                    sectionRefs.current.push(el)
                                }
                            }}
                            id={`section-${section.id}`}
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
                            <div className="relative z-10 min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                                <div className="max-w-7xl mx-auto w-full">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                                        
                                        {/* Mitad izquierda - Texto introductorio */}
                                        <div className="text-white">
                                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-title font-bold mb-4 sm:mb-6 drop-shadow-2xl animate-fade-in-up">
                                                {section.title}
                                            </h2>
                                            <p className="text-lg sm:text-xl md:text-2xl font-body mb-6 sm:mb-8 text-yellow-100 drop-shadow-lg leading-relaxed animate-fade-in-up">
                                                {section.description}
                                            </p>
                                            
                                            {/* Highlights en formato vertical */}
                                            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                                                {section.highlights.map((highlight, highlightIndex) => (
                                                    <div 
                                                        key={highlightIndex}
                                                        className="glass rounded-lg p-3 sm:p-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
                                                        style={{ animationDelay: `${highlightIndex * 0.1}s` }}
                                                    >
                                                        <span className="text-sm sm:text-lg md:text-xl font-ui font-medium flex items-center text-white">
                                                            <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                                                            {highlight}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                            
                                            {/* Botón CTA - Solo visible en desktop */}
                                            <button 
                                                onClick={() => router.push('/historia')}
                                                className="hidden lg:block px-6 sm:px-8 py-3 sm:py-4 glass border border-white/30 text-white font-ui font-semibold rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-105 animate-fade-in-up text-sm sm:text-base"
                                                style={{ animationDelay: '0.4s' }}
                                            >
                                                Explorar Historia Completa
                                            </button>
                                        </div>
                                        
                                        {/* Mitad derecha - Slider de fotos */}
                                        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                                            <HistorySlider />
                                            
                                            {/* Botón CTA - Solo visible en móviles, debajo del slider */}
                                            <div className="lg:hidden mt-6 text-center">
                                                <button 
                                                    onClick={() => router.push('/historia')}
                                                    className="px-6 py-3 glass border border-white/30 text-white font-ui font-semibold rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-105 animate-fade-in-up text-sm"
                                                    style={{ animationDelay: '0.6s' }}
                                                >
                                                    Explorar Historia Completa
                                                </button>
                                            </div>
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

                // Sección especial para Playas - Diseño narrativo costero
                if (section.title === "Playas") {
                    return (
                        <section 
                            ref={(el) => {
                                if (el && !sectionRefs.current.includes(el)) {
                                    sectionRefs.current.push(el)
                                }
                            }}
                            id={`section-${section.id}`}
                            key={section.id} 
                            className="relative min-h-screen overflow-hidden"
                            style={{
                                background: 'linear-gradient(135deg, #A7E3E2 0%, #8DD4D0 25%, #7FD1C3 50%, #6BC5D6 75%, #5BC0DE 100%)',
                                animation: 'waveBackground 18s ease-in-out infinite'
                            }}
                        >
                            {/* FONDO MAR - Animación de oleaje en todo el fondo */}
                            <div className="absolute inset-0 overflow-hidden">
                                <div className="wave-layer wave-1"></div>
                                <div className="wave-layer wave-2"></div>
                                <div className="wave-layer wave-3"></div>
                                <div className="wave-layer wave-4"></div>
                            </div>
                            
                            {/* CONTENEDOR PRINCIPAL - Comportamiento diferente en móvil vs desktop */}
                            {/* En móvil: flex column normal, en desktop: posicionamiento absoluto para efecto */}
                            <div className="relative flex flex-col lg:block min-h-screen">
                                
                                {/* CAPA DE TIERRA - Gradiente para la orilla */}
                                <div 
                                    className="relative lg:absolute top-0 left-0 w-full z-20"
                                    style={{
                                        minHeight: '40vh',
                                        background: 'linear-gradient(to bottom, #F5E6D3 0%, #E8D5B7 30%, #D4C4A8 60%, transparent 100%)'
                                    }}
                                >
                                    {/* Partículas de arena flotantes */}
                                    <div className="absolute inset-0 overflow-hidden">
                                        <div className="absolute top-16 left-12 w-1.5 h-1.5 bg-white/50 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
                                        <div className="absolute top-24 right-16 w-1 h-1 bg-white/40 rounded-full animate-float-delayed" style={{ animationDelay: '1.5s' }}></div>
                                        <div className="absolute bottom-24 left-1/3 w-1.5 h-1.5 bg-white/45 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
                                        <div className="absolute bottom-16 right-1/4 w-1 h-1 bg-white/35 rounded-full animate-float-delayed" style={{ animationDelay: '4.5s' }}></div>
                                    </div>
                                    
                                    {/* Elementos SVG de brisa */}
                                    <div className="absolute top-20 left-16 w-16 h-16 opacity-20 animate-breeze hidden sm:block">
                                        <svg viewBox="0 0 100 100" className="w-full h-full text-amber-600">
                                            <path d="M10 40 Q25 25 40 40 T70 40" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.6"/>
                                            <path d="M10 50 Q25 35 40 50 T70 50" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.4"/>
                                        </svg>
                                    </div>
                                    
                                    <div className="absolute top-32 right-20 w-12 h-12 opacity-15 animate-breeze-delayed hidden sm:block">
                                        <svg viewBox="0 0 100 100" className="w-full h-full text-amber-500">
                                            <path d="M10 35 Q20 20 35 35 T60 35" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5"/>
                                            <path d="M10 45 Q20 30 35 45 T60 45" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.3"/>
                                        </svg>
                                    </div>
                                    
                                    {/* TEXTO EN LA TIERRA */}
                                    <div className="relative z-30 flex items-start justify-start px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8 sm:pb-12 lg:pb-0" style={{ minHeight: '40vh' }}>
                                        <div className="text-left max-w-2xl">
                                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-title font-bold mb-4 sm:mb-6 text-amber-900 drop-shadow-lg animate-fade-in-up">
                                                {section.title}
                                            </h2>
                                            
                                            {/* Texto introductorio con efecto de brisa sutil */}
                                            <div className="space-y-3 sm:space-y-4 animate-fade-in-up-delayed">
                                                <p className="text-base sm:text-lg md:text-xl font-body text-amber-800 drop-shadow-md leading-relaxed animate-text-breeze">
                                                    Aquí el mar no solo se ve, se siente.
                                                </p>
                                                <p className="text-sm sm:text-base md:text-lg font-body text-amber-800 drop-shadow-sm leading-relaxed animate-text-breeze-delayed">
                                                    Descubre las playas que hacen de Cartagena un suspiro del Caribe.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* CARDS EN EL MAR - En móvil: flujo normal, en desktop: posición absoluta */}
                                <div className="relative lg:absolute z-20 w-full lg:top-[40vh] lg:h-[60vh] flex flex-col lg:justify-center">
                                {/* Contenedor dividido en 6 columnas */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 px-4 sm:px-6 md:px-8 py-8 sm:py-12 lg:py-8 lg:items-start lg:h-full">
                                    {[
                                        { name: "Bocagrande", category: "Urbana", image: "https://blog.redbus.co/wp-content/uploads/2020/06/BOCAGRANDE-5.jpg", position: "self-start", height: "h-44", delay: "0s" },
                                        { name: "Marbella", category: "Local", image: "https://www.isouthamerica.com/wp-content/uploads/2021/11/marbella-beach-cartagena.jpg", position: "self-end", height: "h-56", delay: "0.5s" },
                                        { name: "La Boquilla", category: "Tradicional", image: "https://i.pinimg.com/originals/c4/47/92/c44792992dd71bb3924fce6eafb5b99c.jpg", position: "self-center", height: "h-52", delay: "1s" },
                                        { name: "Islas del Rosario", category: "Cristalina", image: "https://www.cartagenaexplorer.com/wp-content/uploads/2020/07/Depositphotos_156273740_xl-2015-scaled.jpg", position: "self-end", height: "h-48", delay: "1.5s" },
                                        { name: "Playa Blanca", category: "Paradisíaca", image: "https://i.pinimg.com/736x/1b/a1/66/1ba166f7b8e21c1e28eeb4a4760f8baa.jpg", position: "self-start", height: "h-60", delay: "2s" },
                                        { name: "Cholón", category: "Fiesta", image: "https://cdn.yate.co/img/blog/2024/17/cholon-75t.jpg", position: "self-center", height: "h-50", delay: "2.5s" }
                                    ].map((beach, index) => {
                                        // Aplicar posicionamiento solo en desktop (lg y superiores)
                                        const positionClass = beach.position === 'self-start' ? 'lg:self-start' : 
                                                             beach.position === 'self-end' ? 'lg:self-end' : 
                                                             'lg:self-center';
                                        // Altura: en móvil todas iguales, en desktop diferentes
                                        const heightClass = `h-48 sm:h-52 lg:${beach.height}`;
                                        return (
                                        <div 
                                            key={index}
                                            className={`${heightClass} ${positionClass} beach-card-floating rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 cursor-pointer border border-white/30 animate-fade-in-up`}
                                            onClick={() => router.push('/playas')}
                                            style={{ 
                                                animationDelay: beach.delay,
                                                filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.15))',
                                                background: 'rgba(255, 255, 255, 0.2)',
                                                backdropFilter: 'blur(6px)'
                                            }}
                                        >
                                            {/* Imagen real de la playa */}
                                            <div className="h-24 sm:h-28 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 relative overflow-hidden">
                                                <img 
                                                    src={beach.image}
                                                    alt={beach.name}
                                                    className="w-full h-full object-cover"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                                            </div>
                                            
                                            {/* Texto con categoría */}
                                            <h3 className="text-sm sm:text-base font-title font-bold text-white mb-2 sm:mb-3 text-center leading-tight drop-shadow-lg">
                                                {beach.name}
                                            </h3>
                                            <p className="text-xs sm:text-sm font-ui font-semibold text-yellow-300 text-center mb-2 drop-shadow-md">
                                                {beach.category}
                                            </p>
                                        </div>
                                        );
                                    })}
                                </div>
                                
                                {/* Botón CTA con separación adecuada */}
                                <div className="flex justify-center px-4 sm:px-6 py-8 sm:py-12 lg:py-4">
                                    <button 
                                        onClick={() => router.push('/playas')}
                                        className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-white/30 backdrop-blur-sm border-2 border-white/60 text-white font-ui font-semibold rounded-full hover:bg-white/40 hover:border-white/80 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl beach-card-floating animate-fade-in-up text-sm sm:text-base"
                                        style={{
                                            animationDelay: '3s',
                                            filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.2))'
                                        }}
                                    >
                                        Explorar Todas las Playas
                                    </button>
                                </div>
                            </div>
                            </div>
                        </section>
                    )
                }

                // Sección especial para Museos - Diseño tipo galería artística
                if (section.title === "Museos") {
                    // Recopilar todos los museos de todos los bloques
                    const allMuseums = section.blocks.flatMap(block => 
                        block.museums.map(museum => ({
                            ...museum,
                            category: block.title,
                            categoryColor: block.color
                        }))
                    );

                    return (
                        <section 
                            ref={(el) => {
                                if (el && !sectionRefs.current.includes(el)) {
                                    sectionRefs.current.push(el)
                                }
                            }}
                            id={`section-${section.id}`}
                            key={section.id}
                            className="relative min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200"
                        >
                            {/* Fondo con textura sutil tipo galería */}
                            <div 
                                className="absolute inset-0 opacity-10"
                                style={{
                                    backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><defs><pattern id="gallery" width="100" height="100" patternUnits="userSpaceOnUse"><rect x="0" y="0" width="100" height="100" fill="none" stroke="white" stroke-width="0.5" opacity="0.1"/><circle cx="50" cy="50" r="20" fill="none" stroke="white" stroke-width="0.3" opacity="0.05"/><path d="M20 20 L80 20 L80 80 L20 80 Z" fill="none" stroke="white" stroke-width="0.2" opacity="0.08"/></pattern></defs><rect width="100%" height="100%" fill="url(%23gallery)"/></svg>')`,
                                    backgroundSize: '150px 150px'
                                }}
                            />
                            
                            {/* Overlay sutil */}
                            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 via-transparent to-gray-800/30" />
                            
                            {/* Contenido principal */}
                            <div className="relative z-10 min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                                <div className="max-w-7xl mx-auto w-full">
                                    {/* Título principal elegante */}
                                    <div className="text-center mb-8 sm:mb-12">
                                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-title font-light mb-4 sm:mb-6 text-gray-800 animate-fade-in-up tracking-wide">
                                            {section.title}
                                        </h2>
                                        <p className="text-base sm:text-lg md:text-xl font-body text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delayed">
                                            {section.description}
                                        </p>
                                    </div>

                                    {/* Galería de museos - Grid uniforme */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-6 mb-8 sm:mb-12">
                                        {allMuseums.map((museum, index) => (
                                            <div 
                                                key={index}
                                                className="group relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 cursor-pointer h-64 sm:h-72 flex flex-col border-4 border-white hover:border-gray-300 animate-fade-in-up"
                                                onClick={() => router.push('/museos')}
                                                style={{ 
                                                    animationDelay: `${index * 0.1}s`
                                                }}
                                            >
                                                {/* Imagen de fondo */}
                                                <div className="absolute inset-0">
                                                    <img 
                                                        src={museum.image}
                                                        alt={museum.name}
                                                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                                                    />
                                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300" />
                                                </div>

                                                {/* Contenido superpuesto */}
                                                <div className="relative z-10 h-full flex flex-col justify-between p-3 sm:p-4">
                                                    {/* Etiqueta de categoría */}
                                                    <div 
                                                        className="self-start px-2 sm:px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border"
                                                        style={{ 
                                                            backgroundColor: `${museum.categoryColor}80`,
                                                            borderColor: `${museum.categoryColor}60`,
                                                            color: 'white'
                                                        }}
                                                    >
                                                        {museum.category}
                                                    </div>

                                                    {/* Texto superpuesto en la parte inferior */}
                                                    <div className="text-white">
                                                        <h3 className="text-base sm:text-lg font-title font-bold mb-2 group-hover:text-amber-200 transition-colors duration-300 leading-tight" 
                                                            style={{
                                                                color: '#FFFFFF',
                                                                textShadow: '2px 2px 8px rgba(0, 0, 0, 0.9), 0 0 20px rgba(0, 0, 0, 0.5)'
                                                            }}>
                                                            {museum.name}
                                                        </h3>
                                                        <p className="text-xs sm:text-sm font-body leading-relaxed mb-2 sm:mb-3 text-white" 
                                                            style={{
                                                                textShadow: '1px 1px 6px rgba(0, 0, 0, 0.8), 0 0 15px rgba(0, 0, 0, 0.4)'
                                                            }}>
                                                            {museum.description}
                                                        </p>
                                                        
                                                        {/* Indicador de hover */}
                                                        <div className="flex items-center text-amber-200 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0" 
                                                            style={{
                                                                textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)'
                                                            }}>
                                                            <span className="text-xs sm:text-sm font-medium mr-2">Explorar</span>
                                                            <svg className="w-3 sm:w-4 h-3 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Efecto de brillo en hover */}
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%]"></div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Botón CTA elegante */}
                                    <div className="text-center">
                                        <button 
                                            onClick={() => router.push('/museos')}
                                            className="group relative px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-gray-700 to-gray-800 backdrop-blur-sm border-2 border-gray-600 text-white font-ui font-medium rounded-full hover:from-gray-600 hover:to-gray-700 hover:border-gray-500 transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-gray-500/25 animate-fade-in-up overflow-hidden text-sm sm:text-base"
                                            style={{ animationDelay: '0.8s' }}
                                        >
                                            <span className="relative z-10 flex items-center">
                                                Explorar Todos los Museos
                                                <svg className="w-4 sm:w-5 h-4 sm:h-5 ml-2 sm:ml-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                </svg>
                                            </span>
                                            <div className="absolute inset-0 bg-gradient-to-r from-gray-400/10 to-gray-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Elementos decorativos sutiles */}
                            <div className="absolute top-20 right-20 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl animate-float hidden lg:block" />
                            <div className="absolute bottom-20 left-20 w-40 h-40 bg-stone-400/10 rounded-full blur-2xl animate-float-delayed hidden lg:block" />
                            <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-gray-400/10 rounded-full blur-2xl animate-float hidden lg:block" />
                        </section>
                    )
                }

                // Sección especial para Sitios Turísticos
                if (section.title === "Sitios Turísticos") {
                    return (
                        <section 
                            ref={(el) => {
                                if (el && !sectionRefs.current.includes(el)) {
                                    sectionRefs.current.push(el)
                                }
                            }}
                            id={`section-${section.id}`}
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
                            <div className="relative z-10 min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                                <div className="max-w-7xl mx-auto w-full">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                                        
                                        {/* Mitad izquierda - Imagen fija */}
                                        <div className="relative animate-fade-in-up">
                                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                                <img
                                                    src="https://i.pinimg.com/1200x/0f/29/12/0f291208d9653b3bad8f6fc44c1f32e1.jpg"
                                                    alt="Cartagena de Indias - Vista panorámica de las murallas y el mar"
                                                    className="w-full h-80 sm:h-96 md:h-[500px] object-cover transition-all duration-1000 ease-in-out hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                                                
                                                {/* Overlay con información de la imagen */}
                                                <div className="absolute bottom-4 left-4 right-4 text-white">
                                                    <p className="text-xs sm:text-sm font-ui opacity-90">
                                                        Vista panorámica de Cartagena de Indias
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Mitad derecha - Narrativa fluida */}
                                        <div className="text-white">
                                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-title font-bold mb-4 sm:mb-6 drop-shadow-2xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                                                {section.title}
                                            </h2>
                                            
                                            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                                                <p className="text-lg sm:text-xl md:text-2xl font-body drop-shadow-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s', color: 'white' }}>
                                                    {section.description}
                                                </p>
                                                
                                                <p className="text-sm sm:text-lg md:text-xl font-body drop-shadow-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s', color: 'white' }}>
                                                    Desde las majestuosas murallas que han resistido siglos de historia hasta las plazas coloniales que susurran secretos del pasado, cada rincón de Cartagena cuenta una historia única.
                                                </p>
                                                
                                                <p className="text-sm sm:text-lg md:text-xl font-body drop-shadow-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s', color: 'white' }}>
                                                    Descubre la magia de la Heroica Ciudad Amurallada, donde la arquitectura colonial se funde con la brisa caribeña y cada calle empedrada te lleva a un nuevo descubrimiento.
                                                </p>
                                            </div>
                                            
                                            {/* Highlights en formato narrativo */}
                                            <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                                                {section.highlights.map((highlight, highlightIndex) => (
                                                    <div 
                                                        key={highlightIndex}
                                                        className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 sm:p-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
                                                        style={{ animationDelay: `${0.5 + highlightIndex * 0.1}s` }}
                                                    >
                                                        <span className="text-sm sm:text-lg md:text-xl font-ui font-medium flex items-center text-white">
                                                            <span className="w-2 h-2 bg-amber-400 rounded-full mr-3 animate-pulse"></span>
                                                            {highlight}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                            
                                            {/* Botón CTA */}
                                            <button 
                                                onClick={() => router.push('/sitios-turisticos')}
                                                className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-ui font-semibold rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-105 animate-fade-in-up text-sm sm:text-base"
                                                style={{ animationDelay: '0.8s' }}
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
                        ref={(el) => {
                            if (el && !sectionRefs.current.includes(el)) {
                                sectionRefs.current.push(el)
                            }
                        }}
                        id={`section-${section.id}`}
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

            {/* Sección Final "Volver Pronto" - Estilo Atardecer Costero */}
            <section 
                ref={(el) => {
                    if (el && !sectionRefs.current.includes(el)) {
                        sectionRefs.current.push(el)
                    }
                }}
                className="relative min-h-screen flex items-center justify-center overflow-hidden"
            >
                {/* Fondo Base con Gradiente Sutil */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-blue-50" />
                
                {/* Olas con Colores de la Bandera de Cartagena */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="wave-layer wave-sunset-1"></div>
                    <div className="wave-layer wave-sunset-2"></div>
                    <div className="wave-layer wave-sunset-3"></div>
                </div>
                
                {/* Textura de Papel Envejecido/Arena */}
                <div 
                    className="absolute inset-0 opacity-25"
                    style={{
                        backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><filter id="paper"><feTurbulence baseFrequency="0.8" numOctaves="3" result="noise"/><feColorMatrix in="noise" type="saturate" values="0.3"/></filter><pattern id="agedPaper" width="300" height="300" patternUnits="userSpaceOnUse"><rect width="300" height="300" fill="%23F4E4BC" filter="url(%23paper)"/><path d="M0 0 L300 0 L300 300 L0 300 Z" fill="none" stroke="%23D4C4A8" stroke-width="0.5" opacity="0.4"/><circle cx="80" cy="80" r="1.5" fill="%23B8A082" opacity="0.6"/><circle cx="220" cy="150" r="1" fill="%23B8A082" opacity="0.5"/><circle cx="150" cy="220" r="2" fill="%23B8A082" opacity="0.4"/><circle cx="50" cy="250" r="1.5" fill="%23B8A082" opacity="0.7"/><circle cx="250" cy="50" r="1" fill="%23B8A082" opacity="0.3"/><path d="M20 20 Q50 30 80 20 Q110 30 140 20" stroke="%23B8A082" stroke-width="0.3" opacity="0.4" fill="none"/><path d="M200 200 Q230 210 260 200 Q290 210 280 200" stroke="%23B8A082" stroke-width="0.2" opacity="0.3" fill="none"/></pattern></defs><rect width="100%" height="100%" fill="url(%23agedPaper)"/></svg>')`,
                        backgroundSize: '600px 600px',
                        backgroundRepeat: 'repeat'
                    }}
                />
                
                {/* Overlay Sutil para Contraste */}
                <div className="absolute inset-0 bg-gray-100/30" />
                
                {/* Palmas Animadas */}
                <div className="absolute top-10 left-10 w-32 h-32 opacity-20 animate-palm-sway">
                    <svg viewBox="0 0 100 100" className="w-full h-full text-white">
                        <path d="M50 10 Q30 20 20 40 Q15 50 20 60 Q25 70 30 80 Q35 85 40 90 Q45 95 50 100 Q55 95 60 90 Q65 85 70 80 Q75 70 80 60 Q85 50 80 40 Q70 20 50 10" fill="currentColor" opacity="0.6"/>
                        <path d="M50 15 Q35 25 25 45 Q20 55 25 65 Q30 75 35 85 Q40 90 45 95 Q50 100 55 95 Q60 90 65 85 Q70 75 75 65 Q80 55 75 45 Q65 25 50 15" fill="currentColor" opacity="0.4"/>
                    </svg>
                </div>
                
                <div className="absolute top-20 right-16 w-24 h-24 opacity-15 animate-palm-sway-delayed">
                    <svg viewBox="0 0 100 100" className="w-full h-full text-white">
                        <path d="M50 10 Q30 20 20 40 Q15 50 20 60 Q25 70 30 80 Q35 85 40 90 Q45 95 50 100 Q55 95 60 90 Q65 85 70 80 Q75 70 80 60 Q85 50 80 40 Q70 20 50 10" fill="currentColor" opacity="0.5"/>
                    </svg>
                </div>
                
                <div className="absolute bottom-20 left-20 w-28 h-28 opacity-18 animate-palm-sway">
                    <svg viewBox="0 0 100 100" className="w-full h-full text-white">
                        <path d="M50 10 Q30 20 20 40 Q15 50 20 60 Q25 70 30 80 Q35 85 40 90 Q45 95 50 100 Q55 95 60 90 Q65 85 70 80 Q75 70 80 60 Q85 50 80 40 Q70 20 50 10" fill="currentColor" opacity="0.4"/>
                    </svg>
                </div>
                
                {/* Brisa Animada */}
                <div className="absolute top-1/4 left-1/4 w-full h-1 opacity-20 animate-breeze">
                    <svg viewBox="0 0 1000 10" className="w-full h-full text-white">
                        <path d="M0 5 Q100 2 200 5 Q300 8 400 5 Q500 2 600 5 Q700 8 800 5 Q900 2 1000 5" stroke="currentColor" strokeWidth="1" fill="none"/>
                    </svg>
                </div>
                
                <div className="absolute top-1/3 right-1/4 w-full h-1 opacity-15 animate-breeze-delayed">
                    <svg viewBox="0 0 1000 10" className="w-full h-full text-white">
                        <path d="M0 5 Q150 3 300 5 Q450 7 600 5 Q750 3 900 5 Q950 7 1000 5" stroke="currentColor" strokeWidth="1" fill="none"/>
                    </svg>
                </div>
                
                {/* Contenido Principal */}
                <div className="relative z-10 text-center text-gray-800 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                    {/* Mensaje Principal */}
                    <div className="mb-8">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 drop-shadow-2xl animate-fade-in-up leading-tight">
                            Esto es solo el inicio
                        </h2>
                        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-light mb-4 drop-shadow-lg animate-fade-in-up-delayed leading-relaxed text-gray-700">
                            Cartagena te espera con nuevas atmósferas
                        </p>
                        <p className="text-lg sm:text-xl md:text-2xl font-body mb-8 text-gray-600 drop-shadow-md animate-fade-in-up-delayed max-w-3xl mx-auto leading-relaxed">
                            Muchas más secciones nos esperan. Más playas, más museos, más alma caribeña por descubrir.
                        </p>
                    </div>
                    
                    {/* Logo Desvaneciéndose */}
                    <div className="mb-12 animate-logo-fade">
                        <div className="inline-block px-8 py-4 bg-gray-100/80 backdrop-blur-sm rounded-full border border-gray-300/50 shadow-lg">
                            <span className="text-2xl sm:text-3xl font-serif font-bold text-gray-800">
                                <span style={{ color: '#FFD700' }}>Cartagena</span> Fragmentada
                            </span>
                        </div>
                    </div>
                    
                    {/* Mensaje Final */}
                    <div className="animate-fade-in-up-delayed">
                        <p className="text-base sm:text-lg md:text-xl font-body text-gray-600 drop-shadow-md italic max-w-2xl mx-auto leading-relaxed">
                            "Donde cada rincón cuenta una historia, cada ola susurra un secreto, y cada atardecer promete un nuevo amanecer."
                        </p>
                    </div>
                </div>
                
                {/* Partículas de Arena Flotantes */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 left-1/4 w-1 h-1 bg-gray-400/40 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
                    <div className="absolute top-40 right-1/3 w-1.5 h-1.5 bg-gray-500/35 rounded-full animate-float-delayed" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute bottom-40 left-1/3 w-1 h-1 bg-gray-400/45 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute bottom-20 right-1/4 w-1.5 h-1.5 bg-gray-500/30 rounded-full animate-float-delayed" style={{ animationDelay: '3s' }}></div>
                    <div className="absolute top-1/2 left-1/5 w-1 h-1 bg-gray-400/50 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
                    <div className="absolute top-1/3 right-1/5 w-1.5 h-1.5 bg-gray-500/35 rounded-full animate-float-delayed" style={{ animationDelay: '5s' }}></div>
                </div>
            </section>
        </div>
    )
}