export default function SitiosTuristicos() {
    return (
        <div className="min-h-screen p-8 sm:p-20" style={{ background: 'linear-gradient(135deg, var(--cartagena-sand) 0%, #E8DCC0 100%)' }}>
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl sm:text-6xl font-title font-bold mb-8 text-center text-title-large" style={{ color: 'var(--cartagena-gold)' }}>
                    Sitios Turísticos
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="p-6 rounded-lg card-base card-hover">
                        <h2 className="text-xl font-title font-semibold mb-3 text-primary">
                            Castillo San Felipe
                        </h2>
                        <p className="font-body text-elegant text-base">
                            La fortaleza más grande construida por los españoles en América. 
                            Ofrece vistas espectaculares de la ciudad.
                        </p>
                    </div>

                    <div className="p-6 rounded-lg card-base card-hover">
                        <h2 className="text-xl font-title font-semibold mb-3 text-primary">
                            Plaza de Bolívar
                        </h2>
                        <p className="font-body text-elegant text-base">
                            Corazón del centro histórico, rodeada de edificios coloniales 
                            y la estatua del Libertador Simón Bolívar.
                        </p>
                    </div>

                    <div className="p-6 rounded-lg card-base card-hover">
                        <h2 className="text-xl font-title font-semibold mb-3 text-primary">
                            Torre del Reloj
                        </h2>
                        <p className="font-body text-elegant text-base">
                            Puerta de entrada principal al centro histórico, 
                            símbolo icónico de Cartagena.
                        </p>
                    </div>

                    <div className="p-6 rounded-lg card-base card-hover">
                        <h2 className="text-xl font-title font-semibold mb-3 text-primary">
                            Plaza de Santo Domingo
                        </h2>
                        <p className="font-body text-elegant text-base">
                            Una de las plazas más animadas, con la famosa escultura 
                            "La Gorda Gertrudis" de Fernando Botero.
                        </p>
                    </div>

                    <div className="p-6 rounded-lg card-base card-hover">
                        <h2 className="text-xl font-title font-semibold mb-3 text-primary">
                            Convento de la Popa
                        </h2>
                        <p className="font-body text-elegant text-base">
                            Ubicado en el punto más alto de la ciudad, 
                            ofrece vistas panorámicas espectaculares.
                        </p>
                    </div>

                    <div className="p-6 rounded-lg card-base card-hover">
                        <h2 className="text-xl font-title font-semibold mb-3 text-primary">
                            Las Bóvedas
                        </h2>
                        <p className="font-body text-elegant text-base">
                            Antiguas cárceles convertidas en galerías de arte 
                            y tiendas de artesanías locales.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

