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
            {/* Postal Animada - Estilo Costero */}
            <section className="relative overflow-hidden min-h-screen">
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
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Texto principal con tipografía serif elegante */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6 animate-fade-in leading-tight" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                            Cartagena vibra entre historia y mar
                        </h1>
                        
                        {/* Subtítulo más ligero */}
                        <p className="text-lg md:text-xl font-light text-white/90 max-w-2xl mx-auto mb-12 animate-fade-in-delay leading-relaxed" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
                            Donde el mar abraza la historia y las palmas susurran leyendas, Cartagena vibra con alma propia. Déjate llevar por sus colores, sus calles y sus memorias.
                        </p>
                        
                        {/* Botones con estilo costero */}
                        <div className="flex flex-wrap justify-center gap-4 md:gap-6 animate-fade-in-delay">
                            {sections.map((section, index) => (
                                <button
                                    key={section.id}
                                    onClick={() => {
                                        const element = document.getElementById(`section-${section.id}`)
                                        if (element) {
                                            element.scrollIntoView({ behavior: 'smooth' })
                                        }
                                    }}
                                    className="px-6 py-3 bg-white/20 rounded-full text-white font-medium hover:bg-white/30 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm border border-white/30"
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

                // Sección especial para Playas - Diseño narrativo costero
                if (section.title === "Playas") {
                    return (
                        <section 
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
                            
                            {/* CAPA DE TIERRA - Gradiente para la orilla */}
                            <div 
                                className="absolute top-0 left-0 w-full"
                                style={{
                                    height: '40vh',
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
                                <div className="absolute top-20 left-16 w-16 h-16 opacity-20 animate-breeze">
                                    <svg viewBox="0 0 100 100" className="w-full h-full text-amber-600">
                                        <path d="M10 40 Q25 25 40 40 T70 40" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.6"/>
                                        <path d="M10 50 Q25 35 40 50 T70 50" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.4"/>
                                    </svg>
                                </div>
                                
                                <div className="absolute top-32 right-20 w-12 h-12 opacity-15 animate-breeze-delayed">
                                    <svg viewBox="0 0 100 100" className="w-full h-full text-amber-500">
                                        <path d="M10 35 Q20 20 35 35 T60 35" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5"/>
                                        <path d="M10 45 Q20 30 35 45 T60 45" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.3"/>
                                    </svg>
                                </div>
                            </div>
                            
                            {/* TEXTO EN LA TIERRA */}
                            <div className="relative z-10 flex items-start justify-start px-4 sm:px-6 lg:px-8 pt-16" style={{ height: '40vh' }}>
                                <div className="text-left max-w-2xl">
                                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-title font-bold mb-6 text-amber-900 drop-shadow-lg animate-fade-in-up">
                                        {section.title}
                                    </h2>
                                    
                                    {/* Texto introductorio con efecto de brisa sutil */}
                                    <div className="space-y-4 animate-fade-in-up-delayed">
                                        <p className="text-lg md:text-xl font-body text-amber-800 drop-shadow-md leading-relaxed animate-text-breeze">
                                            Aquí el mar no solo se ve, se siente.
                                        </p>
                                        <p className="text-base md:text-lg font-body text-amber-700 drop-shadow-sm leading-relaxed animate-text-breeze-delayed">
                                            Descubre las playas que hacen de Cartagena un suspiro del Caribe.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* CARDS EN EL MAR - Distribuidas con flex-wrap */}
                            <div className="absolute z-20 w-full h-full flex flex-col" style={{ top: '40vh', height: '60vh' }}>
                                {/* Contenedor dividido en 6 columnas */}
                                <div className="flex-1 grid grid-cols-6 gap-4 px-8 pt-16 pb-20">
                                    {[
                                        { name: "Bocagrande", category: "Urbana", image: "https://blog.redbus.co/wp-content/uploads/2020/06/BOCAGRANDE-5.jpg", position: "self-start", delay: "0s" },
                                        { name: "Marbella", category: "Local", image: "https://www.isouthamerica.com/wp-content/uploads/2021/11/marbella-beach-cartagena.jpg", position: "self-end", delay: "0.5s" },
                                        { name: "La Boquilla", category: "Tradicional", image: "https://i.pinimg.com/originals/c4/47/92/c44792992dd71bb3924fce6eafb5b99c.jpg", position: "self-center", delay: "1s" },
                                        { name: "Islas del Rosario", category: "Cristalina", image: "https://www.cartagenaexplorer.com/wp-content/uploads/2020/07/Depositphotos_156273740_xl-2015-scaled.jpg", position: "self-end", delay: "1.5s" },
                                        { name: "Playa Blanca", category: "Paradisíaca", image: "https://i.pinimg.com/736x/1b/a1/66/1ba166f7b8e21c1e28eeb4a4760f8baa.jpg", position: "self-start", delay: "2s" },
                                        { name: "Cholón", category: "Fiesta", image: "https://cdn.yate.co/img/blog/2024/17/cholon-75t.jpg", position: "self-center", delay: "2.5s" }
                                    ].map((beach, index) => (
                                        <div 
                                            key={index}
                                            className={`h-52 ${beach.position} beach-card-floating rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 cursor-pointer border border-white/30`}
                                            onClick={() => router.push('/playas')}
                                            style={{ 
                                                animationDelay: beach.delay,
                                                filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.15))',
                                                background: 'rgba(255, 255, 255, 0.2)',
                                                backdropFilter: 'blur(6px)'
                                            }}
                                        >
                                            {/* Imagen real de la playa */}
                                            <div className="h-28 rounded-2xl mb-4 relative overflow-hidden">
                                                <img 
                                                    src={beach.image}
                                                    alt={beach.name}
                                                    className="w-full h-full object-cover"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                                            </div>
                                            
                                            {/* Texto con categoría */}
                                            <h3 className="text-base font-title font-bold text-white mb-3 text-center leading-tight drop-shadow-lg">
                                                {beach.name}
                                            </h3>
                                            <p className="text-sm font-ui font-semibold text-yellow-300 text-center mb-2 drop-shadow-md">
                                                {beach.category}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                
                                {/* Botón CTA con separación adecuada */}
                                <div className="flex justify-center pb-8">
                                    <button 
                                        onClick={() => router.push('/playas')}
                                        className="px-10 py-4 bg-white/30 backdrop-blur-sm border-2 border-white/60 text-white font-ui font-semibold rounded-full hover:bg-white/40 hover:border-white/80 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl beach-card-floating"
                                        style={{
                                            animationDelay: '3s',
                                            filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.2))'
                                        }}
                                    >
                                        Explorar Todas las Playas
                                    </button>
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
                            <div className="relative z-10 min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-20">
                                <div className="max-w-7xl mx-auto w-full">
                                    {/* Título principal elegante */}
                                    <div className="text-center mb-6" style={{ marginTop: '-2rem' }}>
                                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-title font-light mb-4 text-gray-800 animate-fade-in-up tracking-wide">
                                            {section.title}
                                        </h2>
                                        <p className="text-base md:text-lg font-body text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delayed">
                                            {section.description}
                                        </p>
                                    </div>

                                    {/* Galería de museos - Grid uniforme */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 mb-6">
                                        {allMuseums.map((museum, index) => (
                                            <div 
                                                key={index}
                                                className="group relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 cursor-pointer h-72 flex flex-col border-4 border-white hover:border-gray-300"
                                                onClick={() => router.push('/museos')}
                                                style={{ 
                                                    animationDelay: `${index * 0.1}s`,
                                                    animation: 'fadeInUp 0.8s ease-out forwards'
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
                                                <div className="relative z-10 h-full flex flex-col justify-between p-4">
                                                    {/* Etiqueta de categoría */}
                                                    <div 
                                                        className="self-start px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border"
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
                                                        <h3 className="text-lg font-title font-bold mb-2 drop-shadow-lg group-hover:text-amber-300 transition-colors duration-300 leading-tight">
                                                            {museum.name}
                                                        </h3>
                                                        <p className="text-sm font-body leading-relaxed mb-3 drop-shadow-md">
                                                            {museum.description}
                                                        </p>
                                                        
                                                        {/* Indicador de hover */}
                                                        <div className="flex items-center text-amber-300 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                                                            <span className="text-sm font-medium mr-2">Explorar</span>
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                                            className="group relative px-12 py-5 bg-gradient-to-r from-gray-700 to-gray-800 backdrop-blur-sm border-2 border-gray-600 text-white font-ui font-medium rounded-full hover:from-gray-600 hover:to-gray-700 hover:border-gray-500 transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-gray-500/25 animate-fade-in-up overflow-hidden"
                                            style={{ animationDelay: '0.8s' }}
                                        >
                                            <span className="relative z-10 flex items-center">
                                                Explorar Todos los Museos
                                                <svg className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                                                <p className="text-lg md:text-xl font-body drop-shadow-lg leading-relaxed animate-fade-in-up-white" style={{ animationDelay: '0.2s' }}>
                                                    {section.description}
                                                </p>
                                                
                                                <p className="text-base md:text-lg font-body drop-shadow-lg leading-relaxed animate-fade-in-up-white" style={{ animationDelay: '0.4s' }}>
                                                    Desde las majestuosas murallas que han resistido siglos de historia hasta las plazas coloniales que susurran secretos del pasado, cada rincón de Cartagena cuenta una historia única.
                                                </p>
                                                
                                                <p className="text-base md:text-lg font-body drop-shadow-lg leading-relaxed animate-fade-in-up-white" style={{ animationDelay: '0.6s' }}>
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