export default function LugaresPocoConocidos() {
    return (
        <div className="min-h-screen p-8 sm:p-20" style={{ background: 'linear-gradient(135deg, var(--cartagena-sand) 0%, #E8DCC0 100%)' }}>
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl sm:text-6xl font-title font-bold mb-8 text-center text-title-large" style={{ color: 'var(--cartagena-gold)' }}>
                    Lugares Poco Conocidos
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="p-6 rounded-lg card-base card-hover">
                        <h2 className="text-xl font-title font-semibold mb-3 text-primary">
                            Barrio Getsemaní
                        </h2>
                        <p className="font-body text-elegant text-base">
                            Barrio bohemio y artístico fuera del centro histórico, 
                            con murales coloridos y ambiente local auténtico.
                        </p>
                    </div>

                    <div className="p-6 rounded-lg card-base card-hover">
                        <h2 className="text-xl font-title font-semibold mb-3 text-primary">
                            Mercado de Bazurto
                        </h2>
                        <p className="font-body text-elegant text-base">
                            Mercado local más grande de la ciudad, donde puedes experimentar 
                            la vida cotidiana de los cartageneros.
                        </p>
                    </div>

                    <div className="p-6 rounded-lg card-base card-hover">
                        <h2 className="text-xl font-title font-semibold mb-3 text-primary">
                            Volcán del Totumo
                        </h2>
                        <p className="font-body text-elegant text-base">
                            Pequeño volcán de lodo a 50 km de Cartagena, 
                            donde puedes flotar en sus aguas terapéuticas.
                        </p>
                    </div>

                    <div className="p-6 rounded-lg card-base card-hover">
                        <h2 className="text-xl font-title font-semibold mb-3 text-primary">
                            Ciénaga de la Virgen
                        </h2>
                        <p className="font-body text-elegant text-base">
                            Ecosistema de manglares donde puedes hacer avistamiento 
                            de aves y paseos en canoa por los canales naturales.
                        </p>
                    </div>

                    <div className="p-6 rounded-lg card-base card-hover">
                        <h2 className="text-xl font-title font-semibold mb-3 text-primary">
                            Pueblo de Palenque
                        </h2>
                        <p className="font-body text-elegant text-base">
                            Primer pueblo libre de América, fundado por esclavos fugitivos. 
                            Patrimonio de la Humanidad por su cultura afrocolombiana.
                        </p>
                    </div>

                    <div className="p-6 rounded-lg card-base card-hover">
                        <h2 className="text-xl font-title font-semibold mb-3 text-primary">
                            Playa de Punta Arena
                        </h2>
                        <p className="font-body text-elegant text-base">
                            Playa secreta en la isla de Tierra Bomba, 
                            perfecta para quienes buscan tranquilidad y naturaleza.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

