"use client"

import { useMemo } from "react"
import { getSiteBySlug } from "../data/sites"

/**
 * Hook para manejar la lógica de cada página de sitio turístico
 * @param {string} slug - El slug del sitio turístico
 */
export default function useSitioController(slug) {
    const site = useMemo(() => {
        return getSiteBySlug(slug)
    }, [slug])

    // TODO: Aquí se puede agregar la lógica de Google API
    // Por ejemplo: const googleData = useGooglePlaces(site?.googlePlaceId)

    return {
        site,
        // googleData, // Para cuando implementemos la API
    }
}

