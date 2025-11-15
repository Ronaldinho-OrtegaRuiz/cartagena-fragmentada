import React from "react"

export default function EventDetail({
    containerRef,
    currentEvent,
    currentPeriod,
    textPalette,
    minContentHeight,
    isInitialAnimationReady,
    showSwipeHint,
    showDelayedSwipeHint,
    swipeHintTheme
}) {
    if (!currentEvent) return null

    return (
        <div className="flex-1 min-h-0 px-1 sm:px-2" ref={containerRef}>
            <div
                className="relative mx-auto flex w-full max-w-5xl flex-col justify-between gap-6 md:flex-row md:items-stretch lg:gap-10 lg:h-full"
                style={{ minHeight: minContentHeight }}
            >
                <div className="flex flex-1 flex-col gap-4">
                    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                        <h3
                            className={`text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] ${currentPeriod.fontClass} font-semibold drop-shadow-[0_12px_30px_rgba(0,0,0,0.35)] animate-fade-in-up ${isInitialAnimationReady ? 'animate-enter-active' : ''}`}
                            style={{ color: textPalette.primary, transitionDelay: '0.1s' }}
                        >
                            {currentEvent.title}
                        </h3>
                        <div className="flex items-center gap-3 mt-0 md:pt-1">
                            <span
                                className={`hidden sm:block h-px bg-white/30 w-12 horizontal-line-animate ${isInitialAnimationReady ? 'horizontal-line-visible' : ''}`}
                                style={{ transitionDelay: '0.16s' }}
                            />
                            <p
                                className={`text-xs sm:text-sm font-ui uppercase tracking-[0.3em] whitespace-nowrap animate-fade-in-up-delayed ${isInitialAnimationReady ? 'animate-enter-active' : ''}`}
                                style={{ color: textPalette.muted, transitionDelay: '0.18s' }}
                            >
                                {currentPeriod.period}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 flex-wrap">
                        <span
                            className={`inline-flex px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-sm sm:text-base font-ui font-semibold tracking-wide ${currentPeriod.yearBadgeClass} animate-fade-in-up-delayed ${isInitialAnimationReady ? 'animate-enter-active' : ''}`}
                            style={{ transitionDelay: '0.22s' }}
                        >
                            {currentEvent.year}
                        </span>
                    </div>
                    <div className="flex-1 overflow-y-auto pr-1">
                        <p
                            className={`text-base sm:text-lg md:text-[1.05rem] font-body leading-relaxed drop-shadow-md animate-fade-in-up-delayed ${isInitialAnimationReady ? 'animate-enter-active' : ''}`}
                            style={{ color: textPalette.secondary, transitionDelay: '0.3s' }}
                        >
                            {currentEvent.description}
                        </p>
                    </div>
                    {(showSwipeHint || showDelayedSwipeHint) && (
                        <div className="mt-3 flex justify-center lg:hidden">
                            <style>{`
                                @keyframes swipeIndicator {
                                    0% { letter-spacing: 0.3em; transform: translateX(0); opacity: 0.65; }
                                    50% { letter-spacing: 0.5em; transform: translateX(6px); opacity: 1; }
                                    100% { letter-spacing: 0.3em; transform: translateX(0); opacity: 0.65; }
                                }
                            `}</style>
                            <span
                                className="text-xs sm:text-sm font-semibold uppercase"
                                style={{
                                    color: 'transparent',
                                    backgroundImage: `linear-gradient(120deg, rgba(255,255,255,0.9), ${swipeHintTheme.text}, rgba(255,255,255,0.85))`,
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                    textShadow: '0 8px 20px rgba(0,0,0,0.35)',
                                    animation: 'swipeIndicator 1.6s ease-in-out infinite'
                                }}
                            >
                                ‹ Desliza ›
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

