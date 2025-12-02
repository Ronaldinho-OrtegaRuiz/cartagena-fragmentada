"use client"

import { useJsApiLoader } from "@react-google-maps/api"

const libraries = ['places']
const LOADER_ID = 'google-maps-loader'

export function useGoogleMaps() {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""

    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: apiKey && apiKey.trim() !== "" ? apiKey : "",
        libraries: libraries,
        id: LOADER_ID
    })

    return {
        isLoaded,
        loadError,
        apiKey,
        hasApiKey: apiKey && apiKey.trim() !== ""
    }
}

export { libraries }

