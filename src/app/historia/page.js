export default function Historia() {
    return (
        <div className="min-h-screen p-8 sm:p-20" style={{ background: 'linear-gradient(135deg, var(--cartagena-sand) 0%, #E8DCC0 100%)' }}>
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl sm:text-6xl font-title font-bold mb-8 text-center text-title-large" style={{ color: 'var(--cartagena-gold)' }}>
                    Historia de Cartagena
                </h1>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="p-6 rounded-lg card-base card-hover">
                        <h2 className="text-2xl font-title font-semibold mb-4 text-primary">
                            Fundación Colonial
                        </h2>
                        <p className="mb-4 font-body text-elegant text-base">
                            Cartagena de Indias fue fundada el 1 de junio de 1533 por Pedro de Heredia, 
                            convirtiéndose en uno de los puertos más importantes del Imperio Español en América.
                        </p>
                        <p className="font-body text-elegant text-base">
                            La ciudad fue construida como un puerto estratégico para el comercio entre 
                            España y sus colonias americanas.
                        </p>
                    </div>

                    <div className="p-6 rounded-lg card-base card-hover">
                        <h2 className="text-2xl font-title font-semibold mb-4 text-primary">
                            Las Murallas
                        </h2>
                        <p className="mb-4 font-body text-elegant text-base">
                            Las imponentes murallas que rodean el centro histórico fueron construidas 
                            entre 1586 y 1796 para proteger la ciudad de los ataques de piratas y corsarios.
                        </p>
                        <p className="font-body text-elegant text-base">
                            Declaradas Patrimonio de la Humanidad por la UNESCO en 1984.
                        </p>
                    </div>

                    <div className="p-6 rounded-lg card-base card-hover">
                        <h2 className="text-2xl font-title font-semibold mb-4 text-primary">
                            Independencia
                        </h2>
                        <p className="mb-4 font-body text-elegant text-base">
                            Cartagena fue la primera ciudad en declarar su independencia absoluta de España 
                            el 11 de noviembre de 1811, siendo conocida como "La Heroica".
                        </p>
                        <p className="font-body text-elegant text-base">
                            Este acto marcó el inicio del proceso de independencia de Colombia.
                        </p>
                    </div>

                    <div className="p-6 rounded-lg card-base card-hover">
                        <h2 className="text-2xl font-title font-semibold mb-4 text-primary">
                            Patrimonio Cultural
                        </h2>
                        <p className="mb-4 font-body text-elegant text-base">
                            El centro histórico de Cartagena conserva la arquitectura colonial española 
                            con sus coloridas casas, balcones floridos y calles empedradas.
                        </p>
                        <p className="font-body text-elegant text-base">
                            Cada rincón cuenta una historia de más de 500 años.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

