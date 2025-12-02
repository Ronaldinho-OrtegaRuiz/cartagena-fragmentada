"use client"

import { useState, useCallback, useMemo } from "react"
import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api"
import { useGoogleMaps } from "../hooks/useGoogleMaps"

// Estilos del mapa en modo oscuro
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

const containerStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "12px"
}

export default function SiteMapIndividual({ site }) {
    const [isDarkMode, setIsDarkMode] = useState(true)
    const [showInfo, setShowInfo] = useState(false)
    const { isLoaded, loadError, hasApiKey } = useGoogleMaps()
    const hasCoordinates = site?.coordinates && site.coordinates.lat && site.coordinates.lng

    const mapOptions = useMemo(() => {
        if (!hasCoordinates) {
            return {
                center: { lat: 10.4236, lng: -75.5361 },
                zoom: 13
            }
        }

        return {
            center: site.coordinates,
            zoom: 15
        }
    }, [site, hasCoordinates])

    const onLoad = useCallback((map) => {
        if (hasCoordinates && window.google && window.google.maps) {
            setTimeout(() => {
                map.setZoom(16)
            }, 100)
        }
    }, [hasCoordinates])

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode)
    }

    const mapStyles = isDarkMode ? darkMapStyles : []

    if (!hasApiKey) {
        return (
            <div className="w-full h-full rounded-2xl border border-white/25 bg-white/5 flex items-center justify-center">
                <div className="text-center p-6">
                    <p className="text-white/70 text-sm mb-2">⚠️ API Key requerida</p>
                    <p className="text-white/50 text-xs">
                        Configura NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
                    </p>
                </div>
            </div>
        )
    }

    if (loadError) {
        return (
            <div className="w-full h-full rounded-2xl border border-red-500/50 bg-red-900/20 flex items-center justify-center">
                <div className="text-center p-6">
                    <p className="text-red-400 text-sm">❌ Error al cargar el mapa</p>
                </div>
            </div>
        )
    }

    if (!isLoaded) {
        return (
            <div className="w-full h-full rounded-2xl border border-white/25 bg-white/5 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white/50 mx-auto mb-2"></div>
                    <p className="text-white/50 text-xs">Cargando...</p>
                </div>
            </div>
        )
    }

    if (!hasCoordinates) {
        return (
            <div className="w-full h-full rounded-2xl border border-white/25 bg-white/5 flex items-center justify-center">
                <div className="text-center p-6">
                    <p className="text-white/70 text-sm mb-2">📍 Ubicación no disponible</p>
                    <p className="text-white/50 text-xs">
                        {site?.location || "Coordenadas no configuradas"}
                    </p>
                </div>
            </div>
        )
    }

    return (
        <div className="relative w-full h-full">
            <button
                onClick={toggleDarkMode}
                className="absolute top-3 right-3 z-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 text-gray-800 dark:text-white px-3 py-1.5 rounded-lg shadow-lg transition-all duration-200 flex items-center gap-2 text-sm font-medium"
                aria-label={isDarkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            >
                {isDarkMode ? (
                    <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        <span className="hidden sm:inline">Claro</span>
                    </>
                ) : (
                    <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                        <span className="hidden sm:inline">Oscuro</span>
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
                    disableDefaultUI: true,
                    draggable: false,
                    scrollwheel: false,
                    disableDoubleClickZoom: true,
                    gestureHandling: "none",
                    zoomControl: false,
                    streetViewControl: false,
                    mapTypeControl: false,
                    fullscreenControl: false,
                }}
            >
                <Marker
                    position={site.coordinates}
                    onClick={() => setShowInfo(true)}
                    title={site.name}
                />

                {showInfo && (
                    <InfoWindow
                        position={site.coordinates}
                        onCloseClick={() => setShowInfo(false)}
                    >
                        <div className="p-2">
                            <h3 className="font-bold text-lg mb-1 text-gray-800">
                                {site.name}
                            </h3>
                            <p className="text-sm text-gray-600 mb-2">
                                {site.subtitle || site.description}
                            </p>
                            <p className="text-xs text-gray-500 mb-2">
                                {site.location}
                            </p>
                            <a
                                href={site.googleMapsUrl}
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

