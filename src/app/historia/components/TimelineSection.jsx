import React from "react"

export default function TimelineSection({
    timelineRef,
    currentPeriod,
    timelineAnimationSlots,
    isInitialAnimationReady,
    enhancedEvents,
    activeEventIndex,
    hoveredTimeline,
    setHoveredTimeline,
    handleEventChange,
    shouldShowDesktopHint,
    swipeHintTheme
}) {
    return (
        <section
            className="relative flex-shrink-0 border-t-4 pb-4 transition-colors duration-500"
            style={{
                minHeight: '240px',
                borderTopColor: currentPeriod.timelineFooterBorderColor || '#facc15',
                background: currentPeriod.footerBackground || currentPeriod.timelineCardBg
            }}
        >
            <div className="max-w-6xl mx-auto flex h-full w-full flex-col gap-3 px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
                {shouldShowDesktopHint && (
                    <>
                        <style>{`
                            @keyframes desktopIndicator {
                                0% { letter-spacing: 0.3em; transform: translateY(0); opacity: 0.7; }
                                50% { letter-spacing: 0.45em; transform: translateY(2px); opacity: 1; }
                                100% { letter-spacing: 0.3em; transform: translateY(0); opacity: 0.7; }
                            }
                        `}</style>
                        <div className="hidden lg:flex justify-center">
                            <span
                                className="text-xs sm:text-sm font-semibold uppercase"
                                style={{
                                    color: 'transparent',
                                    backgroundImage: `linear-gradient(120deg, rgba(255,255,255,0.9), ${swipeHintTheme.text}, rgba(255,255,255,0.85))`,
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                    textShadow: '0 8px 20px rgba(0,0,0,0.35)',
                                    animation: 'desktopIndicator 1.6s ease-in-out infinite'
                                }}
                            >
                                ‹ Usa las flechas ›
                            </span>
                        </div>
                    </>
                )}

                <div
                    className="relative mx-auto h-full w-full max-w-5xl rounded-2xl backdrop-blur-sm"
                    style={{
                        background: currentPeriod.timelineCardBg,
                        border: `1px solid ${currentPeriod.timelineCardBorder}`,
                        boxShadow: currentPeriod.timelineCardShadow,
                        minHeight: '180px',
                        maxHeight: '220px'
                    }}
                >
                    <div
                        ref={timelineRef}
                        className="timeline-scroll relative h-full overflow-x-auto overflow-y-hidden pb-1.5 -mb-1.5"
                        style={{
                            scrollBehavior: 'smooth',
                            outline: 'none',
                            WebkitTapHighlightColor: 'transparent',
                            userSelect: 'none'
                        }}
                        role="region"
                        aria-label="Línea de tiempo histórica - Use las flechas izquierda y derecha para navegar"
                        onMouseDown={(e) => {
                            const isClickOnEvent = e.target.closest('[data-global-index]')
                            if (!isClickOnEvent && e.target === e.currentTarget) {
                                e.preventDefault()
                            }
                        }}
                        onTouchStart={(e) => {
                            const isTouchOnEvent = e.target.closest('[data-global-index]')
                            if (!isTouchOnEvent) {
                                e.preventDefault()
                            }
                        }}
                    >
                        <div
                            className="relative h-full flex items-center px-4 sm:px-5 py-2.5"
                            style={{ width: 'max-content', minWidth: '100%' }}
                        >
                            <div
                                className={`timeline-line ${isInitialAnimationReady ? 'timeline-line-animate' : ''} relative z-20 flex items-stretch gap-6 sm:gap-8 md:gap-10 min-w-max before:absolute before:top-1/2 before:left-0 before:right-0 before:h-1 before:-translate-y-1/2 before:rounded-full before:pointer-events-none ${currentPeriod.timelineGradient}`}
                            >
                                {enhancedEvents.map((event, index) => {
                                    const isActive = activeEventIndex === event.globalIndex
                                    const isHovered = hoveredTimeline === event.globalIndex
                                    const titleText = event.title.length > 36 ? `${event.title.substring(0, 36)}…` : event.title

                                    return (
                                        <div
                                            key={event.globalIndex}
                                            data-global-index={event.globalIndex}
                                            className={`timeline-event ${isInitialAnimationReady ? 'timeline-event-visible' : ''} group relative flex-shrink-0 px-2 h-full`}
                                            style={{
                                                width: 'clamp(8rem, calc((100vw - 4rem) / 6), 12rem)',
                                                transitionDelay: `${(index % timelineAnimationSlots) * 0.08}s`
                                            }}
                                            onMouseEnter={() => setHoveredTimeline(event.globalIndex)}
                                            onMouseLeave={() => setHoveredTimeline(null)}
                                            onClick={() => handleEventChange(event.globalIndex)}
                                        >
                                            <div className="grid h-full grid-rows-[54px_54px_54px] items-center justify-items-center gap-y-1.5 px-1 py-2">
                                                <div className="flex w-full flex-col items-center justify-center text-center">
                                                    <span
                                                        className={`text-sm font-ui font-semibold transition-colors duration-300 ${
                                                            isActive
                                                                ? `${currentPeriod.timelineActiveTitleClass} text-sm sm:text-base`
                                                                : isHovered
                                                                    ? currentPeriod.timelineHoverTitleClass
                                                                    : currentPeriod.timelineInactiveTitleClass
                                                        }`}
                                                    >
                                                        {event.year}
                                                    </span>
                                                </div>

                                                <div className="relative flex w-full items-center justify-center">
                                                    <div
                                                        className={`${currentPeriod.timelineDotClass} w-6 h-6 sm:w-7 sm:h-7 rounded-full transition-all duration-300 ${
                                                            isActive ? 'z-30' : 'z-20'
                                                        } ${
                                                            isActive
                                                                ? currentPeriod.timelineDotActiveClass
                                                                : isHovered
                                                                    ? currentPeriod.timelineDotHoverClass
                                                                    : ''
                                                        }`}
                                                    />
                                                </div>

                                                <div className="flex w-full items-center justify-center px-1.5 text-center">
                                                    <span
                                                        className={`text-[11px] sm:text-xs font-ui font-medium leading-tight transition-colors duration-300 ${
                                                            isActive ? currentPeriod.timelineActiveTitleClass : currentPeriod.timelineInactiveTitleClass
                                                        }`}
                                                    >
                                                        {titleText}
                                                    </span>
                                                </div>
                                            </div>

                                            <div
                                                className={`hidden sm:block absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 w-64 lg:w-72 bg-gray-900/95 text-white p-4 rounded-lg shadow-2xl pointer-events-none z-40 transition-all duration-300 ${
                                                    isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                                                }`}
                                            >
                                                <div className="text-xs font-ui font-bold mb-2 text-white">
                                                    {event.title}
                                                </div>
                                                <div className="text-xs font-body text-white/90 leading-relaxed line-clamp-4">
                                                    {event.description}
                                                </div>
                                                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-900/95" />
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

