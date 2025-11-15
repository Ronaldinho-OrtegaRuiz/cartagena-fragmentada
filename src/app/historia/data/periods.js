const periods = [
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
]

export default periods

