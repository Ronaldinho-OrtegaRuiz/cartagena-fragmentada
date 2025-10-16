import { ANIMATION_DELAYS, ANIMATION_DURATION, SPRING_CONFIG } from './constants'

// Variantes de animación para el contenedor
export const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: ANIMATION_DELAYS.STAGGER_CHILDREN,
            delayChildren: ANIMATION_DELAYS.DELAY_CHILDREN
        }
    }
}

// Variantes de animación para cada card
export const cardVariants = {
    hidden: { 
        opacity: 0, 
        y: 30,
        scale: 0.9
    },
    visible: { 
        opacity: 1, 
        y: 0,
        scale: 1,
        transition: {
            duration: ANIMATION_DURATION.CARD_ENTRANCE,
            ease: "easeOut",
            type: "spring",
            stiffness: SPRING_CONFIG.stiffness,
            damping: SPRING_CONFIG.damping
        }
    }
}

// Variantes de animación para elementos de página
export const pageVariants = {
    hidden: { 
        opacity: 0, 
        x: -100 
    },
    visible: { 
        opacity: 1, 
        x: 0,
        transition: {
            duration: ANIMATION_DURATION.TRANSITION,
            ease: "easeOut"
        }
    },
    exit: { 
        opacity: 0, 
        x: 100,
        transition: {
            duration: ANIMATION_DURATION.TRANSITION,
            ease: "easeIn"
        }
    }
}
