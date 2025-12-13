"use client"

export default function EmptyBeachSection() {
    return (
        <section className="relative min-h-screen overflow-hidden">
            {/* Fondo de playa - mismo que la página principal */}
            <div 
                className="absolute inset-0"
                style={{
                    background: "#80D0D2"
                }}
            >

                {/* Capa de arena horizontal */}
                <div
                    className="absolute inset-0 pointer-events-none z-10"
                    style={{
                        background: "linear-gradient(to right, #F5E6D3 0%, #E8D5B7 20%, #D4C4A8 40%, transparent 100%)"
                    }}
                />
            </div>
        </section>
    )
}

