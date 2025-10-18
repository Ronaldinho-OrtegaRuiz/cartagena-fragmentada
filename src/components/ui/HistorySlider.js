"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

const historyImages = [
    {
        id: 1,
        src: "https://biblioteca.utb.edu.co/Fototecaweb/12-30-003.jpg",
        alt: "Castillo de San Felipe de Barajas - Cartagena de Indias",
        title: "Castillo de San Felipe de Barajas",
        description: "Emblemático paisaje con el Castillo, la colina de La Popa al fondo y el puente Heredia en primer plano",
        year: "1970",
        author: "Baladi, Aida Teresa",
        details: "Fortificaciones militares que protegieron la ciudad colonial"
    },
    {
        id: 2,
        src: "https://biblioteca.utb.edu.co/Fototecaweb/19-02-073.jpg",
        alt: "Vista aérea del Muelle de los Pegasos - Cartagena de Indias",
        title: "Muelle de los Pegasos",
        description: "Vista aérea de la bahía de las Ánimas con barquetonas de vela y el mercado de Getsemaní",
        year: "1928",
        author: "SCADTA",
        details: "Panorámica histórica del puerto y la vida comercial de la época"
    },
    {
        id: 3,
        src: "https://biblioteca.utb.edu.co/Fototecaweb/19-99-003.jpg",
        alt: "Panorámica vista desde la Popa - Cartagena de Indias",
        title: "Vista desde La Popa",
        description: "Panorámica desde la colina de La Popa mostrando la Laguna de San Lázaro y el camino abajo",
        year: "1920",
        author: "Trucco, Juan",
        details: "Vista histórica del paisaje urbano y natural de Cartagena"
    }
]

export default function HistorySlider() {
    const [currentImage, setCurrentImage] = useState(0)
    const [isHovered, setIsHovered] = useState(false)
    const [isTransitioning, setIsTransitioning] = useState(false)
    const router = useRouter()

    useEffect(() => {
        if (!isHovered) {
            const interval = setInterval(() => {
                setIsTransitioning(true)
                setTimeout(() => {
                    setCurrentImage((prev) => (prev + 1) % historyImages.length)
                    setIsTransitioning(false)
                }, 500) // Duración de la transición
            }, 5000) // Cambia cada 5 segundos para dar más tiempo

            return () => clearInterval(interval)
        }
    }, [isHovered])

    const handleImageClick = () => {
        router.push('/historia')
    }

    const goToSlide = (index) => {
        if (index !== currentImage) {
            setIsTransitioning(true)
            setTimeout(() => {
                setCurrentImage(index)
                setIsTransitioning(false)
            }, 500)
        }
    }

    const goToPrevious = () => {
        setIsTransitioning(true)
        setTimeout(() => {
            setCurrentImage((prev) => prev === 0 ? historyImages.length - 1 : prev - 1)
            setIsTransitioning(false)
        }, 500)
    }

    const goToNext = () => {
        setIsTransitioning(true)
        setTimeout(() => {
            setCurrentImage((prev) => (prev + 1) % historyImages.length)
            setIsTransitioning(false)
        }, 500)
    }

    return (
        <div className="relative w-full h-full animate-fade-in-up">
            {/* Contenedor principal del slider */}
            <div 
                className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden cursor-pointer group animate-scale-in"
                style={{ animationDelay: '0.3s' }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={handleImageClick}
            >
                {/* Imagen actual */}
                <div className="relative w-full h-full">
                    <img
                        src={historyImages[currentImage].src}
                        alt={historyImages[currentImage].alt}
                        className={`w-full h-full object-cover transition-all duration-1000 ease-in-out transform group-hover:scale-105 ${
                            isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                        }`}
                    />
                    
                    {/* Overlay con gradiente */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    
                    {/* Información de la imagen */}
                    <div className={`absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 ${
                        isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                    }`}>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-ui font-bold">
                                {historyImages[currentImage].year}
                            </span>
                            <span className="text-yellow-300 text-sm font-ui">
                                {historyImages[currentImage].author}
                            </span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-title font-bold mb-2">
                            {historyImages[currentImage].title}
                        </h3>
                        <p className="text-sm md:text-base font-body opacity-90 mb-2">
                            {historyImages[currentImage].description}
                        </p>
                        <p className="text-xs md:text-sm font-ui opacity-75 italic">
                            {historyImages[currentImage].details}
                        </p>
                    </div>

                    {/* Indicador de click */}
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                    </div>
                </div>


                {/* Flechas de navegación */}
                <button
                    onClick={(e) => {
                        e.stopPropagation()
                        goToPrevious()
                    }}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30 disabled:opacity-50"
                    disabled={isTransitioning}
                >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button
                    onClick={(e) => {
                        e.stopPropagation()
                        goToNext()
                    }}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30 disabled:opacity-50"
                    disabled={isTransitioning}
                >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Texto de instrucción */}
            <p className="text-center text-white/80 text-sm mt-4 font-ui animate-fade-in-up-delayed">
                Haz clic en las imágenes para conocer más sobre la historia
            </p>
            
            {/* Indicador de progreso temporal */}
            <div className="flex justify-center mt-3 space-x-2">
                {historyImages.map((_, index) => (
                    <div
                        key={index}
                        className={`h-1 w-8 rounded-full transition-all duration-500 ${
                            index === currentImage 
                                ? 'bg-yellow-400' 
                                : index < currentImage 
                                    ? 'bg-yellow-400/50' 
                                    : 'bg-white/20'
                        }`}
                    />
                ))}
            </div>
        </div>
    )
}
