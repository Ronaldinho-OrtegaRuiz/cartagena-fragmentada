"use client"

import SiteBase from "./SiteBase"

/**
 * Renderiza el contenido específico de cada sitio
 * Por ahora todos los sitios usan la estructura base común
 * En el futuro se puede extender para componentes personalizados
 */
export default function SiteContentRenderer({ site }) {
    if (!site) return null

    // Por ahora todos los sitios usan la estructura base
    // En el futuro se puede agregar lógica para componentes personalizados
    // si (site.customComponent) { ... }
    // si (site.components) { ... }

    return <SiteBase site={site} />
}

