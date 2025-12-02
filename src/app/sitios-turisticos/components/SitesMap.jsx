"use client"

import { useState, useCallback, useMemo } from "react"
import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api"
import { useGoogleMaps } from "../hooks/useGoogleMaps"
import { sites } from "../data/sites"

const darkMapStyles = [
    { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
    {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }]
    },
    {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }]
    },
    {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#263c3f" }]
    },
    {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#6b9a76" }]
    },
    {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#38414e" }]
    },
    {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#212a37" }]
    },
    {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9ca5b3" }]
    },
    {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#746855" }]
    },
    {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#1f2835" }]
    },
    {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{ color: "#f3d19c" }]
    },
    {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{ color: "#2f3948" }]
    },
    {
        featureType: "transit.station",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }]
    },
    {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#17263c" }]
    },
    {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#515c6d" }]
    },
    {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#17263c" }]
    }
]

const lightMapStyles = []

const containerStyle = {
    width: "100%",
    height: "600px",
    borderRadius: "12px",
    overflow: "hidden"
}

const defaultCenter = {
    lat: 10.4236,
    lng: -75.5361
}

export default function SitesMap() {
    const [isDarkMode, setIsDarkMode] = useState(true)
    const [selectedSite, setSelectedSite] = useState(null)
    const { isLoaded, loadError, hasApiKey } = useGoogleMaps()

    const sitesWithCoordinates = useMemo(() => {
        return sites.filter(site => site.coordinates)
    }, [])

    const mapOptions = useMemo(() => {
        if (sitesWithCoordinates.length === 0) {
            return {
                center: defaultCenter,
                zoom: 13
            }
        }

        const lats = sitesWithCoordinates.map(site => site.coordinates.lat)
        const lngs = sitesWithCoordinates.map(site => site.coordinates.lng)
        
        const minLat = Math.min(...lats)
        const maxLat = Math.max(...lats)
        const minLng = Math.min(...lngs)
        const maxLng = Math.max(...lngs)

        const center = {
            lat: (minLat + maxLat) / 2,
            lng: (minLng + maxLng) / 2
        }

        return {
            center,
            zoom: 13
        }
    }, [sitesWithCoordinates])

    const onLoad = useCallback((map) => {
        if (sitesWithCoordinates.length > 0 && window.google && window.google.maps) {
            const bounds = new window.google.maps.LatLngBounds()
            sitesWithCoordinates.forEach(site => {
                bounds.extend(site.coordinates)
            })
            map.fitBounds(bounds)
        }
    }, [sitesWithCoordinates])

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode)
    }

    const mapStyles = isDarkMode ? darkMapStyles : lightMapStyles

    if (!hasApiKey) {
        return (
            <div className="w-full h-[600px] rounded-lg bg-gray-800/90 flex items-center justify-center border-2 border-yellow-500/50 backdrop-blur-sm">
                <div className="text-center p-6 max-w-md">
                    <div className="mb-4">
                        <svg className="w-16 h-16 mx-auto text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    <p className="text-white text-xl font-bold mb-3">API Key de Google Maps requerida</p>
                    <div className="text-gray-300 text-sm space-y-2 mb-4 text-left bg-gray-900/50 p-4 rounded-lg">
                        <p className="font-semibold mb-2">Pasos para configurar:</p>
                        <ol className="list-decimal list-inside space-y-1 ml-2 text-left">
                            <li>Crea o edita el archivo <code className="bg-gray-800 px-1 rounded">.env</code> en la raíz del proyecto</li>
                            <li>Agrega exactamente: <code className="bg-gray-800 px-1 rounded text-yellow-300">NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=tu_api_key</code></li>
                            <li className="text-red-300 font-semibold">⚠️ IMPORTANTE: Reinicia el servidor completamente (Ctrl+C y luego npm run dev)</li>
                            <li>Habilita <strong>Maps JavaScript API</strong> en Google Cloud Console</li>
                        </ol>
                    </div>
                    <a 
                        href="https://console.cloud.google.com/google/maps-apis" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block text-blue-400 hover:text-blue-300 text-sm underline"
                    >
                        Ir a Google Cloud Console →
                    </a>
                </div>
            </div>
        )
    }

    if (loadError) {
        return (
            <div className="w-full h-[600px] rounded-lg bg-red-900/20 flex items-center justify-center border-2 border-red-500/50 backdrop-blur-sm">
                <div className="text-center p-6 max-w-md">
                    <div className="mb-4">
                        <svg className="w-16 h-16 mx-auto text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <p className="text-red-400 text-xl font-bold mb-3">Error al cargar Google Maps</p>
                    <p className="text-gray-300 text-sm mb-4">
                        {loadError.message || "Verifica tu API key y que la API esté habilitada"}
                    </p>
                    <div className="text-gray-400 text-xs space-y-1">
                        <p>• Verifica que la API key sea correcta</p>
                        <p>• Asegúrate de que <strong>Maps JavaScript API</strong> esté habilitada</p>
                        <p>• Revisa las restricciones de la API key en Google Cloud Console</p>
                    </div>
                </div>
            </div>
        )
    }

    if (!isLoaded) {
        return (
            <div className="w-full h-[600px] rounded-lg bg-gray-800 flex items-center justify-center border-2 border-blue-500/50">
                <div className="text-center p-6">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                    <p className="text-white text-sm mb-2">Cargando mapa...</p>
                    <p className="text-gray-400 text-xs">Esto puede tardar unos segundos</p>
                </div>
            </div>
        )
    }

    return (
        <div className="relative w-full">
            <button
                onClick={toggleDarkMode}
                className="absolute top-4 right-4 z-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 text-gray-800 dark:text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-200 flex items-center gap-2 font-medium"
                aria-label={isDarkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            >
                {isDarkMode ? (
                    <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        <span>Modo Claro</span>
                    </>
                ) : (
                    <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                        <span>Modo Oscuro</span>
                    </>
                )}
            </button>

            <GoogleMap
                mapContainerStyle={containerStyle}
                center={mapOptions.center}
                zoom={mapOptions.zoom}
                onLoad={onLoad}
                options={{
                    styles: mapStyles,
                    disableDefaultUI: false,
                    zoomControl: true,
                    streetViewControl: false,
                    mapTypeControl: false,
                    fullscreenControl: true,
                }}
            >
                {sitesWithCoordinates.map((site) => (
                    <Marker
                        key={site.id}
                        position={site.coordinates}
                        onClick={() => setSelectedSite(site)}
                        title={site.name}
                    />
                ))}

                {selectedSite && (
                    <InfoWindow
                        position={selectedSite.coordinates}
                        onCloseClick={() => setSelectedSite(null)}
                    >
                        <div className="p-2">
                            <h3 className="font-bold text-lg mb-1 text-gray-800">
                                {selectedSite.name}
                            </h3>
                            <p className="text-sm text-gray-600 mb-2">
                                {selectedSite.subtitle || selectedSite.description}
                            </p>
                            <p className="text-xs text-gray-500 mb-2">
                                {selectedSite.location}
                            </p>
                            <a
                                href={selectedSite.googleMapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                            >
                                Ver en Google Maps →
                            </a>
                        </div>
                    </InfoWindow>
                )}
            </GoogleMap>
        </div>
    )
}

