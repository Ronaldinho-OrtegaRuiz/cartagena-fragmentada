"use client"

/**
 * Estructura base común para todas las páginas de sitios turísticos
 * Esta es la plantilla que todos los sitios comparten por defecto
 */
export default function SiteBase({ site }) {
    if (!site) return null

    return (
        <div className="space-y-12">
            {/* Sección Hero / Descripción Principal */}
            <section className="bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-lg">
                <div className="prose prose-lg max-w-none">
                    <p className="text-xl text-gray-800 dark:text-gray-200 leading-relaxed text-center">
                        {site.description}
                    </p>
                </div>
            </section>

            {/* Sección de Información */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                    <h2 className="text-2xl font-title font-semibold mb-4 text-gray-800 dark:text-gray-100">
                        Información General
                    </h2>
                    <div className="space-y-3 text-gray-700 dark:text-gray-300">
                        <div>
                            <span className="font-semibold">Ubicación:</span>
                            <span className="ml-2">Cartagena de Indias</span>
                        </div>
                        <div>
                            <span className="font-semibold">Tipo:</span>
                            <span className="ml-2">Sitio Turístico</span>
                        </div>
                        {/* Aquí se pueden agregar más campos cuando tengamos más datos */}
                    </div>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                    <h2 className="text-2xl font-title font-semibold mb-4 text-gray-800 dark:text-gray-100">
                        Características
                    </h2>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Patrimonio histórico</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Accesible al público</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Ubicación céntrica</span>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Sección de Galería (Placeholder) */}
            <section className="bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-lg">
                <h2 className="text-2xl font-title font-semibold mb-6 text-gray-800 dark:text-gray-100">
                    Galería
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500 dark:text-gray-400">Imagen 1</span>
                    </div>
                    <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500 dark:text-gray-400">Imagen 2</span>
                    </div>
                    <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500 dark:text-gray-400">Imagen 3</span>
                    </div>
                </div>
            </section>

            {/* Sección de Mapa (Placeholder) */}
            <section className="bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-lg">
                <h2 className="text-2xl font-title font-semibold mb-6 text-gray-800 dark:text-gray-100">
                    Ubicación
                </h2>
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500 dark:text-gray-400">Mapa (Google Maps se integrará aquí)</span>
                </div>
            </section>
        </div>
    )
}

