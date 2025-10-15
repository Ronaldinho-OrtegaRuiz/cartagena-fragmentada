"use client"

import { useEffect, useRef } from "react"

export default function CartagenaFlagAnimation({ onFinish }) {
    const canvasRef = useRef(null)
    const animationRef = useRef(null)
    
    // Proporción fija 3:2
    const aspectRatio = 3 / 2

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        
        // Detectar si es móvil
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768
        
        // Configurar dimensiones - en móviles usar toda la pantalla, en desktop proporción 3:2
        const width = window.innerWidth
        const height = isMobile ? window.innerHeight : width / aspectRatio
        
        // Configurar canvas para alta resolución y móviles
        const dpr = window.devicePixelRatio || 1
        canvas.width = width * dpr
        canvas.height = height * dpr
        ctx.scale(dpr, dpr)
        canvas.style.width = width + 'px'
        canvas.style.height = height + 'px'
        
        // Optimizaciones para móviles
        ctx.imageSmoothingEnabled = true
        ctx.imageSmoothingQuality = 'high'

        // Colores de la bandera
        const colors = {
            red: '#DC2626',
            yellow: '#FCD34D',
            green: '#059669',
            white: '#FFFFFF'
        }

        // Proporciones de la bandera cuadrilonga
        // Borde rojo externo: 100% del ancho y alto
        const redRect = {
            x: 0,
            y: 0,
            width: width,
            height: height
        }

        // Rectángulo amarillo: 80% del ancho, centrado
        const yellowWidth = width * 0.8
        const yellowHeight = height * 0.8
        const yellowRect = {
            x: (width - yellowWidth) / 2, // Centrado horizontalmente
            y: (height - yellowHeight) / 2, // Centrado verticalmente
            width: yellowWidth,
            height: yellowHeight
        }

        // Rectángulo verde: 60% del ancho, 40% del alto, centrado
        const greenWidth = width * 0.6
        const greenHeight = height * 0.4
        const greenRect = {
            x: (width - greenWidth) / 2, // Centrado horizontalmente
            y: (height - greenHeight) / 2, // Centrado verticalmente
            width: greenWidth,
            height: greenHeight
        }

        // Función para dibujar la estrella exacta del SVG de Cartagena
        function drawCartagenaStar(ctx, centerX, centerY, size) {
            ctx.save()
            ctx.translate(centerX, centerY)
            ctx.scale(size / 100, size / 100) // Escalar basado en el tamaño original del SVG
            
            // Crear la estrella usando la misma geometría del SVG
            ctx.beginPath()
            
            // Dibujar los 8 rayos de la estrella - más gruesos
            const rayLength = 50
            const rayWidth = 15 // Aumentado de 8 a 15 para hacer la estrella más gruesa
            
            for (let i = 0; i < 8; i++) {
                const angle = (i * Math.PI) / 4 // 45 grados entre cada rayo
                
                // Punto exterior del rayo
                const outerX = Math.cos(angle) * rayLength
                const outerY = Math.sin(angle) * rayLength
                
                // Puntos laterales del rayo
                const leftAngle = angle - Math.PI / 8
                const rightAngle = angle + Math.PI / 8
                
                const leftX = Math.cos(leftAngle) * rayWidth
                const leftY = Math.sin(leftAngle) * rayWidth
                const rightX = Math.cos(rightAngle) * rayWidth
                const rightY = Math.sin(rightAngle) * rayWidth
                
                if (i === 0) {
                    ctx.moveTo(leftX, leftY)
                } else {
                    ctx.lineTo(leftX, leftY)
                }
                ctx.lineTo(outerX, outerY)
                ctx.lineTo(rightX, rightY)
            }
            
            ctx.closePath()
            ctx.restore()
        }


        // Funciones de easing para animaciones suaves
        function easeOutCubic(t) {
            return 1 - Math.pow(1 - t, 3)
        }
        
        function easeInOutCubic(t) {
            return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
        }

        // Variables de animación - optimizadas para móviles
        let currentStep = 0
        let progress = 0
        const stepDuration = isMobile ? 800 : 1200 // Más rápido en móviles
        const totalSteps = 4
        const startTime = Date.now()

        function animate() {
            const elapsed = Date.now() - startTime
            const currentStepTime = elapsed % (stepDuration * totalSteps)
            currentStep = Math.floor(currentStepTime / stepDuration)
            progress = (currentStepTime % stepDuration) / stepDuration

            // Limpiar canvas
            ctx.clearRect(0, 0, width, height)

            // Paso 1: Dibujar fondo rojo con fade-in
            if (currentStep >= 0) {
                const redProgress = currentStep === 0 ? easeOutCubic(progress) : 1
                ctx.globalAlpha = redProgress
                ctx.fillStyle = colors.red
                ctx.fillRect(redRect.x, redRect.y, redRect.width, redRect.height)
                ctx.globalAlpha = 1
            }

            // Paso 2: Dibujar campo amarillo con slide-in desde arriba
            if (currentStep >= 1) {
                const yellowProgress = currentStep === 1 ? easeOutCubic(progress) : 1
                const slideOffset = (1 - yellowProgress) * 50 // Desliza desde arriba
                
                ctx.globalAlpha = yellowProgress
                ctx.fillStyle = colors.yellow
                ctx.fillRect(yellowRect.x, yellowRect.y - slideOffset, yellowRect.width, yellowRect.height)
                ctx.globalAlpha = 1
            }

            // Paso 3: Dibujar rectángulo verde con scale-in
            if (currentStep >= 2) {
                const greenProgress = currentStep === 2 ? easeOutCubic(progress) : 1
                const scale = greenProgress
                const scaledWidth = greenRect.width * scale
                const scaledHeight = greenRect.height * scale
                const offsetX = (greenRect.width - scaledWidth) / 2
                const offsetY = (greenRect.height - scaledHeight) / 2
                
                ctx.globalAlpha = greenProgress
                ctx.fillStyle = colors.green
                ctx.fillRect(greenRect.x + offsetX, greenRect.y + offsetY, scaledWidth, scaledHeight)
                ctx.globalAlpha = 1
            }

            // Paso 4: Dibujar estrella blanca con rotación suave
            if (currentStep >= 3) {
                const starProgress = currentStep === 3 ? easeOutCubic(progress) : 1
                const centerX = greenRect.x + greenRect.width / 2
                const centerY = greenRect.y + greenRect.height / 2
                const maxStarSize = greenRect.width * 0.35 // 35% del ancho del rectángulo verde
                const currentStarSize = maxStarSize * starProgress
                
                // Rotación suave de la estrella (360 grados durante la animación)
                const rotationAngle = starProgress * Math.PI * 2 // 360 grados en radianes

                ctx.save()
                ctx.translate(centerX, centerY)
                ctx.rotate(rotationAngle)
                ctx.fillStyle = colors.white
                drawCartagenaStar(ctx, 0, 0, currentStarSize) // Dibujar en el origen después de la transformación
                ctx.fill()
                ctx.restore()
            }

            // Paso 5: Fade out suave de toda la bandera
            if (elapsed >= stepDuration * totalSteps) {
                const fadeStartTime = stepDuration * totalSteps
                const fadeDuration = isMobile ? 1000 : 1500 // Más rápido en móviles
                const fadeProgress = Math.min((elapsed - fadeStartTime) / fadeDuration, 1)
                const opacity = 1 - fadeProgress

                // Aplicar transparencia a todo el canvas
                ctx.globalAlpha = opacity
                
                // Redibujar toda la bandera con transparencia
                ctx.clearRect(0, 0, width, height)
                
                // Redibujar todos los elementos
                ctx.fillStyle = colors.red
                ctx.fillRect(redRect.x, redRect.y, redRect.width, redRect.height)
                
                ctx.fillStyle = colors.yellow
                ctx.fillRect(yellowRect.x, yellowRect.y, yellowRect.width, yellowRect.height)
                
                ctx.fillStyle = colors.green
                ctx.fillRect(greenRect.x, greenRect.y, greenRect.width, greenRect.height)
                
                const centerX = greenRect.x + greenRect.width / 2
                const centerY = greenRect.y + greenRect.height / 2
                const starSize = greenRect.width * 0.35 // 35% del ancho del rectángulo verde
                
                // Rotación continua de la estrella durante el fade
                const totalElapsed = elapsed - fadeStartTime
                const rotationAngle = (totalElapsed / 1000) * Math.PI * 0.5 // Rotación lenta durante el fade
                
                ctx.save()
                ctx.translate(centerX, centerY)
                ctx.rotate(rotationAngle)
                ctx.fillStyle = colors.white
                drawCartagenaStar(ctx, 0, 0, starSize)
                ctx.fill()
                ctx.restore()
                
                ctx.globalAlpha = 1 // Resetear transparencia
                
                // Continuar hasta que termine el fade
                if (fadeProgress < 1) {
                    animationRef.current = requestAnimationFrame(animate)
                } else {
                    // Fade completado
                    if (onFinish) {
                        onFinish()
                    }
                }
            } else {
                // Continuar animación normal
                animationRef.current = requestAnimationFrame(animate)
            }
        }

        // Función para redimensionar canvas - móviles pantalla completa, desktop proporción 3:2
        const handleResize = () => {
            const newIsMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768
            const newWidth = window.innerWidth
            const newHeight = newIsMobile ? window.innerHeight : newWidth / aspectRatio
            canvas.width = newWidth * dpr
            canvas.height = newHeight * dpr
            canvas.style.width = newWidth + 'px'
            canvas.style.height = newHeight + 'px'
            
            // Recalcular dimensiones de los rectángulos
            const newRedRect = {
                x: 0,
                y: 0,
                width: newWidth,
                height: newHeight
            }
            
            const newYellowWidth = newWidth * 0.8
            const newYellowHeight = newHeight * 0.8
            const newYellowRect = {
                x: (newWidth - newYellowWidth) / 2,
                y: (newHeight - newYellowHeight) / 2,
                width: newYellowWidth,
                height: newYellowHeight
            }
            
            const newGreenWidth = newWidth * 0.6
            const newGreenHeight = newHeight * 0.4
            const newGreenRect = {
                x: (newWidth - newGreenWidth) / 2,
                y: (newHeight - newGreenHeight) / 2,
                width: newGreenWidth,
                height: newGreenHeight
            }
            
            // Actualizar las variables globales
            Object.assign(redRect, newRedRect)
            Object.assign(yellowRect, newYellowRect)
            Object.assign(greenRect, newGreenRect)
        }

        // Función para manejar cambio de orientación en móviles
        const handleOrientationChange = () => {
            // Pequeño delay para que el viewport se ajuste
            setTimeout(handleResize, 100)
        }

        // Agregar listeners
        window.addEventListener('resize', handleResize)
        window.addEventListener('orientationchange', handleOrientationChange)

        // Iniciar animación
        animate()

        // Cleanup
        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current)
            }
            window.removeEventListener('resize', handleResize)
            window.removeEventListener('orientationchange', handleOrientationChange)
        }
    }, [onFinish])

    // Detectar si es móvil para el CSS
    const isMobileCSS = typeof window !== 'undefined' && 
        (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768)

    return (
        <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
            <canvas
                ref={canvasRef}
                style={{ 
                    display: 'block',
                    width: '100vw',
                    height: isMobileCSS ? '100vh' : 'auto', // En móviles pantalla completa
                    touchAction: 'none', // Prevenir zoom en móviles
                    userSelect: 'none', // Prevenir selección de texto
                    WebkitUserSelect: 'none',
                    MozUserSelect: 'none',
                    msUserSelect: 'none',
                    maxHeight: '100vh' // Evitar que se salga de la pantalla
                }}
            />
        </div>
    )
}
