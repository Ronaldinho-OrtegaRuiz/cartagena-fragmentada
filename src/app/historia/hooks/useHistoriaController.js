"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { useSearchParams } from "next/navigation"
import periodsData from "../data/periods"
import useHistoriaPalettes from "./useHistoriaPalettes"

export default function useHistoriaController() {
    const timelineRef = useRef(null)
    const programmaticScrollRef = useRef(false)
    const scrollResetTimeoutRef = useRef(null)
    const forceTimelineScrollRef = useRef(false)
    const forceTimelineAlignmentRef = useRef(null)
    const contentSwipeRef = useRef(null)
    const [hoveredTimeline, setHoveredTimeline] = useState(null)
    const [activeEventIndex, setActiveEventIndex] = useState(0)
    const [isInitialAnimationReady, setIsInitialAnimationReady] = useState(false)
    const [showSwipeHint, setShowSwipeHint] = useState(false)
    const [showDelayedSwipeHint, setShowDelayedSwipeHint] = useState(false)
    const [isDesktopViewport, setIsDesktopViewport] = useState(false)
    const [hasUsedDesktopNavigation, setHasUsedDesktopNavigation] = useState(false)
    const timelineAnimationSlots = 8
    const searchParams = useSearchParams()

    const periods = useMemo(() => periodsData, [])

    const enhancedEvents = useMemo(() => {
        const flattened = []
        periods.forEach((period, periodIndex) => {
            period.events.forEach((event) => {
                flattened.push({
                    ...event,
                    periodIndex,
                    periodId: period.id,
                    periodTitle: period.title,
                    periodLabel: period.period,
                    colorTheme: period.colorTheme,
                    icon: period.icon
                })
            })
        })

        return flattened.map((event, index) => ({
            ...event,
            globalIndex: index
        }))
    }, [periods])

    const totalEvents = enhancedEvents.length
    const currentEvent = enhancedEvents[activeEventIndex] ?? enhancedEvents[0] ?? null
    const currentPeriod = currentEvent ? periods[currentEvent.periodIndex] : periods[0]

    const {
        currentPalette,
        pageTextureStyle,
        textPalette,
        swipeHintTheme
    } = useHistoriaPalettes(currentPeriod)

    const shouldShowDesktopHint = useMemo(() => {
        return isDesktopViewport && !hasUsedDesktopNavigation
    }, [isDesktopViewport, hasUsedDesktopNavigation])

    const minContentHeight = useMemo(() => {
        if (!enhancedEvents.length) return "18rem"
        const longestDescription = enhancedEvents.reduce((longest, event) => {
            return event.description.length > longest.length ? event.description : longest
        }, enhancedEvents[0].description)
        const estimatedLines = Math.ceil(longestDescription.length / 65)
        const baseHeight = 12
        const textHeight = estimatedLines * 1.75
        const totalHeight = baseHeight + textHeight
        return `${Math.max(18, Math.ceil(totalHeight))}rem`
    }, [enhancedEvents])

    useEffect(() => {
        if (typeof window === "undefined") return

        const detail = {
            header: { ...currentPalette.header },
            timeline: { ...currentPalette.timeline }
        }

        window.__historiaPalette = detail
        window.dispatchEvent(new CustomEvent("historia:palette-change", { detail }))

        return () => {
            if (window.__historiaPalette) {
                delete window.__historiaPalette
            }
        }
    }, [currentPalette])

    useEffect(() => {
        if (typeof window === "undefined") return
        const timer = window.setTimeout(() => setIsInitialAnimationReady(true), 50)
        return () => window.clearTimeout(timer)
    }, [])

    useEffect(() => {
        if (typeof window === "undefined") return
        if (window.innerWidth >= 768) return
        setShowSwipeHint(true)
        const hideTimer = window.setTimeout(() => setShowSwipeHint(false), 4800)
        return () => {
            window.clearTimeout(hideTimer)
        }
    }, [])

    useEffect(() => {
        if (!isInitialAnimationReady) return
        if (showSwipeHint) return
        const timer = window.setTimeout(() => setShowDelayedSwipeHint(true), 400)
        return () => window.clearTimeout(timer)
    }, [isInitialAnimationReady, showSwipeHint])

    useEffect(() => {
        if (typeof window === "undefined") return
        const updateViewport = () => {
            setIsDesktopViewport(window.innerWidth >= 1024)
        }
        updateViewport()
        window.addEventListener("resize", updateViewport)
        return () => window.removeEventListener("resize", updateViewport)
    }, [])

    useEffect(() => {
        if (!totalEvents) return
        if (activeEventIndex >= totalEvents) {
            setActiveEventIndex(0)
        }
    }, [activeEventIndex, totalEvents])

    const handleEventChange = useCallback((globalIndex) => {
        if (globalIndex < 0 || globalIndex >= enhancedEvents.length) return
        setActiveEventIndex(globalIndex)
        setHoveredTimeline(null)
    }, [enhancedEvents.length])

    const scrollToActiveEvent = useCallback(() => {
        requestAnimationFrame(() => {
            const isMobile = typeof window !== "undefined" && window.innerWidth < 768
            const forceScroll = forceTimelineScrollRef.current

            if (!timelineRef.current) return
            const timelineContainer = timelineRef.current
            const eventElements = timelineContainer.querySelectorAll("[data-global-index]")
            const activeElement = Array.from(eventElements).find((el) =>
                parseInt(el.getAttribute("data-global-index") || "", 10) === activeEventIndex
            )

            if (!activeElement) return

            const { scrollLeft, clientWidth } = timelineContainer
            const elementLeft = activeElement.offsetLeft
            const elementWidth = activeElement.offsetWidth
            const elementRight = elementLeft + elementWidth
            const elementCenter = elementLeft + elementWidth / 2
            const padding = 16
            const viewportLeft = scrollLeft
            const viewportRight = scrollLeft + clientWidth
            const maxScroll = timelineContainer.scrollWidth - clientWidth

            const eventWidth = elementWidth
            const gapWidth = 48
            const eventWithGap = eventWidth + gapWidth

            let newScrollLeft = scrollLeft

            if (isMobile) {
                const alignmentPreference = forceTimelineAlignmentRef.current || "start"
                if (alignmentPreference === "center") {
                    newScrollLeft = Math.max(0, Math.min(maxScroll, elementCenter - clientWidth / 2))
                } else {
                    newScrollLeft = Math.max(0, Math.min(maxScroll, elementLeft - padding))
                }

                if (activeEventIndex === 0) {
                    newScrollLeft = 0
                } else if (activeEventIndex === totalEvents - 1) {
                    newScrollLeft = Math.max(0, maxScroll)
                }
            } else {
                const targetVisibleEvents = 5.5
                const isFullyOutsideLeft = elementRight < viewportLeft + padding
                const isFullyOutsideRight = elementLeft > viewportRight - padding

                if (forceScroll && forceTimelineAlignmentRef.current === "center") {
                    newScrollLeft = Math.max(0, Math.min(maxScroll, elementCenter - clientWidth / 2))
                } else if (isFullyOutsideLeft) {
                    newScrollLeft = Math.max(0, elementLeft - padding)
                } else if (isFullyOutsideRight) {
                    const targetCenter = elementCenter - clientWidth / 2
                    newScrollLeft = Math.min(maxScroll, Math.max(0, targetCenter))
                } else {
                    let desiredScroll
                    if (forceTimelineAlignmentRef.current === "center") {
                        desiredScroll = elementCenter - clientWidth / 2
                    } else {
                        const eventsOnLeft = 2.5
                        desiredScroll = elementLeft - eventsOnLeft * eventWithGap - padding
                    }

                    newScrollLeft = Math.max(0, Math.min(maxScroll, desiredScroll))

                    if (activeEventIndex === 0) {
                        newScrollLeft = 0
                    } else if (activeEventIndex === totalEvents - 1) {
                        newScrollLeft = Math.max(0, timelineContainer.scrollWidth - clientWidth)
                    }
                }
            }

            const requiresScroll = Math.abs(newScrollLeft - scrollLeft) > 5
            if (requiresScroll || (forceScroll && forceTimelineAlignmentRef.current === "center")) {
                programmaticScrollRef.current = true
                if (scrollResetTimeoutRef.current) {
                    clearTimeout(scrollResetTimeoutRef.current)
                }

                timelineContainer.scrollTo({
                    left: newScrollLeft,
                    behavior: "smooth"
                })

                scrollResetTimeoutRef.current = window.setTimeout(() => {
                    programmaticScrollRef.current = false
                    scrollResetTimeoutRef.current = null
                }, 300)
                forceTimelineScrollRef.current = false
                forceTimelineAlignmentRef.current = null
            }
        })
    }, [activeEventIndex, totalEvents])

    const attachSwipeGesture = useCallback((element) => {
        if (typeof window === "undefined") return () => {}
        if (!element) return () => {}
        if (window.innerWidth >= 768) return () => {}

        let gestureState = {
            startX: 0,
            startY: 0,
            startTime: 0,
            isSwiping: false
        }

        const handleTouchStart = (event) => {
            if (event.touches.length !== 1) return
            const touch = event.touches[0]
            gestureState = {
                startX: touch.clientX,
                startY: touch.clientY,
                startTime: Date.now(),
                isSwiping: false
            }
        }

        const handleTouchMove = (event) => {
            const touch = event.touches[0]
            const deltaX = touch.clientX - gestureState.startX
            const deltaY = touch.clientY - gestureState.startY

            if (!gestureState.isSwiping) {
                if (Math.abs(deltaX) > 12 && Math.abs(deltaX) > Math.abs(deltaY)) {
                    gestureState.isSwiping = true
                } else {
                    return
                }
            }

            if (gestureState.isSwiping) {
                event.preventDefault()
            }
        }

        const handleTouchEnd = (event) => {
            const touch = event.changedTouches[0]
            const deltaX = touch.clientX - gestureState.startX
            const deltaY = touch.clientY - gestureState.startY
            const absX = Math.abs(deltaX)
            const absY = Math.abs(deltaY)
            const duration = Date.now() - gestureState.startTime

            if (absX > 40 && absX > absY && duration < 600) {
                if (deltaX < 0 && activeEventIndex < totalEvents - 1) {
                    handleEventChange(activeEventIndex + 1)
                    setShowSwipeHint(false)
                    setShowDelayedSwipeHint(false)
                } else if (deltaX > 0 && activeEventIndex > 0) {
                    handleEventChange(activeEventIndex - 1)
                    setShowSwipeHint(false)
                    setShowDelayedSwipeHint(false)
                }
            }

            gestureState = { startX: 0, startY: 0, startTime: 0, isSwiping: false }
        }

        element.addEventListener("touchstart", handleTouchStart, { passive: true })
        element.addEventListener("touchmove", handleTouchMove, { passive: false })
        element.addEventListener("touchend", handleTouchEnd, { passive: true })

        return () => {
            element.removeEventListener("touchstart", handleTouchStart)
            element.removeEventListener("touchmove", handleTouchMove)
            element.removeEventListener("touchend", handleTouchEnd)
        }
    }, [activeEventIndex, totalEvents, handleEventChange])

    useEffect(() => {
        const cleanup = attachSwipeGesture(contentSwipeRef.current)
        return cleanup
    }, [attachSwipeGesture])

    const scrollToPeriod = useCallback((periodId) => {
        const targetEvent = enhancedEvents.find((event) => event.periodId === periodId)
        if (targetEvent) {
            const shouldCenter = (targetEvent.periodIndex ?? 0) > 0
            const isMobile = typeof window !== "undefined" && window.innerWidth < 768
            forceTimelineScrollRef.current = shouldCenter
            if (shouldCenter) {
                forceTimelineAlignmentRef.current = isMobile ? "start" : "center"
            } else {
                forceTimelineAlignmentRef.current = isMobile ? "start" : null
            }
            handleEventChange(targetEvent.globalIndex)
            return true
        }
        return false
    }, [enhancedEvents, handleEventChange])

    useEffect(() => {
        if (activeEventIndex < 0 || activeEventIndex >= totalEvents) return
        scrollToActiveEvent()
    }, [activeEventIndex, totalEvents, scrollToActiveEvent])

    const periodFromQuery = searchParams?.get("period") ?? null

    useEffect(() => {
        if (!periodFromQuery) return
        scrollToPeriod(periodFromQuery)
    }, [periodFromQuery, scrollToPeriod])

    useEffect(() => {
        if (typeof window === "undefined") return
        const storedPeriod = sessionStorage.getItem("historiaPeriod")
        if (storedPeriod) {
            scrollToPeriod(storedPeriod)
            sessionStorage.removeItem("historiaPeriod")
        }
    }, [scrollToPeriod])

    useEffect(() => {
        const handleKeyDown = (event) => {
            const target = event.target
            if (
                target.tagName === "INPUT" ||
                target.tagName === "TEXTAREA" ||
                target.isContentEditable ||
                target.closest('[contenteditable="true"]')
            ) {
                return
            }

            let usedDesktopNav = false

            if (event.key === "ArrowLeft") {
                event.preventDefault()
                if (activeEventIndex > 0) {
                    handleEventChange(activeEventIndex - 1)
                    usedDesktopNav = true
                }
            } else if (event.key === "ArrowRight") {
                event.preventDefault()
                if (activeEventIndex < totalEvents - 1) {
                    handleEventChange(activeEventIndex + 1)
                    usedDesktopNav = true
                }
            }

            if (usedDesktopNav) {
                setHasUsedDesktopNavigation(true)
            }
        }

        document.addEventListener("keydown", handleKeyDown)
        return () => {
            document.removeEventListener("keydown", handleKeyDown)
        }
    }, [activeEventIndex, totalEvents, handleEventChange])

    return {
        timelineRef,
        contentSwipeRef,
        timelineAnimationSlots,
        enhancedEvents,
        activeEventIndex,
        currentEvent,
        currentPeriod,
        totalEvents,
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
    }
}

