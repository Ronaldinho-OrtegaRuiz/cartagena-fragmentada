"use client"

import { Suspense, useCallback, useEffect, useMemo, useRef, useState } from "react"
import { useSearchParams } from "next/navigation"

function HistoriaContent() {
    const timelineRef = useRef(null)
    const programmaticScrollRef = useRef(false)
    const scrollResetTimeoutRef = useRef(null)
    const forceTimelineScrollRef = useRef(false)
    const forceTimelineAlignmentRef = useRef(null)
    const [hoveredTimeline, setHoveredTimeline] = useState(null)
    const [activeEventIndex, setActiveEventIndex] = useState(0)
    const [isInitialAnimationReady, setIsInitialAnimationReady] = useState(false)
    const timelineAnimationSlots = 8
    const searchParams = useSearchParams()

    const periods = useMemo(() => [
        {
            id: "colonial",
            icon: "⚔️",
            title: "Fundación y Época Colonial",
            period: "1533–1810",
            subtitle: "Cartagena, bastión del Caribe español",
            colorTheme: "colonial",
            heroGradient: "",
            heroTaglineClass: "text-[#f0e4cf]",
            headerGradientCss: "linear-gradient(135deg, #463729 0%, #7a5b36 55%, #d6b98c 100%)",
            headerBackgroundColor: "rgba(70, 55, 41, 0.95)",
            headerBorderColor: "rgba(214, 185, 140, 0.45)",
            headerTextColor: "#f8ead3",
            headerAccentColor: "#f6c56b",
            headerHoverColor: "#ffe3a1",
            headerMenuTextColor: "#f8ead3",
            headerMenuActiveColor: "#f6c56b",
            headerMenuHoverColor: "#ffe3a1",
            bgGradient: "from-[#3b2b20] via-[#2d2018] to-[#15100d]",
            pageBackgroundColor: "#2d2018",
            texture: "colonialPaper",
            textColor: "text-[#f8ead3]",
            accentColor: "text-[#f6c56b]",
            fontClass: "font-title",
            yearBadgeClass: "bg-[#d6b98c] text-[#2d1606]",
            timelineGradient: "before:bg-[#d6b98c]/60",
            timelineDotClass: "bg-[#d6b98c]",
            timelineDotActiveClass: "scale-125 sm:scale-150 ring-4 ring-[#f0e4cf] shadow-xl",
            timelineDotHoverClass: "scale-110 ring-2 ring-[#d6b98c] shadow-lg",
            timelineActiveTitleClass: "text-[#d6b98c]",
            timelineHoverTitleClass: "text-[#d6b98c]/80",
            timelineInactiveTitleClass: "text-white/70",
            decorativeAccentClass: "bg-[#d6b98c]",
            timelineCardBg: "rgba(70, 55, 41, 0.94)",
            timelineCardBorder: "rgba(214, 185, 140, 0.4)",
            timelineCardShadow: "0 30px 80px -32px rgba(20, 12, 6, 0.85)",
            timelineFooterBorderColor: "#d6b98c",
            textPrimary: "#f8ead3",
            textSecondary: "#e3cda4",
            textMuted: "#c7a979",
            events: [
                {
                    year: "1533",
                    title: "Fundación",
                    description: "Pedro de Heredia funda Cartagena de Indias el 1 de junio de 1533 sobre el poblado indígena Calamarí. La bahía protegida y profunda la convierte rápidamente en un puerto estratégico del Caribe español. Desde sus primeros años, la ciudad se proyecta como centro de comercio y defensa, atrayendo pobladores, comerciantes y misioneros.",
                    isMajor: true
                },
                {
                    year: "1543",
                    title: "Saqueo francés",
                    description: "Corsarios franceses atacan la ciudad, mostrando la vulnerabilidad inicial de la plaza y la necesidad de fortificaciones.",
                    isMajor: false
                },
                {
                    year: "1552",
                    title: "Incendio devastador",
                    description: "Un incendio consume la ciudad construida en madera. La tragedia impulsa la reconstrucción en piedra, con un trazado urbano más organizado y edificaciones resistentes, marcando el inicio de la Cartagena monumental que conocemos hoy.",
                    isMajor: false
                },
                {
                    year: "1568",
                    title: "Ataque de John Hawkins",
                    description: "El corsario inglés intenta forzar el comercio en Cartagena, reforzando la política defensiva de la Corona.",
                    isMajor: false
                },
                {
                    year: "1586",
                    title: "Ataque de Francis Drake",
                    description: "El corsario inglés saquea la ciudad y exige un fuerte rescate. El impacto del ataque convence a la Corona de reforzar las defensas, iniciando la construcción de murallas, baluartes y el célebre Castillo de San Felipe de Barajas.",
                    isMajor: true
                },
                {
                    year: "Siglo XVI–XVII",
                    title: "Auge del comercio esclavista",
                    description: "Cartagena se consolida como puerto negrero y nodo clave del sistema colonial. Desde aquí partían barcos cargados de oro, plata y esclavos hacia Europa.",
                    isMajor: true
                },
                {
                    year: "1649",
                    title: "Construcción del Canal del Dique",
                    description: "Se abre la conexión entre el río Magdalena y la bahía de Cartagena, vital para el comercio interior.",
                    isMajor: true
                },
                {
                    year: "Siglo XVII",
                    title: "Palenques y resistencia cimarrona",
                    description: "Comunidades de esclavos fugados, como San Basilio de Palenque, desafían el poder colonial y se convierten en símbolos de libertad.",
                    isMajor: true
                },
                {
                    year: "1741",
                    title: "Batalla de Cartagena de Indias",
                    description: "El almirante inglés Edward Vernon ataca con más de 180 barcos y 23.000 hombres. La heroica defensa de Blas de Lezo y las tropas locales logra una victoria épica.",
                    isMajor: true
                },
                {
                    year: "1777–1778",
                    title: "Censo del Caribe neogranadino",
                    description: "Cartagena concentra más del 70% de la población urbana de la región, confirmando su papel como centro demográfico y económico.",
                    isMajor: false
                },
                {
                    year: "Siglo XVIII",
                    title: "Consolidación colonial",
                    description: "La ciudad alcanza su esplendor: sede del Tribunal de la Inquisición, centro religioso y comercial del Caribe, y una de las urbes más importantes del Virreinato de la Nueva Granada.",
                    isMajor: false
                }
            ]
        },
        {
            id: "independencia",
            title: "Independencia y República Temprana",
            period: "1810–1886",
            subtitle: "La lucha por la libertad y la identidad nacional",
            colorTheme: "independencia",
            heroGradient: "",
            heroTaglineClass: "text-[#f2e1b3]",
            headerGradientCss: "linear-gradient(135deg, #652727 0%, #8c3a35 55%, #35241a 100%)",
            headerBackgroundColor: "rgba(74, 32, 30, 0.95)",
            headerBorderColor: "rgba(201, 79, 79, 0.4)",
            headerTextColor: "#f2e1b3",
            headerAccentColor: "#ffb347",
            headerHoverColor: "#ffc978",
            headerMenuTextColor: "#f2e1b3",
            headerMenuActiveColor: "#ffb347",
            headerMenuHoverColor: "#ffc978",
            pageBackgroundColor: "#2f1a18",
            textColor: "text-[#f2e1b3]",
            accentColor: "text-[#ffb347]",
            texture: "independenceSmoke",
            fontClass: "font-title",
            yearBadgeClass: "bg-[#c94f4f] text-[#2b1a14]",
            timelineGradient: "before:bg-[#c94f4f]/55",
            timelineDotClass: "bg-[#c94f4f]",
            timelineDotActiveClass: "scale-125 sm:scale-150 ring-4 ring-[#f2e1b3] shadow-xl",
            timelineDotHoverClass: "scale-110 ring-2 ring-[#c94f4f] shadow-lg",
            timelineActiveTitleClass: "text-[#ffb347]",
            timelineHoverTitleClass: "text-[#ffb347]/80",
            timelineInactiveTitleClass: "text-white/70",
            timelineCardBg: "rgba(47, 26, 24, 0.92)",
            timelineCardBorder: "rgba(201, 79, 79, 0.38)",
            timelineCardShadow: "0 30px 80px -32px rgba(25, 12, 10, 0.85)",
            timelineFooterBorderColor: "#c94f4f",
            textPrimary: "#f2e1b3",
            textSecondary: "#f7d59a",
            textMuted: "#cc9d6b",
            events: [
                {
                    year: "1810",
                    title: "Primer movimiento independentista",
                    description: "El 22 de mayo de 1810 se forma la Junta Suprema de Gobierno, inicio del proceso emancipador.",
                    isMajor: false
                },
                {
                    year: "11 de noviembre de 1811",
                    title: "Independencia absoluta",
                    description: "Cartagena proclama su independencia total de España, siendo la primera ciudad de Colombia en hacerlo oficialmente.",
                    isMajor: true
                },
                {
                    year: "1815",
                    title: "Sitio de Cartagena",
                    description: "El general español Pablo Morillo reconquista la ciudad tras un sitio de 105 días. La hambruna y la destrucción diezman a la población, pero la resistencia heroica otorga a Cartagena el título de \"Ciudad Heroica\".",
                    isMajor: true
                },
                {
                    year: "1821",
                    title: "Libertad definitiva",
                    description: "Tras la victoria de las fuerzas patriotas lideradas por Bolívar, Cartagena se libera definitivamente y se integra a la Gran Colombia.",
                    isMajor: true
                },
                {
                    year: "1823",
                    title: "Primer plano geométrico republicano",
                    description: "Se realiza el primer levantamiento urbano de la ciudad en época republicana, reflejando la reorganización tras la independencia.",
                    isMajor: false
                },
                {
                    year: "1830–1886",
                    title: "Repliegue y transformación",
                    description: "Durante el siglo XIX, Cartagena pierde protagonismo político frente a Bogotá y Barranquilla, pero mantiene su vitalidad cultural y portuaria.",
                    isMajor: false
                }
            ]
        },
        {
            id: "republica",
            title: "República Liberal y Modernización",
            period: "1886–1950",
            subtitle: "Modernización y despertar cultural",
            colorTheme: "liberal",
            heroGradient: "",
            heroTaglineClass: "text-[#e3dcd3]",
            headerGradientCss: "linear-gradient(135deg, #1f2a37 0%, #30455b 55%, #405b7c 100%)",
            headerBackgroundColor: "rgba(33, 45, 58, 0.92)",
            headerBorderColor: "rgba(147, 167, 192, 0.45)",
            headerTextColor: "#e3dcd3",
            headerAccentColor: "#93a7c0",
            headerHoverColor: "#b3c3d8",
            headerMenuTextColor: "#e3dcd3",
            headerMenuActiveColor: "#93a7c0",
            headerMenuHoverColor: "#b3c3d8",
            pageBackgroundColor: "#1f2a37",
            texture: "blueprint",
            textColor: "text-[#e3dcd3]",
            accentColor: "text-[#93a7c0]",
            fontClass: "font-ui",
            yearBadgeClass: "bg-[#405b7c] text-[#e3dcd3]",
            timelineGradient: "before:bg-[#405b7c]/55",
            timelineDotClass: "bg-[#405b7c]",
            timelineDotActiveClass: "scale-125 sm:scale-150 ring-4 ring-[#e3dcd3] shadow-xl",
            timelineDotHoverClass: "scale-110 ring-2 ring-[#405b7c] shadow-lg",
            timelineActiveTitleClass: "text-[#93a7c0]",
            timelineHoverTitleClass: "text-[#93a7c0]/80",
            timelineInactiveTitleClass: "text-white/70",
            timelineCardBg: "rgba(31, 42, 55, 0.92)",
            timelineCardBorder: "rgba(147, 167, 192, 0.4)",
            timelineCardShadow: "0 30px 80px -32px rgba(11, 21, 32, 0.8)",
            timelineFooterBorderColor: "#405b7c",
            textPrimary: "#dde6ef",
            textSecondary: "#c0ccd9",
            textMuted: "#93a7c0",
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
                    description: "La ciudad inicia un proceso de reconstrucción y apertura económica, consolidando su papel como puerto moderno.",
                    isMajor: false
                },
                {
                    year: "1880–1924",
                    title: "\"Murallicidio\"",
                    description: "Se derriban partes de las murallas coloniales para expandir la ciudad, hasta que la Ley 32 de 1924 detiene el proceso.",
                    isMajor: true
                },
                {
                    year: "1920–1930",
                    title: "Modernización urbana",
                    description: "Se amplía el puerto marítimo, se abren avenidas y surgen barrios modernos como Manga y Bocagrande.",
                    isMajor: true
                },
                {
                    year: "1940–1950",
                    title: "Despertar cultural",
                    description: "Surgen periódicos, revistas y círculos literarios. Se fortalece la identidad costeña y Cartagena se proyecta como centro cultural y artístico.",
                    isMajor: true
                }
            ]
        },
        {
            id: "contemporanea",
            title: "Cartagena Contemporánea",
            period: "1950–Presente",
            subtitle: "Patrimonio vivo en el siglo XXI",
            colorTheme: "contemporanea",
            heroGradient: "",
            heroTaglineClass: "text-[#f8f8f8]",
            headerGradientCss: "linear-gradient(135deg, #1d1d1d 0%, #2b8c74 55%, #f0c808 100%)",
            headerBackgroundColor: "rgba(29, 29, 29, 0.92)",
            headerBorderColor: "rgba(240, 200, 8, 0.45)",
            headerTextColor: "#f8f8f8",
            headerAccentColor: "#f0c808",
            headerHoverColor: "#ffd95a",
            headerMenuTextColor: "#f8f8f8",
            headerMenuActiveColor: "#f0c808",
            headerMenuHoverColor: "#ffd95a",
            pageBackgroundColor: "#162623",
            texture: "contemporaryWaves",
            textColor: "text-[#f8f8f8]",
            accentColor: "text-[#f0c808]",
            fontClass: "font-ui",
            yearBadgeClass: "bg-[#2b8c74] text-[#1d1d1d]",
            timelineGradient: "before:bg-[#2b8c74]/55",
            timelineDotClass: "bg-[#2b8c74]",
            timelineDotActiveClass: "scale-125 sm:scale-150 ring-4 ring-[#f8f8f8] shadow-xl",
            timelineDotHoverClass: "scale-110 ring-2 ring-[#2b8c74] shadow-lg",
            timelineActiveTitleClass: "text-[#f0c808]",
            timelineHoverTitleClass: "text-[#f0c808]/80",
            timelineInactiveTitleClass: "text-white/70",
            timelineCardBg: "rgba(22, 38, 35, 0.9)",
            timelineCardBorder: "rgba(43, 140, 116, 0.45)",
            timelineCardShadow: "0 30px 80px -32px rgba(12, 24, 22, 0.85)",
            timelineFooterBorderColor: "#2b8c74",
            textPrimary: "#edfdfa",
            textSecondary: "#c4eee3",
            textMuted: "#8acfbf",
            events: [
                {
                    year: "1950–1970",
                    title: "Renacimiento patrimonial y turístico",
                    description: "Empieza la restauración del Centro Histórico, Getsemaní y el Castillo de San Felipe. El turismo nacional crece con fuerza.",
                    isMajor: true
                },
                {
                    year: "1971",
                    title: "Erradicación del barrio Chambacú",
                    description: "Transformación urbana con fuerte impacto social, símbolo de la modernización desigual.",
                    isMajor: true
                },
                {
                    year: "1984",
                    title: "Patrimonio de la Humanidad",
                    description: "La UNESCO declara el conjunto histórico y sus fortificaciones como Patrimonio Cultural de la Humanidad.",
                    isMajor: true
                },
                {
                    year: "1990–2000",
                    title: "Expansión internacional",
                    description: "Cartagena se consolida como destino turístico internacional y sede de eventos culturales como el Festival Internacional de Cine.",
                    isMajor: true
                },
                {
                    year: "2007",
                    title: "Inventario de patrimonio intangible",
                    description: "Se inicia el registro oficial de tradiciones afrodescendientes y caribeñas como parte del patrimonio cultural de la ciudad.",
                    isMajor: false
                },
                {
                    year: "2010–2020",
                    title: "Innovación y cultura",
                    description: "La ciudad combina tradición con modernidad: proliferan espacios culturales, proyectos de innovación social y programas de conservación patrimonial.",
                    isMajor: false
                },
                {
                    year: "2021–Presente",
                    title: "Cartagena global y resiliente",
                    description: "Hoy, Cartagena enfrenta el desafío de preservar su patrimonio histórico mientras crece como ciudad tecnológica, turística y cultural.",
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
            colonialPaper: {
                backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><defs><pattern id="colonialPaper" width="52" height="52" patternUnits="userSpaceOnUse"><rect width="52" height="52" fill="%23f6e5c8" opacity="0.65"/><path d="M0 0 L52 0 L52 52 L0 52 Z" fill="none" stroke="%23b48a4f" stroke-width="0.5" opacity="0.55"/><path d="M0 13 L52 13 M0 26 L52 26 M0 39 L52 39" stroke="%23d4b27a" stroke-width="0.35" opacity="0.45"/><path d="M13 0 L13 52 M26 0 L26 52 M39 0 L39 52" stroke="%23d4b27a" stroke-width="0.35" opacity="0.45"/><circle cx="10" cy="8" r="1.4" fill="%23cfa669" opacity="0.6"/><circle cx="40" cy="32" r="1.6" fill="%23a0743f" opacity="0.5"/><path d="M4 45 Q26 38 48 45" stroke="%23a0743f" stroke-width="0.6" opacity="0.4" fill="none"/><path d="M6 4 Q26 10 46 4" stroke="%23a0743f" stroke-width="0.4" opacity="0.35" fill="none"/></pattern></defs><rect width="100%" height="100%" fill="url(%23colonialPaper)"/></svg>')`,
                backgroundSize: '180px 180px'
            },
            wood: {
                backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><defs><pattern id="wood" width="40" height="40" patternUnits="userSpaceOnUse"><rect width="40" height="40" fill="%238B0000" opacity="0.1"/><path d="M0 0 L40 0 M0 10 L40 10 M0 20 L40 20 M0 30 L40 30" stroke="%23A52A2A" stroke-width="0.5" opacity="0.3"/><path d="M0 5 L40 5 M0 15 L40 15 M0 25 L40 25 M0 35 L40 35" stroke="%23DC143C" stroke-width="0.3" opacity="0.2"/></pattern></defs><rect width="100%" height="100%" fill="url(%23wood)"/></svg>')`,
                backgroundSize: '80px 80px'
            },
            independenceSmoke: {
                backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"><defs><pattern id="smoke" width="90" height="90" patternUnits="userSpaceOnUse"><rect width="90" height="90" fill="%2335241a" opacity="0.85"/><path d="M5 80 Q45 70 85 80" stroke="%2350362a" stroke-width="1.5" opacity="0.35" fill="none"/><path d="M10 40 Q30 10 60 15 T85 35" stroke="%238c3a35" stroke-width="1.2" opacity="0.28" fill="none"/><path d="M0 0 L90 0 L90 2 L0 2 Z" fill="%23c94f4f" opacity="0.12"/><path d="M0 88 L90 88 L90 90 L0 90 Z" fill="%23ffb347" opacity="0.1"/><circle cx="25" cy="55" r="4" fill="%23c94f4f" opacity="0.18"/><circle cx="70" cy="28" r="5" fill="%23ffb347" opacity="0.12"/></pattern></defs><rect width="100%" height="100%" fill="url(%23smoke)"/></svg>')`,
                backgroundSize: '220px 220px'
            },
            marble: {
                backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><defs><pattern id="marble" width="100" height="100" patternUnits="userSpaceOnUse"><rect width="100" height="100" fill="%231E3A8A" opacity="0.1"/><path d="M0 0 Q50 30 100 0 T200 0" stroke="%233F51B5" stroke-width="1" opacity="0.2" fill="none"/><path d="M0 50 Q50 80 100 50 T200 50" stroke="%232196F3" stroke-width="0.8" opacity="0.15" fill="none"/><path d="M0 100 Q50 130 100 100 T200 100" stroke="%233F51B5" stroke-width="1" opacity="0.2" fill="none"/></pattern></defs><rect width="100%" height="100%" fill="url(%23marble)"/></svg>')`,
                backgroundSize: '200px 200px'
            },
            blueprint: {
                backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><defs><pattern id="blueprint" width="60" height="60" patternUnits="userSpaceOnUse"><rect width="60" height="60" fill="%231f2a37" opacity="0.95"/><path d="M0 0 L60 0 L60 60 L0 60 Z" fill="none" stroke="%23405b7c" stroke-width="0.6" opacity="0.4"/><path d="M0 30 L60 30" stroke="%2393a7c0" stroke-width="0.4" opacity="0.35"/><path d="M30 0 L30 60" stroke="%2393a7c0" stroke-width="0.4" opacity="0.35"/><path d="M10 10 L25 10 L25 25 L10 25 Z" fill="none" stroke="%23e3dcd3" stroke-width="0.5" opacity="0.35"/><path d="M35 45 Q45 35 55 45" stroke="%23e3dcd3" stroke-width="0.5" opacity="0.28" fill="none"/><circle cx="45" cy="15" r="2.5" fill="%23ffb347" opacity="0.25"/></pattern></defs><rect width="100%" height="100%" fill="url(%23blueprint)"/></svg>')`,
                backgroundSize: '180px 180px'
            },
            concrete: {
                backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="concrete" width="50" height="50" patternUnits="userSpaceOnUse"><rect width="50" height="50" fill="%23FF8C00" opacity="0.05"/><path d="M0 0 L50 50 M50 0 L0 50" stroke="%23FFA500" stroke-width="0.3" opacity="0.1"/><circle cx="25" cy="25" r="2" fill="%23FFD700" opacity="0.1"/></pattern></defs><rect width="100%" height="100%" fill="url(%23concrete)"/></svg>')`,
                backgroundSize: '100px 100px'
            },
            contemporaryWaves: {
                backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><defs><pattern id="wavesContemporary" width="120" height="120" patternUnits="userSpaceOnUse"><rect width="120" height="120" fill="%23162623" opacity="0.95"/><path d="M0 40 Q30 20 60 40 T120 40" stroke="%232b8c74" stroke-width="1.8" opacity="0.35" fill="none"/><path d="M0 80 Q30 60 60 80 T120 80" stroke="%239ed5c4" stroke-width="1.2" opacity="0.3" fill="none"/><path d="M0 20 Q25 35 50 20 T100 20" stroke="%23f0c808" stroke-width="0.9" opacity="0.18" fill="none"/><circle cx="30" cy="60" r="5" fill="%23f0c808" opacity="0.2"/><circle cx="90" cy="95" r="6" fill="%232b8c74" opacity="0.25"/></pattern></defs><rect width="100%" height="100%" fill="url(%23wavesContemporary)"/></svg>')`,
                backgroundSize: '220px 220px'
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
            background: currentPeriod.headerBackgroundColor || currentPeriod.headerGradientCss,
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
            shadow: currentPeriod.timelineCardShadow,
            footerBorder: currentPeriod.timelineFooterBorderColor || '#facc15'
        }
    }), [currentPeriod])

    const pageTextureStyle = useMemo(() => getTextureStyle(currentPeriod.texture), [currentPeriod])
    const textPalette = useMemo(() => ({
        primary: currentPeriod.textPrimary || '#ffffff',
        secondary: currentPeriod.textSecondary || 'rgba(255,255,255,0.85)',
        muted: currentPeriod.textMuted || 'rgba(255,255,255,0.6)'
    }), [currentPeriod])

    // Calcular altura mínima basada en la descripción más larga
    const minContentHeight = useMemo(() => {
        if (!enhancedEvents.length) return '18rem'
        
        // Encontrar la descripción más larga
        const longestDescription = enhancedEvents.reduce((longest, event) => {
            return event.description.length > longest.length ? event.description : longest
        }, enhancedEvents[0].description)
        
        // Estimar altura basada en longitud del texto
        // Aproximadamente 60-70 caracteres por línea, y cada línea ~1.75rem de altura
        const estimatedLines = Math.ceil(longestDescription.length / 65)
        const baseHeight = 12 // altura base para título, badge, etc. en rem
        const textHeight = estimatedLines * 1.75
        
        // Altura mínima total en rem, con un mínimo de 18rem
        const totalHeight = baseHeight + textHeight
        return `${Math.max(18, Math.ceil(totalHeight))}rem`
    }, [enhancedEvents])

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
        if (typeof window === 'undefined') return
        const timer = window.setTimeout(() => setIsInitialAnimationReady(true), 50)
        return () => window.clearTimeout(timer)
    }, [])

    useEffect(() => {
        if (!totalEvents) return
        if (activeEventIndex >= totalEvents) {
            setActiveEventIndex(0)
        }
    }, [activeEventIndex, totalEvents])

    // 🔄 Ajustar scroll cuando cambia el evento activo - siempre mostrar 5-6 eventos
    const scrollToActiveEvent = useCallback(() => {
        requestAnimationFrame(() => {
            // En móvil, no hacer scroll automático - dejar que el usuario controle manualmente
            const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
            const forceScroll = forceTimelineScrollRef.current
            if (isMobile && !forceScroll) {
                return
            }
            
            if (!timelineRef.current) return
            const timelineContainer = timelineRef.current
            const eventElements = timelineContainer.querySelectorAll('[data-global-index]')
            const activeElement = Array.from(eventElements).find(el =>
                parseInt(el.getAttribute('data-global-index') || "", 10) === activeEventIndex
            )

            if (!activeElement) return

            const { scrollLeft, clientWidth } = timelineContainer
            const elementLeft = activeElement.offsetLeft
            const elementWidth = activeElement.offsetWidth
            const elementRight = elementLeft + elementWidth
            const elementCenter = elementLeft + elementWidth / 2
            const padding = 16 // Padding del contenedor
            const viewportLeft = scrollLeft
            const viewportRight = scrollLeft + clientWidth

            // Calcular el ancho real de un evento para determinar cuántos mostrar
            // Usamos el ancho del evento activo como referencia
            const eventWidth = elementWidth
            const gapWidth = 48 // gap entre eventos (24px * 2 por el gap-6 sm:gap-8)
            const eventWithGap = eventWidth + gapWidth
            
            // Queremos mostrar aproximadamente 5-6 eventos
            const targetVisibleEvents = 5.5
            const totalEventWidth = eventWithGap * targetVisibleEvents
            
            // Verificar si el evento está completamente fuera del viewport
            const isFullyOutsideLeft = elementRight < viewportLeft + padding
            const isFullyOutsideRight = elementLeft > viewportRight - padding
            
            let newScrollLeft = scrollLeft

            if (forceScroll && forceTimelineAlignmentRef.current === 'center') {
                const maxScroll = timelineContainer.scrollWidth - clientWidth
                newScrollLeft = Math.max(0, Math.min(maxScroll, elementCenter - clientWidth / 2))
            } else if (isFullyOutsideLeft) {
                // El evento está completamente a la izquierda, desplazar para mostrarlo
                newScrollLeft = Math.max(0, elementLeft - padding)
            } else if (isFullyOutsideRight) {
                // El evento está completamente a la derecha, desplazar para mostrarlo
                const maxScroll = timelineContainer.scrollWidth - clientWidth
                newScrollLeft = Math.min(maxScroll, elementRight - clientWidth + padding)
            } else {
                // El evento está visible, centrarlo aproximadamente con eventos alrededor
                // Queremos que el evento activo esté en el centro, mostrando ~2.5 eventos a cada lado
                let desiredScroll
                if (forceTimelineAlignmentRef.current === 'center') {
                    desiredScroll = elementCenter - clientWidth / 2
                } else {
                    const eventsOnLeft = 2.5
                    desiredScroll = elementLeft - (eventsOnLeft * eventWithGap) - padding
                }
                
                // Verificar límites
                const maxScroll = timelineContainer.scrollWidth - clientWidth
                newScrollLeft = Math.max(0, Math.min(maxScroll, desiredScroll))
                
                // Si estamos en los extremos, ajustar para mostrar el máximo de eventos posible
                if (activeEventIndex === 0) {
                    // Primer evento: mostrar desde el inicio
                    newScrollLeft = 0
                } else if (activeEventIndex === totalEvents - 1) {
                    // Último evento: mostrar hasta el final
                    newScrollLeft = Math.max(0, timelineContainer.scrollWidth - clientWidth)
                }
            }

            // Solo hacer scroll si es necesario (con un margen pequeño para evitar micro-movimientos)
            const requiresScroll = Math.abs(newScrollLeft - scrollLeft) > 5
            if (requiresScroll || (forceScroll && forceTimelineAlignmentRef.current === 'center')) {
                programmaticScrollRef.current = true
                if (scrollResetTimeoutRef.current) {
                    clearTimeout(scrollResetTimeoutRef.current)
                }

                timelineContainer.scrollTo({
                    left: newScrollLeft,
                    behavior: 'smooth'
                })

                scrollResetTimeoutRef.current = window.setTimeout(() => {
                    programmaticScrollRef.current = false
                    scrollResetTimeoutRef.current = null
                }, 300)
                forceTimelineScrollRef.current = false
                forceTimelineAlignmentRef.current = null
            }
        })
    }, [activeEventIndex, totalEvents])

    const handleEventChange = useCallback((globalIndex) => {
        if (globalIndex < 0 || globalIndex >= enhancedEvents.length) return
        setActiveEventIndex(globalIndex)
        setHoveredTimeline(null)
    }, [enhancedEvents.length])

    const scrollToPeriod = useCallback((periodId) => {
        const targetEvent = enhancedEvents.find(event => event.periodId === periodId)
        if (targetEvent) {
            const shouldCenter = (targetEvent.periodIndex ?? 0) > 0
            forceTimelineScrollRef.current = shouldCenter
            forceTimelineAlignmentRef.current = shouldCenter ? 'center' : null
            handleEventChange(targetEvent.globalIndex)
            return true
        }
        return false
    }, [enhancedEvents, handleEventChange])

    // 🔄 Ajustar scroll cuando cambia activeEventIndex (basado en selección)
    useEffect(() => {
        if (activeEventIndex < 0 || activeEventIndex >= totalEvents) return
        scrollToActiveEvent()
    }, [activeEventIndex, totalEvents, scrollToActiveEvent])

    // 👉 Navegación directa desde Inicio por época
    const periodFromQuery = searchParams?.get("period") ?? null

    useEffect(() => {
        if (!periodFromQuery) return
        scrollToPeriod(periodFromQuery)
    }, [periodFromQuery, scrollToPeriod])

    useEffect(() => {
        if (typeof window === "undefined") return
        const storedPeriod = sessionStorage.getItem("historiaPeriod")
        if (storedPeriod) {
            scrollToPeriod(storedPeriod)
            sessionStorage.removeItem("historiaPeriod")
        }
    }, [scrollToPeriod])

    // ⌨️ Navegación con flechas del teclado - siempre activa en la página
    useEffect(() => {
        const handleKeyDown = (event) => {
            // Solo procesar si no está escribiendo en un input/textarea/contenteditable
            const target = event.target
            if (
                target.tagName === 'INPUT' || 
                target.tagName === 'TEXTAREA' || 
                target.isContentEditable ||
                target.closest('[contenteditable="true"]')
            ) {
                return
            }

            // Permitir navegación con flechas sin necesidad de hacer focus primero
            if (event.key === 'ArrowLeft') {
                event.preventDefault()
                if (activeEventIndex > 0) {
                    handleEventChange(activeEventIndex - 1)
                }
            } else if (event.key === 'ArrowRight') {
                event.preventDefault()
                if (activeEventIndex < totalEvents - 1) {
                    handleEventChange(activeEventIndex + 1)
                }
            }
        }

        // Agregar listener al document para que funcione en toda la página
        document.addEventListener('keydown', handleKeyDown)
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [activeEventIndex, totalEvents, enhancedEvents.length, handleEventChange])

    return (
        <div
            className="relative flex min-h-screen flex-col overflow-x-hidden z-0 lg:fixed lg:inset-0 lg:h-screen lg:min-h-0"
            style={{
                paddingTop: '64px',
                minHeight: '100vh',
                backgroundColor: currentPeriod.pageBackgroundColor || '#1a1a1a',
                backgroundImage: pageTextureStyle?.backgroundImage,
                backgroundSize: pageTextureStyle?.backgroundSize || '200px 200px',
                backgroundRepeat: 'repeat'
            }}
        >
            {/* Contenido principal */}
            <section className="flex-1 relative lg:overflow-hidden">
                <div className="relative w-full lg:h-full">
            {/* Fondo del período activo */}
            <div className="absolute inset-0 transition-all duration-700" style={{ background: currentPeriod.pageBackgroundColor || '#1f242d' }}>
                <div 
                    className="absolute inset-0 opacity-25 transition-opacity duration-700"
                    style={pageTextureStyle}
                />
            </div>
                    
                    {/* Contenido principal unificado */}
                    <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-5 sm:pt-7 pb-12 sm:pb-16 flex flex-col lg:h-full">
                        <div className="max-w-6xl mx-auto flex w-full flex-col gap-8 lg:h-full lg:overflow-hidden">
                            <div className="flex flex-col items-center text-center gap-2 mt-5 sm:mt-7 lg:mt-10">
                                <h1
                                    className={`text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-title font-bold drop-shadow-2xl animate-fade-in-up ${isInitialAnimationReady ? 'animate-enter-active' : ''}`}
                                    style={{ color: textPalette.primary, transitionDelay: '0.05s' }}
                                >
                                    Historia de Cartagena
                                </h1>
                                <p
                                    className={`text-base sm:text-lg md:text-xl font-body drop-shadow-lg animate-fade-in-up-delayed ${isInitialAnimationReady ? 'animate-enter-active' : ''}`}
                                    style={{ color: textPalette.secondary, transitionDelay: '0.15s' }}
                                >
                                    Un viaje a través de los siglos
                                </p>
                            </div>

                                <div className="flex-1 min-h-0 mt-6 flex flex-col gap-6 overflow-visible sm:mt-8 lg:mt-10 lg:flex-row lg:gap-12 lg:overflow-hidden">
                                <aside className="flex flex-shrink-0 flex-col gap-3 lg:w-4/12 xl:w-1/3 lg:pl-2">
                                    <div className="flex flex-col items-start gap-2 text-left">
                                        <h2
                                            className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-title font-semibold drop-shadow-xl animate-fade-in-up ${isInitialAnimationReady ? 'animate-enter-active' : ''}`}
                                            style={{ color: textPalette.primary, transitionDelay: '0.1s' }}
                                        >
                                            {currentPeriod.title}
                                        </h2>
                                        <p
                                            className={`text-sm sm:text-base md:text-lg font-body drop-shadow-lg leading-relaxed animate-fade-in-up-delayed ${isInitialAnimationReady ? 'animate-enter-active' : ''}`}
                                            style={{ color: textPalette.secondary, transitionDelay: '0.2s' }}
                                        >
                                            {currentPeriod.subtitle}
                                        </p>
                                        <p
                                            className={`text-xs sm:text-sm md:text-base font-body drop-shadow-md tracking-wide uppercase animate-fade-in-up-delayed ${isInitialAnimationReady ? 'animate-enter-active' : ''}`}
                                            style={{ color: textPalette.muted, letterSpacing: '0.18em', transitionDelay: '0.3s' }}
                                        >
                                            {currentPeriod.period}
                                        </p>
                                    </div>
                                </aside>

                                {/* Eventos históricos - Slider (un evento a la vez) */}
                                <div className="flex-1 min-h-0 px-1 sm:px-2">
                                    {currentEvent && (
                                        <div 
                                            className="mx-auto flex w-full max-w-5xl flex-col justify-between gap-6 md:flex-row md:items-stretch lg:gap-10 lg:h-full"
                                            style={{ minHeight: minContentHeight }}
                                        >
                                            {/* Contenido */}
                                            <div className="flex flex-1 flex-col gap-4">
                                                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                                                    <h3
                                                        className={`text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] ${currentPeriod.fontClass} font-semibold drop-shadow-[0_12px_30px_rgba(0,0,0,0.35)] animate-fade-in-up ${isInitialAnimationReady ? 'animate-enter-active' : ''}`}
                                                        style={{ color: textPalette.primary, transitionDelay: '0.1s' }}
                                                    >
                                                        {currentEvent.title}
                                                    </h3>
                                                    <div className="flex items-center gap-3 mt-0 md:pt-1">
                                                        <span
                                                            className={`hidden sm:block h-px bg-white/30 w-12 horizontal-line-animate ${isInitialAnimationReady ? 'horizontal-line-visible' : ''}`}
                                                            style={{ transitionDelay: '0.16s' }}
                                                        />
                                                        <p
                                                            className={`text-xs sm:text-sm font-ui uppercase tracking-[0.3em] whitespace-nowrap animate-fade-in-up-delayed ${isInitialAnimationReady ? 'animate-enter-active' : ''}`}
                                                            style={{ color: textPalette.muted, transitionDelay: '0.18s' }}
                                                        >
                                                            {currentPeriod.period}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <span className={`inline-flex px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-sm sm:text-base font-ui font-semibold tracking-wide ${currentPeriod.yearBadgeClass} animate-fade-in-up-delayed ${isInitialAnimationReady ? 'animate-enter-active' : ''}`} style={{ transitionDelay: '0.22s' }}>
                                                        {currentEvent.year}
                                                    </span>
                                                </div>
                                                <div className="flex-1 overflow-y-auto pr-1">
                                                    <p
                                                        className={`text-base sm:text-lg md:text-[1.05rem] font-body leading-relaxed drop-shadow-md animate-fade-in-up-delayed ${isInitialAnimationReady ? 'animate-enter-active' : ''}`}
                                                        style={{ color: textPalette.secondary, transitionDelay: '0.3s' }}
                                                    >
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
                </div>
            </section>

            {/* Línea de tiempo horizontal - Control del slider */}
            <section
                className="relative flex-shrink-0 border-t-4 pb-4 transition-colors duration-500"
                style={{
                    minHeight: '240px',
                    borderTopColor: currentPalette.timeline.footerBorder,
                    background: currentPeriod.footerBackground || currentPeriod.timelineCardBg
                }}
            >
                <div className="max-w-6xl mx-auto flex h-full w-full flex-col justify-center gap-3 px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
                    {/* Contenedor de timeline - Auto-scroll */}
                    <div className="relative mx-auto h-full w-full max-w-5xl rounded-2xl backdrop-blur-sm"
                        style={{
                        background: currentPeriod.timelineCardBg,
                        border: `1px solid ${currentPeriod.timelineCardBorder}`,
                        boxShadow: currentPeriod.timelineCardShadow,
                            minHeight: '180px',
                            maxHeight: '220px'
                        }}
                    >
                        <div 
                            ref={timelineRef}
                        className="timeline-scroll relative h-full overflow-x-auto overflow-y-hidden pb-1.5 -mb-1.5"
                            style={{
                                scrollBehavior: 'smooth',
                                outline: 'none',
                                WebkitTapHighlightColor: 'transparent',
                                userSelect: 'none'
                            }}
                            role="region"
                            aria-label="Línea de tiempo histórica - Use las flechas izquierda y derecha para navegar"
                            onMouseDown={(e) => {
                                // Prevenir focus visual pero permitir scroll y clicks en eventos
                                const isClickOnEvent = e.target.closest('[data-global-index]')
                                if (!isClickOnEvent && e.target === e.currentTarget) {
                                    e.preventDefault()
                                }
                            }}
                            onTouchStart={(e) => {
                                // Prevenir highlight en móviles
                                const isTouchOnEvent = e.target.closest('[data-global-index]')
                                if (!isTouchOnEvent) {
                                    e.preventDefault()
                                }
                            }}
                        >
                            <div
                                className="relative h-full flex items-center px-4 sm:px-5 py-2.5"
                                style={{ width: 'max-content', minWidth: '100%' }}
                            >
                                {/* Línea de tiempo horizontal y eventos */}
                                <div
                                    className={`timeline-line ${isInitialAnimationReady ? 'timeline-line-animate' : ''} relative z-20 flex items-stretch gap-6 sm:gap-8 md:gap-10 min-w-max before:absolute before:top-1/2 before:left-0 before:right-0 before:h-1 before:-translate-y-1/2 before:rounded-full before:pointer-events-none ${currentPeriod.timelineGradient}`}
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
                                                className={`timeline-event ${isInitialAnimationReady ? 'timeline-event-visible' : ''} group relative flex-shrink-0 px-2 h-full`}
                                                style={{ 
                                                    width: 'clamp(8rem, calc((100vw - 4rem) / 6), 12rem)',
                                                    transitionDelay: `${(index % timelineAnimationSlots) * 0.08}s`
                                                }}
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

export default function Historia() {
    return (
        <Suspense fallback={null}>
            <HistoriaContent />
        </Suspense>
    )
}
