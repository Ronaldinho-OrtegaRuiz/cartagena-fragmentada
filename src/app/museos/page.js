export default function Museos() {
    return (
        <div className="min-h-screen p-8 sm:p-20" style={{ background: 'linear-gradient(135deg, var(--cartagena-sand) 0%, #E8DCC0 100%)' }}>
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl sm:text-6xl font-title font-bold mb-8 text-center text-title-large" style={{ color: 'var(--cartagena-gold)' }}>
                    Museos de Cartagena
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="p-6 rounded-lg card-base card-hover">
                        <h2 className="text-xl font-title font-semibold mb-3 text-primary">
                            Museo del Oro Zenú
                        </h2>
                        <p className="font-body text-elegant text-base">
                            Exhibe una impresionante colección de orfebrería precolombina 
                            de la cultura Zenú y otras culturas indígenas.
                        </p>
                    </div>

                    <div className="p-6 rounded-lg card-base card-hover">
                        <h2 className="text-xl font-title font-semibold mb-3 text-primary">
                            Museo Histórico de Cartagena
                        </h2>
                        <p className="font-body text-elegant text-base">
                            Ubicado en el Palacio de la Inquisición, cuenta la historia 
                            de la ciudad desde su fundación hasta la independencia.
                        </p>
                    </div>

                    <div className="p-6 rounded-lg card-base card-hover">
                        <h2 className="text-xl font-title font-semibold mb-3 text-primary">
                            Museo Naval del Caribe
                        </h2>
                        <p className="font-body text-elegant text-base">
                            Dedicado a la historia naval de Cartagena y el Caribe, 
                            con maquetas de barcos y artefactos históricos.
                        </p>
                    </div>

                    <div className="p-6 rounded-lg card-base card-hover">
                        <h2 className="text-xl font-title font-semibold mb-3 text-primary">
                            Museo de Arte Moderno
                        </h2>
                        <p className="font-body text-elegant text-base">
                            Presenta exposiciones de arte contemporáneo colombiano 
                            e internacional en un hermoso edificio colonial.
                        </p>
                    </div>

                    <div className="p-6 rounded-lg card-base card-hover">
                        <h2 className="text-xl font-title font-semibold mb-3 text-primary">
                            Casa Museo Rafael Núñez
                        </h2>
                        <p className="font-body text-elegant text-base">
                            Casa donde vivió el expresidente Rafael Núñez, 
                            autor de la letra del himno nacional de Colombia.
                        </p>
                    </div>

                    <div className="p-6 rounded-lg card-base card-hover">
                        <h2 className="text-xl font-title font-semibold mb-3 text-primary">
                            Museo de las Fortificaciones
                        </h2>
                        <p className="font-body text-elegant text-base">
                            Ubicado en las Bóvedas, explica la historia y construcción 
                            del sistema defensivo de la ciudad.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

