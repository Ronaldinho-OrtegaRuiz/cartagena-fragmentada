"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Home() {
    const router = useRouter()

    useEffect(() => {
        // Redirigir automáticamente a /inicio
        router.push('/inicio')
    }, [router])

    return (
        <div className="min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(135deg, var(--cartagena-sand) 0%, #E8DCC0 100%)' }}>
            <div className="text-center">
                <h1 className="text-2xl font-bold" style={{ color: 'var(--cartagena-gold)' }}>
                    Redirigiendo a Cartagena...
                </h1>
            </div>
        </div>
    )
}
