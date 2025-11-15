"use client"

import HistorySlider from "@/components/ui/HistorySlider"
import { historyEpochs } from "../data/historyEpochs"

export default function HistorySection({ section, registerSectionRef, handleHistoryEpochClick, handleNavigate }) {
    return (
        <section
            ref={registerSectionRef}
            id={`section-${section.id}`}
            className="relative min-h-screen bg-gradient-to-br from-amber-800 via-orange-700 to-red-800"
        >
            <div
                className="absolute inset-0 opacity-25"
                style={{
                    backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="stone" width="100" height="100" patternUnits="userSpaceOnUse"><rect x="2" y="3" width="28" height="22" fill="none" stroke="white" stroke-width="0.8" opacity="0.4"/><path d="M8 12 L22 12 M15 6 L15 18" stroke="white" stroke-width="0.4" opacity="0.3"/><rect x="32" y="5" width="32" height="25" fill="none" stroke="white" stroke-width="0.8" opacity="0.4"/><path d="M40 15 L55 15 M47 8 L47 22" stroke="white" stroke-width="0.4" opacity="0.3"/><rect x="3" y="30" width="25" height="28" fill="none" stroke="white" stroke-width="0.8" opacity="0.4"/><path d="M10 40 L20 40 M15 32 L15 48" stroke="white" stroke-width="0.4" opacity="0.3"/><rect x="30" y="32" width="30" height="20" fill="none" stroke="white" stroke-width="0.8" opacity="0.4"/><path d="M38 40 L52 40 M45 35 L45 47" stroke="white" stroke-width="0.4" opacity="0.3"/><rect x="62" y="2" width="26" height="30" fill="none" stroke="white" stroke-width="0.8" opacity="0.4"/><path d="M70 12 L80 12 M75 5 L75 25" stroke="white" stroke-width="0.4" opacity="0.3"/><rect x="62" y="35" width="31" height="24" fill="none" stroke="white" stroke-width="0.8" opacity="0.4"/><path d="M70 45 L85 45 M77 38 L77 52" stroke="white" stroke-width="0.4" opacity="0.3"/><rect x="2" y="60" width="24" height="25" fill="none" stroke="white" stroke-width="0.8" opacity="0.4"/><path d="M8 70 L18 70 M13 62 L13 78" stroke="white" stroke-width="0.4" opacity="0.3"/><rect x="28" y="55" width="28" height="30" fill="none" stroke="white" stroke-width="0.8" opacity="0.4"/><path d="M36 68 L48 68 M42 58 L42 78" stroke="white" stroke-width="0.4" opacity="0.3"/><rect x="58" y="62" width="25" height="23" fill="none" stroke="white" stroke-width="0.8" opacity="0.4"/><path d="M65 72 L75 72 M70 65 L70 80" stroke="white" stroke-width="0.4" opacity="0.3"/><path d="M0 50 L100 50" stroke="white" stroke-width="0.6" opacity="0.2"/><path d="M50 0 L50 100" stroke="white" stroke-width="0.6" opacity="0.2"/><path d="M0 15 L100 15" stroke="white" stroke-width="0.4" opacity="0.15"/><path d="M0 85 L100 85" stroke="white" stroke-width="0.4" opacity="0.15"/><path d="M15 0 L15 100" stroke="white" stroke-width="0.4" opacity="0.15"/><path d="M85 0 L85 100" stroke="white" stroke-width="0.4" opacity="0.15"/></pattern></defs><rect width="100%" height="100%" fill="url(%23stone)"/></svg>')`,
                    backgroundSize: "120px 120px",
                    backgroundRepeat: "repeat",
                    backgroundPosition: "0 0"
                }}
            />

            <div className="absolute inset-0 bg-black/30" />

            <div className="relative z-10 min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div className="text-white">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-title font-bold mb-4 sm:mb-6 drop-shadow-2xl animate-fade-in-up">
                                {section.title}
                            </h2>
                            <p className="text-lg sm:text-xl md:text-2xl font-body mb-6 sm:mb-8 text-yellow-100 drop-shadow-lg leading-relaxed animate-fade-in-up">
                                {section.description}
                            </p>

                            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                                {historyEpochs.map((epoch, epochIndex) => (
                                    <button
                                        key={epoch.id}
                                        onClick={() => handleHistoryEpochClick(epoch.id)}
                                        className="glass w-full rounded-2xl border border-white/25 px-4 py-4 sm:px-5 sm:py-5 text-left hover:bg-white/15 transition-all duration-300 animate-fade-in-up focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                                        style={{ animationDelay: `${epochIndex * 0.1}s` }}
                                        aria-label={`Ir a la época ${epoch.title}`}
                                    >
                                        <div className="flex items-center justify-between gap-4">
                                            <span className="text-sm sm:text-lg md:text-xl font-ui font-medium flex items-center text-white">
                                                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                                                {epoch.title}
                                            </span>
                                            <span className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-yellow-200/80 font-ui whitespace-nowrap">
                                                {epoch.period}
                                            </span>
                                        </div>
                                    </button>
                                ))}
                            </div>

                            <button
                                onClick={() => handleNavigate("/historia")}
                                className="hidden lg:block px-6 sm:px-8 py-3 sm:py-4 glass border border-white/30 text-white font-ui font-semibold rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-105 animate-fade-in-up text-sm sm:text-base"
                                style={{ animationDelay: "0.4s" }}
                            >
                                Explorar Historia Completa
                            </button>
                        </div>

                        <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                            <HistorySlider />
                            <div className="lg:hidden mt-6 text-center">
                                <button
                                    onClick={() => handleNavigate("/historia")}
                                    className="px-6 py-3 glass border border-white/30 text-white font-ui font-semibold rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-105 animate-fade-in-up text-sm"
                                    style={{ animationDelay: "0.6s" }}
                                >
                                    Explorar Historia Completa
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute top-10 right-10 w-20 h-20 bg-amber-300/20 rounded-full blur-xl animate-float hidden sm:block" />
            <div className="absolute bottom-10 left-10 w-24 h-24 bg-orange-400/20 rounded-full blur-xl animate-float-delayed hidden sm:block" />
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-red-400/20 rounded-full blur-xl animate-float hidden sm:block" />
        </section>
    )
}

