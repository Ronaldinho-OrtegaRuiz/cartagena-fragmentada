export default function HeroSection({ textPalette, isInitialAnimationReady }) {
    return (
        <div className="flex flex-col items-center text-center gap-2 mt-5 sm:mt-7 lg:mt-10">
            <h1
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-title font-bold drop-shadow-2xl animate-fade-in-up ${isInitialAnimationReady ? 'animate-enter-active' : ''}`}
                style={{ color: textPalette.primary, transitionDelay: '0.05s' }}
            >
                Historia de Cartagena
            </h1>
            <p
                className={`text-base sm:text-lg md:text-xl font-body drop-shadow-lg animate-fade-in-up-delayed ${isInitialAnimationReady ? 'animate-enter-active' : ''}`}
                style={{ color: textPalette.secondary, transitionDelay: '0.15s' }}
            >
                Un viaje a través de los siglos
            </p>
        </div>
    )
}

