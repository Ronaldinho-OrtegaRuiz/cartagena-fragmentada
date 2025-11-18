"use client"

/**
 * Layout base para las páginas de sitios turísticos
 * Este componente puede ser extendido con más secciones según se necesite
 */
export default function SiteLayout({ site, children }) {
    if (!site) {
        return null
    }

    return (
        <div className="min-h-screen p-8 sm:p-20" style={{ background: 'linear-gradient(135deg, var(--cartagena-sand) 0%, #E8DCC0 100%)' }}>
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl sm:text-6xl font-title font-bold mb-8 text-center text-title-large" style={{ color: 'var(--cartagena-gold)' }}>
                    {site.name}
                </h1>
                {children}
            </div>
        </div>
    )
}

