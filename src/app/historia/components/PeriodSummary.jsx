export default function PeriodSummary({ currentPeriod, textPalette, isInitialAnimationReady }) {
    return (
        <aside className="flex flex-shrink-0 flex-col gap-3 lg:w-4/12 xl:w-1/3 lg:pl-2">
            <div className="flex flex-col items-start gap-2 text-left">
                <h2
                    className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-title font-semibold drop-shadow-xl animate-fade-in-up ${isInitialAnimationReady ? 'animate-enter-active' : ''}`}
                    style={{ color: textPalette.primary, transitionDelay: '0.1s' }}
                >
                    {currentPeriod.title}
                </h2>
                <p
                    className={`text-sm sm:text-base md:text-lg font-body drop-shadow-lg leading-relaxed animate-fade-in-up-delayed ${isInitialAnimationReady ? 'animate-enter-active' : ''}`}
                    style={{ color: textPalette.secondary, transitionDelay: '0.2s' }}
                >
                    {currentPeriod.subtitle}
                </p>
                <p
                    className={`text-xs sm:text-sm md:text-base font-body drop-shadow-md tracking-wide uppercase animate-fade-in-up-delayed ${isInitialAnimationReady ? 'animate-enter-active' : ''}`}
                    style={{ color: textPalette.muted, letterSpacing: '0.18em', transitionDelay: '0.3s' }}
                >
                    {currentPeriod.period}
                </p>
            </div>
        </aside>
    )
}

