// Datos de los sitios turísticos de Cartagena
export const sites = [
    {
        id: 1,
        name: "Castillo San Felipe",
        slug: "castillo-san-felipe",
        description: "La fortaleza más grande construida por los españoles en América. Ofrece vistas espectaculares de la ciudad.",
        image: "https://i.pinimg.com/1200x/cf/39/21/cf3921add9f10b55c802a5f798d8f482.jpg"
    },
    {
        id: 2,
        name: "Plaza de Bolívar",
        slug: "plaza-de-bolivar",
        description: "Corazón del centro histórico, rodeada de edificios coloniales y la estatua del Libertador Simón Bolívar.",
        image: "https://i.pinimg.com/1200x/c6/88/e1/c688e182de595ebd7e2b1c48b6959249.jpg"
    },
    {
        id: 3,
        name: "Torre del Reloj",
        slug: "torre-del-reloj",
        description: "Puerta de entrada principal al centro histórico, símbolo icónico de Cartagena.",
        image: "https://i.pinimg.com/1200x/d7/01/73/d70173048bdf0970c850a04b621f06f5.jpg"
    },
    {
        id: 4,
        name: "Plaza de Santo Domingo",
        slug: "plaza-de-santo-domingo",
        description: "Una de las plazas más animadas, con la famosa escultura \"La Gorda Gertrudis\" de Fernando Botero.",
        image: "https://www.planetstillalive.com/wp-content/uploads/2013/03/Plaza-of-Santo-Domingo-3R-1024x680.jpg"
    },
    {
        id: 5,
        name: "Convento de la Popa",
        slug: "convento-de-la-popa",
        description: "Ubicado en el punto más alto de la ciudad, ofrece vistas panorámicas espectaculares.",
        image: "https://i.pinimg.com/1200x/89/91/6e/89916ec162f75e8947dfd3b3cd15febd.jpg"
    },
    {
        id: 6,
        name: "Las Bóvedas",
        slug: "las-bovedas",
        description: "Antiguas cárceles convertidas en galerías de arte y tiendas de artesanías locales.",
        image: "https://cartagenacolombiarentals.com/wp-content/uploads/2015/10/Las-B%C3%B3vedas-The-Vaults-in-Cartagena.jpg"
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

