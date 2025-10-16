export default function Playas() {
    return (
        <div className="min-h-screen p-8 sm:p-20" style={{ background: 'linear-gradient(135deg, var(--cartagena-sand) 0%, #E8DCC0 100%)' }}>
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl sm:text-6xl font-title font-bold mb-8 text-center text-title-large" style={{ color: 'var(--cartagena-gold)' }}>
                    Playas de Cartagena
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="p-6 rounded-lg card-base card-hover">
                        <h2 className="text-xl font-title font-semibold mb-3 text-primary">
                            Playa de Bocagrande
                        </h2>
                        <p className="font-body text-elegant text-base">
                            La playa más popular de la ciudad, con hoteles de lujo, 
                            restaurantes y una vibrante vida nocturna.
                        </p>
                    </div>

                    <div className="p-6 rounded-lg card-base card-hover">
                        <h2 className="text-xl font-title font-semibold mb-3 text-primary">
                            Playa de Castillogrande
                        </h2>
                        <p className="font-body text-elegant text-base">
                            Playa más tranquila y familiar, ideal para relajarse 
                            y disfrutar del mar Caribe.
                        </p>
                    </div>

                    <div className="p-6 rounded-lg card-base card-hover">
                        <h2 className="text-xl font-title font-semibold mb-3 text-primary">
                            Islas del Rosario
                        </h2>
                        <p className="font-body text-elegant text-base">
                            Archipiélago de 27 islas con aguas cristalinas, 
                            perfectas para buceo y snorkel.
                        </p>
                    </div>

                    <div className="p-6 rounded-lg card-base card-hover">
                        <h2 className="text-xl font-title font-semibold mb-3 text-primary">
                            Playa Blanca
                        </h2>
                        <p className="font-body text-elegant text-base">
                            Arena blanca y aguas turquesas en la isla de Barú, 
                            considerada una de las mejores playas de Colombia.
                        </p>
                    </div>

                    <div className="p-6 rounded-lg card-base card-hover">
                        <h2 className="text-xl font-title font-semibold mb-3 text-primary">
                            Playa de Manzanillo
                        </h2>
                        <p className="font-body text-elegant text-base">
                            Playa virgen y tranquila, ideal para quienes buscan 
                            paz y contacto con la naturaleza.
                        </p>
                    </div>

                    <div className="p-6 rounded-lg card-base card-hover">
                        <h2 className="text-xl font-title font-semibold mb-3 text-primary">
                            Cholón
                        </h2>
                        <p className="font-body text-elegant text-base">
                            Isla privada conocida por sus fiestas en el mar, 
                            con música, baile y ambiente festivo.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

