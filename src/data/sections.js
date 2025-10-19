// Datos centralizados de las secciones de Cartagena
export const sections = [
    {
        id: 1,
        title: "Historia",
        description: "Sumérgete en la rica historia colonial de la Heroica Ciudad Amurallada.",
        href: "/historia",
        highlights: ["Castillo San Felipe", "Murallas", "Centro Histórico", "Getsemaní"]
    },
    {
        id: 2,
        title: "Sitios Turísticos",
        description: "Descubre los monumentos y lugares emblemáticos de Cartagena.",
        href: "/sitios-turisticos",
        highlights: ["Plaza Bolívar", "Torre del Reloj", "Catedral", "Palacio de la Inquisición"]
    },
    {
        id: 3,
        title: "Playas",
        description: "Relájate en las hermosas playas del Caribe colombiano.",
        href: "/playas",
        highlights: ["Bocagrande", "Castillogrande", "La Boquilla", "Islas del Rosario"]
    },
    {
        id: 4,
        title: "Museos",
        description: "Explora la cultura y el arte en los museos de la ciudad.",
        href: "/museos",
        highlights: ["Museo del Oro", "Museo Naval", "Casa Rafael Núñez", "Museo Histórico"],
        blocks: [
            {
                id: "joyas-esmeraldas",
                title: "Joyas y Esmeraldas",
                color: "#2d5a27",
                atmosphere: "Verde esmeralda translúcido",
                narrative: "Brillo, técnica y tradición en cada gema tallada.",
                museums: [
                    { name: "Caribe Jewelry Museum & Factory", description: "Recorre una mina simulada y descubre el arte de la joyería colombiana.", image: "https://i.pinimg.com/1200x/42/67/88/4267889f145d18bab3c4247dfe499245.jpg" },
                    { name: "Museo Precolombino de la Esmeralda", description: "Una mirada ancestral a las esmeraldas como símbolo espiritual y estético.", image: "https://museoprecolombinolaesmeralda.com/wp-content/uploads/2024/07/museo-precolombino-en-cartagena.jpeg" }
                ]
            },
            {
                id: "historia-viva",
                title: "Historia Viva",
                color: "#8b4513",
                atmosphere: "Ocre cálido tipo pergamino",
                narrative: "Memorias anfibias, batallas marítimas y ecos coloniales.",
                museums: [
                    { name: "Museo del Oro Zenú", description: "6.000 años entre la tierra y el agua: la vida anfibia del Caribe.", image: "https://d3nmwx7scpuzgc.cloudfront.net/sites/default/files/media/image/Moz-cartagena-exposicion-peranente-2023-slider-B-1920x900.jpg" },
                    { name: "Museo Naval del Caribe", description: "Batallas, mapas y galeones: la Cartagena marítima en acción.", image: "https://cr00.epimg.net/radio/imagenes/2020/10/02/cartagena/1601674303_327625_1601674503_noticia_normal.jpg" },
                    { name: "Museo Histórico", description: "Ecos coloniales y memorias de la Inquisición en Cartagena.", image: "https://www.muhca.gov.co/multimedia/galerias/galeria_conocenos_3.jpg" }
                ]
            },
            {
                id: "arte-contemporaneo",
                title: "Arte y Contemporáneo",
                color: "#1e3a8a",
                atmosphere: "Azul profundo con acentos pastel",
                narrative: "Color, crítica y creación en espacios que respiran cultura.",
                museums: [
                    { name: "Museo de Arte Moderno", description: "Color, crítica y creación en espacios que respiran cultura.", image: "https://i.pinimg.com/1200x/9a/8d/3f/9a8d3fc6c396018318eacc1f4a6eaeff.jpg" },
                    { name: "La Presentación Casa Museo Arte y Cultura", description: "Arte religioso y contemporáneo en un espacio histórico.", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/cf/f7/c2/obras.jpg?w=1000&h=-1&s=1" },
                    { name: "NH Galería", description: "Galería de arte de lujo con obras colombianas e internacionales. Entrada libre.", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/b1/ad/92/increible-espacio-y-exquisita.jpg?w=700&h=-1&s=1" }
                ]
            }
        ]
    },
    // {
    //     id: 5,
    //     title: "Centros Comerciales",
    //     description: "Encuentra las mejores opciones de compras y entretenimiento.",
    //     href: "/centros-comerciales",
    //     highlights: ["Centro Comercial Caribe Plaza", "Plaza Bocagrande", "Centro Histórico"]
    // },
    // {
    //     id: 6,
    //     title: "Lugares Poco Conocidos",
    //     description: "Explora los rincones secretos y auténticos que solo los locales conocen.",
    //     href: "/lugares-poco-conocidos",
    //     highlights: ["Getsemaní", "Mercado Bazurto", "Volcán Totumo", "Palenque"]
    // }
]

export const menuItems = [
    { name: "Inicio", href: "/inicio" },
    { name: "Historia", href: "/historia" },
    { name: "Sitios Turísticos", href: "/sitios-turisticos" },
    { name: "Playas", href: "/playas" },
    { name: "Museos", href: "/museos" }
    // { name: "Centros Comerciales", href: "/centros-comerciales" },
    // { name: "Lugares Poco Conocidos", href: "/lugares-poco-conocidos" }
]
