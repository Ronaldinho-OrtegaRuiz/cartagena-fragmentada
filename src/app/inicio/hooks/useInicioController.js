"use client"

import { useCallback, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"

export default function useInicioController() {
    const router = useRouter()
    const parallaxRefs = useRef([])
    const sectionRefs = useRef([])
    const visibleSectionsRef = useRef(new Set())

    const registerParallaxRef = useCallback((el) => {
        if (el && !parallaxRefs.current.includes(el)) {
            parallaxRefs.current.push(el)
        }
    }, [])

    const registerSectionRef = useCallback((el) => {
        if (el && !sectionRefs.current.includes(el)) {
            sectionRefs.current.push(el)
        }
    }, [])

    const handleNavigate = useCallback((path) => {
        router.push(path)
    }, [router])

    const handleHistoryEpochClick = useCallback((periodId) => {
        if (typeof window !== "undefined") {
            sessionStorage.setItem("historiaPeriod", periodId)
        }
        handleNavigate("/historia")
    }, [handleNavigate])

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.pageYOffset
            const windowHeight = window.innerHeight
            const documentHeight = document.documentElement.scrollHeight

            parallaxRefs.current.forEach((ref, index) => {
                if (ref) {
                    const maxScroll = documentHeight - windowHeight
                    const limitedScroll = Math.min(scrolled, maxScroll)
                    const speed = 0.1 + (index * 0.05)
                    const translateY = limitedScroll * speed
                    const maxTranslate = windowHeight * 0.5
                    const limitedTranslate = Math.min(Math.max(translateY, -maxTranslate), maxTranslate)
                    ref.style.transform = `translateY(${limitedTranslate}px)`
                }
            })

            const newVisibleSections = new Set()

            sectionRefs.current.forEach((section, index) => {
                if (section) {
                    const rect = section.getBoundingClientRect()
                    const isVisible = rect.top < windowHeight * 0.8 && rect.bottom > windowHeight * 0.2

                    if (isVisible) {
                        newVisibleSections.add(index)

                        const animatedElements = section.querySelectorAll(
                            ".animate-slide-in-left, .animate-slide-in-right, .animate-fade-in-up, .animate-fade-in-up-delayed, .animate-scale-in"
                        )
                        const elementsArray = Array.from(animatedElements)
                        const previousScroll = Number(section.dataset.lastScroll || 0)
                        const scrollDirection = scrolled > previousScroll ? "down" : "up"
                        section.dataset.lastScroll = scrolled

                        elementsArray.forEach((element, elementIndex) => {
                            const delay = scrollDirection === "down"
                                ? elementIndex * 200
                                : (elementsArray.length - 1 - elementIndex) * 200

                            setTimeout(() => {
                                if (element.classList.contains("animate-slide-in-left") || element.classList.contains("animate-slide-in-right")) {
                                    element.style.opacity = "1"
                                    element.style.transform = "translateX(0)"
                                } else if (element.classList.contains("animate-scale-in")) {
                                    element.style.opacity = "1"
                                    element.style.transform = "scale(1)"
                                } else {
                                    element.style.opacity = "1"
                                    element.style.transform = "translateY(0)"
                                }
                            }, delay)
                        })
                    } else {
                        const animatedElements = section.querySelectorAll(
                            ".animate-slide-in-left, .animate-slide-in-right, .animate-fade-in-up, .animate-fade-in-up-delayed, .animate-scale-in"
                        )

                        animatedElements.forEach((element) => {
                            if (element.classList.contains("animate-slide-in-left")) {
                                element.style.opacity = "0"
                                element.style.transform = "translateX(-50px)"
                            } else if (element.classList.contains("animate-slide-in-right")) {
                                element.style.opacity = "0"
                                element.style.transform = "translateX(50px)"
                            } else if (element.classList.contains("animate-scale-in")) {
                                element.style.opacity = "0"
                                element.style.transform = "scale(0.8)"
                            } else {
                                element.style.opacity = "0"
                                element.style.transform = "translateY(30px)"
                            }
                        })
                    }
                }
            })

            visibleSectionsRef.current = newVisibleSections
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        handleScroll()
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return {
        registerParallaxRef,
        registerSectionRef,
        handleHistoryEpochClick,
        handleNavigate
    }
}

