export default function CentrosComerciales() {
    return (
        <div className="min-h-screen p-8 sm:p-20" style={{ background: 'linear-gradient(135deg, var(--cartagena-sand) 0%, #E8DCC0 100%)' }}>
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl sm:text-6xl font-title font-bold mb-8 text-center text-title-large" style={{ color: 'var(--cartagena-gold)' }}>
                    Centros Comerciales
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="p-6 rounded-lg card-base card-hover">
                        <h2 className="text-xl font-title font-semibold mb-3 text-primary">
                            Centro Comercial Bocagrande
                        </h2>
                        <p className="font-body text-elegant text-base">
                            El centro comercial más grande de la ciudad, con más de 200 tiendas, 
                            restaurantes, cines y entretenimiento.
                        </p>
                    </div>

                    <div className="p-6 rounded-lg card-base card-hover">
                        <h2 className="text-xl font-title font-semibold mb-3 text-primary">
                            Mall Plaza El Castillo
                        </h2>
                        <p className="font-body text-elegant text-base">
                            Moderno centro comercial con tiendas de marcas internacionales, 
                            food court y zona de entretenimiento familiar.
                        </p>
                    </div>

                    <div className="p-6 rounded-lg card-base card-hover">
                        <h2 className="text-xl font-title font-semibold mb-3 text-primary">
                            Centro Comercial Caribe Plaza
                        </h2>
                        <p className="font-body text-elegant text-base">
                            Ubicado en el sector de Crespo, ofrece una amplia variedad 
                            de tiendas y servicios para toda la familia.
                        </p>
                    </div>

                    <div className="p-6 rounded-lg card-base card-hover">
                        <h2 className="text-xl font-title font-semibold mb-3 text-primary">
                            Centro Comercial La Serrezuela
                        </h2>
                        <p className="font-body text-elegant text-base">
                            Centro comercial con arquitectura colonial, ubicado en el 
                            centro histórico, perfecto para compras y gastronomía.
                        </p>
                    </div>

                    <div className="p-6 rounded-lg card-base card-hover">
                        <h2 className="text-xl font-title font-semibold mb-3 text-primary">
                            Centro Comercial San Diego
                        </h2>
                        <p className="font-body text-elegant text-base">
                            Pequeño pero encantador centro comercial en el barrio San Diego, 
                            con tiendas locales y restaurantes tradicionales.
                        </p>
                    </div>

                    <div className="p-6 rounded-lg card-base card-hover">
                        <h2 className="text-xl font-title font-semibold mb-3 text-primary">
                            Centro Comercial Getsemaní
                        </h2>
                        <p className="font-body text-elegant text-base">
                            Centro comercial en el barrio bohemio de Getsemaní, 
                            con tiendas de artesanías y productos locales únicos.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

