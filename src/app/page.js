"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Home() {
    const router = useRouter()

    useEffect(() => {
        // Redirigir inmediatamente sin mostrar contenido
        router.replace('/inicio')
    }, [router])

    // No mostrar nada mientras redirige
    return null
}
