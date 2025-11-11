"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"

export default function Historia() {
    const timelineRef = useRef(null)
    const [hoveredTimeline, setHoveredTimeline] = useState(null)
    const [activeEventIndex, setActiveEventIndex] = useState(0)

    const periods = useMemo(() => [
        {
            id: "colonial",
            icon: "⚔️",
            title: "Fundación y Época Colonial",
            period: "1533–1810",
            subtitle: "Cartagena, bastión del Caribe español",
            colorTheme: "colonial",
            heroGradient: "from-[#2f1b12] via-[#1f2b45] to-[#705232]",
            heroTaglineClass: "text-[#f6d8a6]",
            headerGradientCss: "linear-gradient(135deg, #2f1b12 0%, #1f2b45 55%, #705232 100%)",
            headerBorderColor: "rgba(246, 197, 107, 0.35)",
            headerTextColor: "#f8ead3",
            headerAccentColor: "#f6c56b",
            headerHoverColor: "#ffe3a1",
            headerMenuTextColor: "#f8ead3",
            headerMenuActiveColor: "#f6c56b",
            headerMenuHoverColor: "#ffe3a1",
            bgGradient: "from-[#1f242d] via-[#121822] to-[#3d2a1a]",
            textColor: "text-[#f8ead3]",
            accentColor: "text-[#f6c56b]",
            texture: "paper",
            fontClass: "font-title",
            yearBadgeClass: "bg-[#f6c56b] text-[#2d1606]",
            timelineGradient: "before:bg-gradient-to-r before:from-[#7c512d]/90 before:via-[#c89f5a]/75 before:to-[#1f426e]/90",
            timelineDotClass: "bg-[#f6c56b]",
            timelineDotActiveClass: "scale-125 sm:scale-150 ring-4 ring-[#f9e6c6] shadow-xl",
            timelineDotHoverClass: "scale-110 ring-2 ring-[#f6c56b] shadow-lg",
            timelineActiveTitleClass: "text-[#f6c56b]",
            timelineHoverTitleClass: "text-[#f6c56b]/80",
            timelineInactiveTitleClass: "text-white/70",
            decorativeAccentClass: "bg-[#f6c56b]",
            timelineCardBg: "linear-gradient(160deg, rgba(14,16,22,0.92) 0%, rgba(28,20,14,0.85) 100%)",
            timelineCardBorder: "rgba(246, 197, 107, 0.25)",
            timelineCardShadow: "0 30px 80px -32px rgba(12, 10, 6, 0.85)",
            events: [
                {
                    year: "1533",
                    title: "Fundación",
                    description: "Pedro de Heredia funda Cartagena de Indias el 1 de junio de 1533, sobre un antiguo poblado indígena llamado Calamarí. Su bahía protegida la convierte rápidamente en el principal puerto del Caribe español.",
                    isMajor: true
                },
                {
                    year: "1552",
                    title: "Incendio devastador",
                    description: "Un incendio consume la ciudad construida en madera. La reconstrucción marca el inicio de una Cartagena de piedra, con edificaciones más resistentes y plan urbano organizado.",
                    isMajor: false
                },
                {
                    year: "Siglo XVI–XVII",
                    title: "Auge del comercio y defensa",
                    description: "Cartagena se consolida como puerto del comercio negrero y nodo clave del sistema económico colonial. Desde aquí partían barcos cargados de oro, plata y esclavos hacia Europa. Para proteger la ciudad de piratas y corsarios, la Corona Española construye un sistema defensivo monumental: murallas, baluartes, fuertes y el célebre Castillo de San Felipe de Barajas, símbolo de resistencia.",
                    isMajor: true
                },
                {
                    year: "1586",
                    title: "Ataque de Francis Drake",
                    description: "El corsario inglés saquea la ciudad y exige un fuerte rescate. Este hecho impulsa la fortificación de Cartagena como la plaza militar más poderosa del Caribe.",
                    isMajor: true
                },
                {
                    year: "1741",
                    title: "Batalla de Cartagena de Indias",
                    description: "El almirante inglés Edward Vernon ataca con más de 180 barcos y 23.000 hombres. La heroica defensa del almirante Blas de Lezo y las tropas locales logra la victoria española. Este episodio consagra a Cartagena como \"La Heroica\" y es una de las mayores derrotas navales británicas de la historia.",
                    isMajor: true
                },
                {
                    year: "Siglo XVIII",
                    title: "Consolidación colonial",
                    description: "Cartagena alcanza su esplendor: se convierte en sede del Tribunal de la Inquisición, centro religioso y comercial del Caribe, y una de las ciudades más importantes del Virreinato de la Nueva Granada.",
                    isMajor: false
                }
            ]
        },
        {
            id: "independencia",
            icon: "🗽",
            title: "Independencia y República Temprana",
            period: "1810–1886",
            subtitle: "La lucha por la libertad y la identidad nacional",
            colorTheme: "independencia",
            heroGradient: "from-[#441818] via-[#712d2d] to-[#2f3a32]",
            heroTaglineClass: "text-[#f8c9ba]",
            headerGradientCss: "linear-gradient(135deg, #441818 0%, #712d2d 55%, #2f3a32 100%)",
            headerBorderColor: "rgba(239, 102, 84, 0.35)",
            headerTextColor: "#fbe4de",
            headerAccentColor: "#ffb4a0",
            headerHoverColor: "#ffd1c3",
            headerMenuTextColor: "#fbe4de",
            headerMenuActiveColor: "#ffb4a0",
            headerMenuHoverColor: "#ffd1c3",
            bgGradient: "from-[#241616] via-[#181b23] to-[#3b2a2a]",
            textColor: "text-[#fbe4de]",
            accentColor: "text-[#f7b09b]",
            texture: "wood",
            fontClass: "font-title",
            yearBadgeClass: "bg-[#ef6654] text-white",
            timelineGradient: "before:bg-gradient-to-r before:from-[#7f1d1d]/90 before:via-[#c75f49]/75 before:to-[#3c4640]/90",
            timelineDotClass: "bg-[#ef6654]",
            timelineDotActiveClass: "scale-125 sm:scale-150 ring-4 ring-[#ffd3c9] shadow-xl",
            timelineDotHoverClass: "scale-110 ring-2 ring-[#ef6654] shadow-lg",
            timelineActiveTitleClass: "text-[#ffb4a0]",
            timelineHoverTitleClass: "text-[#ffb4a0]/80",
            timelineInactiveTitleClass: "text-white/70",
            decorativeAccentClass: "bg-[#ef6654]",
            timelineCardBg: "linear-gradient(160deg, rgba(28,16,16,0.92) 0%, rgba(48,24,24,0.85) 100%)",
            timelineCardBorder: "rgba(239, 102, 84, 0.28)",
            timelineCardShadow: "0 30px 80px -32px rgba(32, 16, 16, 0.85)",
            events: [
                {
                    year: "1810",
                    title: "Grito de Independencia",
                    description: "El 11 de noviembre de 1811, Cartagena proclama su independencia absoluta de España, siendo la primera ciudad de Colombia en hacerlo oficialmente. Este acto la coloca a la vanguardia del movimiento emancipador americano.",
                    isMajor: true
                },
                {
                    year: "1815",
                    title: "Sitio de Cartagena",
                    description: "El general español Pablo Morillo reconquista la ciudad tras un sitio de 105 días, causando gran hambruna y destrucción. Miles de cartageneros mueren defendiendo la independencia. Este episodio le otorga el título de \"Ciudad Heroica\".",
                    isMajor: true
                },
                {
                    year: "1821",
                    title: "Libertad definitiva",
                    description: "Tras la victoria de las fuerzas patriotas lideradas por Bolívar, Cartagena se libera definitivamente y se integra a la Gran Colombia.",
                    isMajor: true
                },
                {
                    year: "1830–1886",
                    title: "Repliegue y transformación",
                    description: "Durante el siglo XIX, Cartagena pierde protagonismo político frente a Bogotá y Barranquilla. Sin embargo, mantiene su vitalidad cultural y portuaria, y conserva su arquitectura colonial, que más tarde sería clave en su renacimiento patrimonial.",
                    isMajor: false
                }
            ]
        },
        {
            id: "republica",
            icon: "🏗️",
            title: "República Liberal y Modernización",
            period: "1886–1950",
            subtitle: "Modernización y despertar cultural",
            colorTheme: "liberal",
            heroGradient: "from-[#1d2533] via-[#2b4b63] to-[#4d6476]",
            heroTaglineClass: "text-[#9fd0e4]",
            headerGradientCss: "linear-gradient(135deg, #1d2533 0%, #2b4b63 55%, #4d6476 100%)",
            headerBorderColor: "rgba(139, 210, 227, 0.35)",
            headerTextColor: "#dce6ef",
            headerAccentColor: "#8bd2e3",
            headerHoverColor: "#bde6f0",
            headerMenuTextColor: "#dce6ef",
            headerMenuActiveColor: "#8bd2e3",
            headerMenuHoverColor: "#bde6f0",
            bgGradient: "from-[#182029] via-[#192a36] to-[#30414d]",
            textColor: "text-[#dce6ef]",
            accentColor: "text-[#8bd2e3]",
            texture: "marble",
            fontClass: "font-ui",
            yearBadgeClass: "bg-[#8bd2e3] text-[#0f2330]",
            timelineGradient: "before:bg-gradient-to-r before:from-[#365062]/90 before:via-[#6f8ea2]/75 before:to-[#a7c1cc]/90",
            timelineDotClass: "bg-[#8bd2e3]",
            timelineDotActiveClass: "scale-125 sm:scale-150 ring-4 ring-[#d1edf4] shadow-xl",
            timelineDotHoverClass: "scale-110 ring-2 ring-[#8bd2e3] shadow-lg",
            timelineActiveTitleClass: "text-[#8bd2e3]",
            timelineHoverTitleClass: "text-[#8bd2e3]/80",
            timelineInactiveTitleClass: "text-white/70",
            decorativeAccentClass: "bg-[#8bd2e3]",
            timelineCardBg: "linear-gradient(160deg, rgba(14,24,32,0.92) 0%, rgba(24,36,48,0.85) 100%)",
            timelineCardBorder: "rgba(139, 210, 227, 0.28)",
            timelineCardShadow: "0 30px 80px -32px rgba(12, 30, 42, 0.85)",
            events: [
                {
                    year: "1886",
                    title: "Nueva Constitución",
                    description: "Con el inicio de la República Centralista, Cartagena pasa a ser capital del departamento de Bolívar.",
                    isMajor: false
                },
                {
                    year: "1902",
                    title: "Fin de la Guerra de los Mil Días",
                    description: "La ciudad comienza un proceso de reconstrucción y apertura económica, consolidando su papel como puerto comercial moderno.",
                    isMajor: false
                },
                {
                    year: "1920–1930",
                    title: "Modernización urbana",
                    description: "Se amplía el puerto marítimo, se abren avenidas y surgen barrios modernos como Manga y Bocagrande, reflejando la influencia arquitectónica caribeña y republicana.",
                    isMajor: true
                },
                {
                    year: "1940–1950",
                    title: "Despertar cultural",
                    description: "Surgen periódicos, revistas y círculos literarios. Se fortalece la identidad costeña, y Cartagena se proyecta como centro cultural y artístico, preludio del auge turístico posterior.",
                    isMajor: true
                }
            ]
        },
        {
            id: "contemporanea",
            icon: "🌆",
            title: "Cartagena Contemporánea",
            period: "1950–Presente",
            subtitle: "Patrimonio vivo en el siglo XXI",
            colorTheme: "contemporanea",
            heroGradient: "from-[#0c2f3b] via-[#14576a] to-[#f38b59]",
            heroTaglineClass: "text-[#ffe8a6]",
            headerGradientCss: "linear-gradient(135deg, #0c2f3b 0%, #14576a 50%, #f38b59 100%)",
            headerBorderColor: "rgba(255, 194, 122, 0.35)",
            headerTextColor: "#f1fbff",
            headerAccentColor: "#ffe082",
            headerHoverColor: "#fff1b3",
            headerMenuTextColor: "#f1fbff",
            headerMenuActiveColor: "#ffe082",
            headerMenuHoverColor: "#fff1b3",
            bgGradient: "from-[#0b1f2a] via-[#0d3441] to-[#1c6a73]",
            textColor: "text-[#f1fbff]",
            accentColor: "text-[#ffe082]",
            texture: "concrete",
            fontClass: "font-ui",
            yearBadgeClass: "bg-[#ffc27a] text-[#1a2f34]",
            timelineGradient: "before:bg-gradient-to-r before:from-[#1cb5b3]/90 before:via-[#ff9f68]/75 before:to-[#ffe873]/90",
            timelineDotClass: "bg-[#ffc27a]",
            timelineDotActiveClass: "scale-125 sm:scale-150 ring-4 ring-[#ffe2b5] shadow-xl",
            timelineDotHoverClass: "scale-110 ring-2 ring-[#ffc27a] shadow-lg",
            timelineActiveTitleClass: "text-[#ffe082]",
            timelineHoverTitleClass: "text-[#ffe082]/80",
            timelineInactiveTitleClass: "text-white/70",
            decorativeAccentClass: "bg-[#ffc27a]",
            timelineCardBg: "linear-gradient(160deg, rgba(10,28,34,0.92) 0%, rgba(16,48,58,0.88) 100%)",
            timelineCardBorder: "rgba(255, 194, 122, 0.28)",
            timelineCardShadow: "0 30px 80px -32px rgba(9, 38, 46, 0.85)",
            events: [
                {
                    year: "1950–1970",
                    title: "Renacimiento patrimonial y turístico",
                    description: "Empieza la restauración del Centro Histórico, Getsemaní y el Castillo de San Felipe. El turismo nacional crece con fuerza, y la ciudad empieza a reconocerse como joya del Caribe.",
                    isMajor: true
                },
                {
                    year: "1984",
                    title: "Patrimonio de la Humanidad",
                    description: "La UNESCO declara el conjunto histórico, sus fortificaciones y murallas como Patrimonio Cultural de la Humanidad, garantizando su conservación y reconocimiento global.",
                    isMajor: true
                },
                {
                    year: "1990–2000",
                    title: "Expansión internacional",
                    description: "Cartagena se consolida como destino turístico internacional, sede de eventos como el Festival Internacional de Cine de Cartagena (el más antiguo de Latinoamérica). Empiezan inversiones hoteleras y se potencia la industria de servicios.",
                    isMajor: true
                },
                {
                    year: "2010–2020",
                    title: "Innovación y cultura",
                    description: "La ciudad combina tradición con modernidad: proliferan espacios culturales, proyectos de innovación social y programas de conservación patrimonial. Se refuerza la identidad afrodescendiente y caribeña como parte de su riqueza histórica.",
                    isMajor: false
                },
                {
                    year: "2021–2025",
                    title: "Cartagena global y resiliente",
                    description: "Hoy, Cartagena enfrenta el desafío de preservar su patrimonio histórico mientras crece como ciudad tecnológica, turística y cultural. Se trabaja en la inclusión social, sostenibilidad y digitalización del patrimonio.",
                    isMajor: true
                }
            ]
        }
    ], [])

    const getTextureStyle = (textureType) => {
        const textures = {
            paper: {
                backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><defs><pattern id="paper" width="100" height="100" patternUnits="userSpaceOnUse"><rect width="100" height="100" fill="%23D4AF37" opacity="0.1"/><path d="M0 0 L100 0 L100 100 L0 100 Z" fill="none" stroke="%23C19A6B" stroke-width="0.5" opacity="0.2"/><circle cx="20" cy="20" r="1" fill="%23B8860B" opacity="0.3"/><circle cx="80" cy="60" r="1.5" fill="%23B8860B" opacity="0.2"/><path d="M10 50 Q30 40 50 50 Q70 60 90 50" stroke="%23C19A6B" stroke-width="0.3" opacity="0.15" fill="none"/></pattern></defs><rect width="100%" height="100%" fill="url(%23paper)"/></svg>')`,
                backgroundSize: '200px 200px'
            },
            wood: {
                backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><defs><pattern id="wood" width="40" height="40" patternUnits="userSpaceOnUse"><rect width="40" height="40" fill="%238B0000" opacity="0.1"/><path d="M0 0 L40 0 M0 10 L40 10 M0 20 L40 20 M0 30 L40 30" stroke="%23A52A2A" stroke-width="0.5" opacity="0.3"/><path d="M0 5 L40 5 M0 15 L40 15 M0 25 L40 25 M0 35 L40 35" stroke="%23DC143C" stroke-width="0.3" opacity="0.2"/></pattern></defs><rect width="100%" height="100%" fill="url(%23wood)"/></svg>')`,
                backgroundSize: '80px 80px'
            },
            marble: {
                backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><defs><pattern id="marble" width="100" height="100" patternUnits="userSpaceOnUse"><rect width="100" height="100" fill="%231E3A8A" opacity="0.1"/><path d="M0 0 Q50 30 100 0 T200 0" stroke="%233F51B5" stroke-width="1" opacity="0.2" fill="none"/><path d="M0 50 Q50 80 100 50 T200 50" stroke="%232196F3" stroke-width="0.8" opacity="0.15" fill="none"/><path d="M0 100 Q50 130 100 100 T200 100" stroke="%233F51B5" stroke-width="1" opacity="0.2" fill="none"/></pattern></defs><rect width="100%" height="100%" fill="url(%23marble)"/></svg>')`,
                backgroundSize: '200px 200px'
            },
            concrete: {
                backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="concrete" width="50" height="50" patternUnits="userSpaceOnUse"><rect width="50" height="50" fill="%23FF8C00" opacity="0.05"/><path d="M0 0 L50 50 M50 0 L0 50" stroke="%23FFA500" stroke-width="0.3" opacity="0.1"/><circle cx="25" cy="25" r="2" fill="%23FFD700" opacity="0.1"/></pattern></defs><rect width="100%" height="100%" fill="url(%23concrete)"/></svg>')`,
                backgroundSize: '100px 100px'
            }
        }
        return textures[textureType] || textures.paper
    }

    const enhancedEvents = useMemo(() => {
        const flattened = []
        periods.forEach((period, periodIndex) => {
            period.events.forEach((event) => {
                flattened.push({
                    ...event,
                    periodIndex,
                    periodId: period.id,
                    periodTitle: period.title,
                    periodLabel: period.period,
                    colorTheme: period.colorTheme,
                    icon: period.icon
                })
            })
        })

        return flattened.map((event, index) => ({
            ...event,
            globalIndex: index
        }))
    }, [periods])

    const totalEvents = enhancedEvents.length
    const currentEvent = enhancedEvents[activeEventIndex] ?? enhancedEvents[0] ?? null
    const currentPeriod = currentEvent ? periods[currentEvent.periodIndex] : periods[0]
    const activePeriodIndex = currentEvent ? currentEvent.periodIndex : 0

    const currentPalette = useMemo(() => ({
        header: {
            background: currentPeriod.headerGradientCss,
            border: currentPeriod.headerBorderColor,
            text: currentPeriod.headerTextColor,
            accent: currentPeriod.headerAccentColor,
            hover: currentPeriod.headerHoverColor,
            menuText: currentPeriod.headerMenuTextColor,
            menuActive: currentPeriod.headerMenuActiveColor,
            menuHover: currentPeriod.headerMenuHoverColor
        },
        timeline: {
            surface: currentPeriod.timelineCardBg,
            border: currentPeriod.timelineCardBorder,
            shadow: currentPeriod.timelineCardShadow
        }
    }), [currentPeriod])

    useEffect(() => {
        if (typeof window === 'undefined') return

        const detail = {
            header: { ...currentPalette.header },
            timeline: { ...currentPalette.timeline }
        }

        window.__historiaPalette = detail
        window.dispatchEvent(new CustomEvent('historia:palette-change', { detail }))

        return () => {
            if (window.__historiaPalette) {
                delete window.__historiaPalette
            }
        }
    }, [currentPalette])

    useEffect(() => {
        if (!totalEvents) return
        if (activeEventIndex >= totalEvents) {
            setActiveEventIndex(0)
        }
    }, [activeEventIndex, totalEvents])

    const focusEvent = useCallback((globalIndex) => {
        requestAnimationFrame(() => {
            if (!timelineRef.current) return
                const timelineContainer = timelineRef.current
            const eventElements = timelineContainer.querySelectorAll('[data-global-index]')
                const activeElement = Array.from(eventElements).find(el => 
                parseInt(el.getAttribute('data-global-index') || "", 10) === globalIndex
                )
                
                if (activeElement) {
                    const containerRect = timelineContainer.getBoundingClientRect()
                    const elementRect = activeElement.getBoundingClientRect()
                    const scrollLeft = timelineContainer.scrollLeft
                    const elementLeft = elementRect.left - containerRect.left + scrollLeft
                    const elementCenter = elementLeft + (elementRect.width / 2)
                    const containerCenter = containerRect.width / 2
                    const targetScroll = elementCenter - containerCenter
                    
                    timelineContainer.scrollTo({
                        left: Math.max(0, targetScroll),
                        behavior: 'smooth'
                    })
                }
        })
    }, [])

    const handleEventChange = (globalIndex) => {
        if (globalIndex < 0 || globalIndex >= enhancedEvents.length) return
        setActiveEventIndex(globalIndex)
        setHoveredTimeline(null)
        focusEvent(globalIndex)
    }

    const scrollToPeriod = (periodId) => {
        const targetEvent = enhancedEvents.find(event => event.periodId === periodId)
        if (targetEvent) {
            handleEventChange(targetEvent.globalIndex)
        }
    }

    useEffect(() => {
        const timelineContainer = timelineRef.current
        if (!timelineContainer || !totalEvents) return undefined

        let frameId = null

        const handleScroll = () => {
            if (frameId) cancelAnimationFrame(frameId)
            frameId = requestAnimationFrame(() => {
                const eventElements = timelineContainer.querySelectorAll('[data-global-index]')
                if (!eventElements.length) return

                const containerRect = timelineContainer.getBoundingClientRect()
                const containerCenter = containerRect.left + (containerRect.width / 2)

                let closestIndex = activeEventIndex
                let minDistance = Number.POSITIVE_INFINITY

                eventElements.forEach((el) => {
                    const indexAttr = el.getAttribute('data-global-index')
                    const parsedIndex = parseInt(indexAttr || "", 10)
                    if (Number.isNaN(parsedIndex)) return

                    const elementRect = el.getBoundingClientRect()
                    const elementCenter = elementRect.left + (elementRect.width / 2)
                    const distance = Math.abs(elementCenter - containerCenter)

                    if (distance < minDistance) {
                        minDistance = distance
                        closestIndex = parsedIndex
                    }
                })

                if (closestIndex !== activeEventIndex) {
                    setActiveEventIndex(closestIndex)
                }
            })
        }

        timelineContainer.addEventListener('scroll', handleScroll, { passive: true })

        return () => {
            timelineContainer.removeEventListener('scroll', handleScroll)
            if (frameId) cancelAnimationFrame(frameId)
        }
    }, [activeEventIndex, totalEvents])

    return (
        <div className="fixed inset-0 flex flex-col overflow-hidden z-0" style={{ height: '100vh', paddingTop: '64px' }}>
            {/* Contenido principal */}
            <section className="flex-1 relative overflow-hidden min-h-0">
                <div className="relative h-full w-full">
                    {/* Fondo del período activo */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${currentPeriod.bgGradient} transition-all duration-700`}>
                        <div 
                            className="absolute inset-0 opacity-30 transition-opacity duration-700"
                            style={getTextureStyle(currentPeriod.texture)}
                        />
                        <div className="absolute inset-0 bg-black/20" />
                    </div>
                    
                    {/* Contenido principal unificado */}
                    <div className="relative z-10 h-full px-4 sm:px-6 lg:px-8 py-5 sm:py-6 flex flex-col">
                        <div className="max-w-6xl mx-auto h-full w-full flex flex-col gap-6">
                            <div className="flex flex-col items-center text-center gap-2">
                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-title font-bold text-white drop-shadow-2xl">
                                    Historia de Cartagena
                                </h1>
                                <p className={`text-base sm:text-lg md:text-xl font-body ${currentPeriod.heroTaglineClass} drop-shadow-lg`}>
                                    Un viaje a través de los siglos
                                </p>
                            </div>

                            <div className="flex-1 min-h-0 flex flex-col lg:flex-row gap-6 lg:gap-12">
                                <aside className="lg:w-4/12 xl:w-1/3 flex flex-col gap-3 lg:pl-2">
                                    <div className="flex flex-col items-start gap-2 text-left">
                                        <h2 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-title font-semibold text-white drop-shadow-xl`}>
                                            {currentPeriod.title}
                                        </h2>
                                        <p className={`text-sm sm:text-base md:text-lg font-body text-white/80 drop-shadow-lg leading-relaxed`}>
                                            {currentPeriod.subtitle}
                                        </p>
                                        <p className={`text-xs sm:text-sm md:text-base font-body text-white/70 drop-shadow-md tracking-wide`}>
                                            {currentPeriod.period}
                                        </p>
                                    </div>
                                </aside>

                                {/* Eventos históricos - Slider (un evento a la vez) */}
                                <div className="flex-1 min-h-0 flex items-center md:items-stretch justify-center px-1 sm:px-2">
                                    {currentEvent && (
                                        <div className="w-full max-w-5xl mx-auto">
                                            <div
                                                className="rounded-2xl border overflow-hidden transition-all duration-500 flex flex-col md:flex-row md:items-stretch h-full backdrop-blur-sm"
                                                style={{
                                                    background: currentPalette.timeline.surface,
                                                    borderColor: currentPalette.timeline.border,
                                                    boxShadow: currentPalette.timeline.shadow
                                                }}
                                            >
                                                {/* Año */}
                                                <div className="flex-shrink-0 md:w-40 lg:w-48 flex md:flex-col md:justify-center bg-white/5 md:bg-white/10 px-5 sm:px-6 md:px-7 lg:px-8 py-4 sm:py-5 md:py-6 lg:py-8">
                                                    <div className={`px-4 sm:px-5 md:px-6 py-2 sm:py-3 rounded-full text-base sm:text-lg md:text-xl font-ui font-bold inline-flex justify-center md:text-2xl ${currentPeriod.yearBadgeClass}`}>
                                                        <span className="tracking-wide">{currentEvent.year}</span>
                                                    </div>
                                                </div>
                                                
                                                {/* Contenido */}
                                                <div className="flex-1 flex flex-col gap-4 px-5 sm:px-6 md:px-7 lg:px-8 py-5 sm:py-6 md:py-7 lg:py-8">
                                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                                                        <h3 className={`text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] ${currentPeriod.fontClass} font-semibold text-white drop-shadow-[0_12px_30px_rgba(0,0,0,0.35)]`}>
                                                            {currentEvent.title}
                                                        </h3>
                                                        <div className="flex items-center gap-3">
                                                            <span className="hidden sm:block h-px bg-white/20 w-12" />
                                                            <p className={`text-xs sm:text-sm font-ui uppercase tracking-[0.3em] text-white/50 whitespace-nowrap`}>
                                                                {currentPeriod.period}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <p className={`text-base sm:text-lg md:text-[1.05rem] font-body text-white/90 leading-relaxed drop-shadow-md`}>
                                                        {currentEvent.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Elementos decorativos */}
                    <div className={`absolute top-3 right-3 w-10 h-10 rounded-full blur-xl animate-float hidden sm:block opacity-30 ${currentPeriod.decorativeAccentClass}`} />
                </div>
            </section>

            {/* Línea de tiempo horizontal - Control del slider */}
            <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-t-4 border-yellow-400 flex-shrink-0 pb-4" style={{ minHeight: '260px', maxHeight: '280px' }}>
                <div className="max-w-6xl mx-auto h-full w-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex flex-col justify-center gap-3">
                    {/* Contenedor de timeline - Auto-scroll */}
                    <div className="relative h-full rounded-2xl backdrop-blur-sm max-w-5xl mx-auto"
                        style={{
                        background: currentPeriod.timelineCardBg,
                        border: `1px solid ${currentPeriod.timelineCardBorder}`,
                        boxShadow: currentPeriod.timelineCardShadow,
                        minHeight: '200px'
                        }}
                    >
                        <div 
                            ref={timelineRef}
                        className="timeline-scroll relative h-full overflow-x-auto overflow-y-hidden pb-1.5 -mb-1.5"
                            style={{
                                scrollBehavior: 'smooth'
                            }}
                        >
                            <div
                                className="relative h-full flex items-center px-4 sm:px-5 py-2.5"
                                style={{ width: 'max-content', minWidth: '100%' }}
                            >
                                {/* Línea de tiempo horizontal y eventos */}
                                <div
                                    className={`relative z-20 flex items-stretch gap-6 sm:gap-8 md:gap-10 min-w-max before:absolute before:top-1/2 before:left-0 before:right-0 before:h-1 before:-translate-y-1/2 before:rounded-full before:pointer-events-none ${currentPeriod.timelineGradient}`}
                                >
                                     {enhancedEvents.map((event, index) => {
                                         const isActive = activeEventIndex === event.globalIndex
                                         const isHovered = hoveredTimeline === event.globalIndex
                                         const titleText = event.title.length > 36 ? `${event.title.substring(0, 36)}…` : event.title
                                         const dotBaseClass = currentPeriod.timelineDotClass
                                         const dotActiveClass = currentPeriod.timelineDotActiveClass
                                         const dotHoverClass = currentPeriod.timelineDotHoverClass
                                         const activeTitleClass = currentPeriod.timelineActiveTitleClass
                                         const hoverTitleClass = currentPeriod.timelineHoverTitleClass
                                         const inactiveTitleClass = currentPeriod.timelineInactiveTitleClass

                                         return (
                                             <div
                                                 key={event.globalIndex}
                                                 data-global-index={event.globalIndex}
                                                 className="group relative flex-shrink-0 px-2 h-full"
                                                 style={{ width: 'clamp(7rem, 18vw, 9.5rem)' }}
                                                 onMouseEnter={() => setHoveredTimeline(event.globalIndex)}
                                            onMouseLeave={() => setHoveredTimeline(null)}
                                                 onClick={() => handleEventChange(event.globalIndex)}
                                             >
                                                <div className="grid h-full grid-rows-[54px_54px_54px] items-center justify-items-center gap-y-1.5 px-1 py-2">
                                                     <div className="flex w-full flex-col items-center justify-center text-center">
                                                         <span
                                                             className={`text-sm font-ui font-semibold transition-colors duration-300 ${
                                                                 isActive
                                                                     ? `${activeTitleClass} text-sm sm:text-base`
                                                                     : isHovered
                                                                         ? hoverTitleClass
                                                                         : inactiveTitleClass
                                                             }`}
                                                         >
                                                             {event.year}
                                                         </span>
                                                     </div>

                                                     <div className="relative flex w-full items-center justify-center">
                                                         <div
                                                             className={`${dotBaseClass} w-6 h-6 sm:w-7 sm:h-7 rounded-full transition-all duration-300 ${
                                                                 isActive ? 'z-30' : 'z-20'
                                                             } ${
                                                                 isActive
                                                                     ? dotActiveClass
                                                                     : isHovered
                                                                         ? dotHoverClass
                                                                         : ''
                                                             }`}
                                                         />
                                                </div>
                                                
                                                    <div className="flex w-full items-center justify-center px-1.5 text-center">
                                                         <span
                                                             className={`text-[11px] sm:text-xs font-ui font-medium leading-tight transition-colors duration-300 ${
                                                                 isActive ? activeTitleClass : inactiveTitleClass
                                                             }`}
                                                         >
                                                             {titleText}
                                                         </span>
                                                    </div>
                                            </div>
                                            
                                                 <div
                                                     className={`hidden sm:block absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 w-64 lg:w-72 bg-gray-900/95 text-white p-4 rounded-lg shadow-2xl pointer-events-none z-40 transition-all duration-300 ${
                                                         isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                                                     }`}
                                                 >
                                                <div className="text-xs font-ui font-bold mb-2 text-white">
                                                    {event.title}
                                                </div>
                                                     <div className="text-xs font-body text-white/90 leading-relaxed line-clamp-4">
                                                    {event.description}
                                                </div>
                                                     <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-900/95" />
                                            </div>
                                        </div>
                                         )
                                     })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
