"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function IntroAnimation({ onFinish }) {
    const [show, setShow] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false)
            if (onFinish) onFinish()
        }, 6000) // 6 segundos total
        return () => clearTimeout(timer)
    }, [onFinish])

    if (!show) return null

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white overflow-hidden z-50">
            {/* 1. Pantalla blanca que se encoge formando estrella de 8 puntas */}
            <motion.div
                className="absolute inset-0 bg-white"
                initial={{ scale: 1, opacity: 1 }}
                animate={{ scale: 0, opacity: 1 }}
                transition={{
                    duration: 1.2,
                    ease: [0.25, 0.1, 0.25, 1], // Suave aceleración y desaceleración
                    delay: 0.3
                }}
                style={{
                    clipPath: "polygon(50% 0%, 61% 23%, 82% 6%, 82% 30%, 100% 30%, 85% 45%, 100% 60%, 82% 60%, 82% 82%, 61% 77%, 50% 100%, 39% 77%, 18% 82%, 18% 60%, 0% 60%, 15% 45%, 0% 30%, 18% 30%, 18% 6%, 39% 23%)",
                }}
            />

            {/* 2. Estrella base que queda en el centro */}
            <motion.svg
                width="120"
                height="120"
                viewBox="0 0 100 100"
                className="absolute"
                initial={{ scale: 0, opacity: 0, rotate: -180 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{
                    duration: 1,
                    delay: 1.2,
                    ease: "easeOut",
                    rotate: { duration: 1.2, ease: "easeOut" }
                }}
                style={{
                    filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))"
                }}
            >
                <polygon
                    points="50,0 61,23 82,6 82,30 100,30 85,45 100,60 82,60 82,82 61,77 50,100 39,77 18,82 18,60 0,60 15,45 0,30 18,30 18,6 39,23"
                    fill="white"
                />
            </motion.svg>

            {/* 3. Rectángulo verde que sale desde la estrella */}
            <motion.div
                className="absolute bg-[#008000]"
                initial={{
                    width: 0,
                    height: "25%",
                    top: "50%",
                    left: "50%",
                    x: "-50%",
                    y: "-50%"
                }}
                animate={{
                    width: "80%",
                }}
                transition={{
                    duration: 0.6,
                    delay: 2.0,
                    ease: "easeOut"
                }}
            />

            {/* 4. Rectángulo amarillo que se expande desde el verde */}
            <motion.div
                className="absolute bg-[#FFD700]"
                initial={{
                    width: 0,
                    height: "33%",
                    top: "50%",
                    left: "50%",
                    x: "-50%",
                    y: "-50%"
                }}
                animate={{
                    width: "90%",
                }}
                transition={{
                    duration: 0.6,
                    delay: 2.4,
                    ease: "easeOut"
                }}
            />

            {/* 5. Rectángulo rojo que se expande desde el amarillo */}
            <motion.div
                className="absolute bg-[#FF0000]"
                initial={{
                    width: 0,
                    height: "41%",
                    top: "50%",
                    left: "50%",
                    x: "-50%",
                    y: "-50%"
                }}
                animate={{
                    width: "100%",
                }}
                transition={{
                    duration: 0.6,
                    delay: 2.8,
                    ease: "easeOut"
                }}
            />

            {/* 6. Estrella que se engrandece nuevamente */}
            <motion.svg
                width="120"
                height="120"
                viewBox="0 0 100 100"
                className="absolute"
                initial={{
                    scale: 1,
                    opacity: 1,
                    rotate: 0
                }}
                animate={{
                    scale: 4,
                    opacity: 0.8,
                    rotate: 15
                }}
                transition={{
                    duration: 1.2,
                    delay: 3.4,
                    ease: "easeOut",
                    rotate: { duration: 1.2, ease: "easeInOut" }
                }}
                style={{
                    filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.2))"
                }}
            >
                <polygon
                    points="50,0 61,23 82,6 82,30 100,30 85,45 100,60 82,60 82,82 61,77 50,100 39,77 18,82 18,60 0,60 15,45 0,30 18,30 18,6 39,23"
                    fill="white"
                />
            </motion.svg>

            {/* 7. Texto que aparece */}
            <motion.h1
                initial={{
                    opacity: 0,
                    y: 30,
                    scale: 0.9
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1
                }}
                exit={{
                    opacity: 0,
                    y: -20,
                    transition: { duration: 0.8 }
                }}
                transition={{
                    delay: 4.2,
                    duration: 0.8,
                    ease: "easeOut"
                }}
                className="absolute text-xl sm:text-3xl md:text-4xl font-bold text-white text-center drop-shadow-2xl px-4 z-10"
                style={{
                    textShadow: "0 4px 8px rgba(0,0,0,0.3)"
                }}
            >
                Descubre Cartagena más allá del sol y el mar
            </motion.h1>

            {/* 8. Fade out general de toda la animación */}
            <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                    delay: 5.2,
                    duration: 0.8,
                    ease: "easeInOut"
                }}
                className="absolute inset-0"
            />
        </div>
    )
}