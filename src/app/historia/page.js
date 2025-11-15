"use client"

import { Suspense } from "react"
import HeroSection from "./components/HeroSection"
import PeriodSummary from "./components/PeriodSummary"
import EventDetail from "./components/EventDetail"
import TimelineSection from "./components/TimelineSection"
import useHistoriaController from "./hooks/useHistoriaController"

function HistoriaContent() {
    const {
        timelineRef,
        contentSwipeRef,
        timelineAnimationSlots,
        enhancedEvents,
        activeEventIndex,
        currentEvent,
        currentPeriod,
        hoveredTimeline,
        setHoveredTimeline,
        handleEventChange,
        textPalette,
        pageTextureStyle,
        minContentHeight,
        isInitialAnimationReady,
        showSwipeHint,
        showDelayedSwipeHint,
        swipeHintTheme,
        shouldShowDesktopHint
    } = useHistoriaController()
    return (
        <div
            className="relative flex min-h-screen flex-col overflow-x-hidden z-0 lg:fixed lg:inset-0 lg:h-screen lg:min-h-0"
            style={{
                paddingTop: '64px',
                minHeight: '100vh',
                backgroundColor: currentPeriod.pageBackgroundColor || '#1a1a1a',
                backgroundImage: pageTextureStyle?.backgroundImage,
                backgroundSize: pageTextureStyle?.backgroundSize || '200px 200px',
                backgroundRepeat: 'repeat'
            }}
        >
            {/* Contenido principal */}
            <section className="flex-1 relative lg:overflow-hidden">
                <div className="relative w-full lg:h-full">
            {/* Fondo del período activo */}
            <div className="absolute inset-0 transition-all duration-700" style={{ background: currentPeriod.pageBackgroundColor || '#1f242d' }}>
                <div 
                    className="absolute inset-0 opacity-25 transition-opacity duration-700"
                    style={pageTextureStyle}
                />
            </div>
                    
                    {/* Contenido principal unificado */}
                    <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-5 sm:pt-7 pb-12 sm:pb-16 flex flex-col lg:h-full">
                        <div className="max-w-6xl mx-auto flex w-full flex-col gap-8 lg:h-full lg:overflow-hidden">
                            <HeroSection textPalette={textPalette} isInitialAnimationReady={isInitialAnimationReady} />

                                <div className="flex-1 min-h-0 mt-6 flex flex-col gap-6 overflow-visible sm:mt-8 lg:mt-10 lg:flex-row lg:gap-12 lg:overflow-hidden">
                                <PeriodSummary
                                    currentPeriod={currentPeriod}
                                    textPalette={textPalette}
                                    isInitialAnimationReady={isInitialAnimationReady}
                                />
                                <EventDetail
                                    containerRef={contentSwipeRef}
                                    currentEvent={currentEvent}
                                    currentPeriod={currentPeriod}
                                    textPalette={textPalette}
                                    minContentHeight={minContentHeight}
                                    isInitialAnimationReady={isInitialAnimationReady}
                                    showSwipeHint={showSwipeHint}
                                    showDelayedSwipeHint={showDelayedSwipeHint}
                                    swipeHintTheme={swipeHintTheme}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Elementos decorativos */}
                </div>
            </section>
            <TimelineSection
                timelineRef={timelineRef}
                currentPeriod={currentPeriod}
                timelineAnimationSlots={timelineAnimationSlots}
                isInitialAnimationReady={isInitialAnimationReady}
                enhancedEvents={enhancedEvents}
                activeEventIndex={activeEventIndex}
                hoveredTimeline={hoveredTimeline}
                setHoveredTimeline={setHoveredTimeline}
                handleEventChange={handleEventChange}
                shouldShowDesktopHint={shouldShowDesktopHint}
                swipeHintTheme={swipeHintTheme}
            />
        </div>
    )
}

export default function Historia() {
    return (
        <Suspense fallback={null}>
            <HistoriaContent />
        </Suspense>
    )
}
