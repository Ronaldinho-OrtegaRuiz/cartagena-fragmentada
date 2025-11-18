// Datos de los sitios turísticos de Cartagena
export const sites = [
    {
        id: 1,
        name: "Castillo San Felipe",
        slug: "castillo-san-felipe",
        description: "La fortaleza más grande construida por los españoles en América. Ofrece vistas espectaculares de la ciudad."
    },
    {
        id: 2,
        name: "Plaza de Bolívar",
        slug: "plaza-de-bolivar",
        description: "Corazón del centro histórico, rodeada de edificios coloniales y la estatua del Libertador Simón Bolívar."
    },
    {
        id: 3,
        name: "Torre del Reloj",
        slug: "torre-del-reloj",
        description: "Puerta de entrada principal al centro histórico, símbolo icónico de Cartagena."
    },
    {
        id: 4,
        name: "Plaza de Santo Domingo",
        slug: "plaza-de-santo-domingo",
        description: "Una de las plazas más animadas, con la famosa escultura \"La Gorda Gertrudis\" de Fernando Botero."
    },
    {
        id: 5,
        name: "Convento de la Popa",
        slug: "convento-de-la-popa",
        description: "Ubicado en el punto más alto de la ciudad, ofrece vistas panorámicas espectaculares."
    },
    {
        id: 6,
        name: "Las Bóvedas",
        slug: "las-bovedas",
        description: "Antiguas cárceles convertidas en galerías de arte y tiendas de artesanías locales."
    }
]

// Función helper para obtener un sitio por slug
export function getSiteBySlug(slug) {
    return sites.find(site => site.slug === slug)
}

// Función helper para obtener todos los slugs
export function getAllSlugs() {
    return sites.map(site => site.slug)
}

