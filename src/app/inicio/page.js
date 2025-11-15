"use client"

import { sections } from "@/data/sections"
import FarewellSection from "./components/FarewellSection"
import GenericSection from "./components/GenericSection"
import HeroPostal from "./components/HeroPostal"
import HistorySection from "./components/HistorySection"
import MuseosSection from "./components/MuseosSection"
import PlayasSection from "./components/PlayasSection"
import SitesSection from "./components/SitesSection"
import useInicioController from "./hooks/useInicioController"

export default function Inicio() {
    const {
        registerParallaxRef,
        registerSectionRef,
        handleHistoryEpochClick,
        handleNavigate
    } = useInicioController()

    const renderSection = (section, index) => {
        switch (section.title) {
            case "Historia":
                return (
                    <HistorySection
                        key={section.id}
                        section={section}
                        registerSectionRef={registerSectionRef}
                        handleHistoryEpochClick={handleHistoryEpochClick}
                        handleNavigate={handleNavigate}
                    />
                )
            case "Playas":
                return (
                    <PlayasSection
                        key={section.id}
                        section={section}
                        registerSectionRef={registerSectionRef}
                        handleNavigate={handleNavigate}
                    />
                )
            case "Museos":
                return (
                    <MuseosSection
                        key={section.id}
                        section={section}
                        registerSectionRef={registerSectionRef}
                        handleNavigate={handleNavigate}
                    />
                )
            case "Sitios Turísticos":
                return (
                    <SitesSection
                        key={section.id}
                        section={section}
                        registerSectionRef={registerSectionRef}
                        registerParallaxRef={registerParallaxRef}
                        handleNavigate={handleNavigate}
                    />
                )
            default:
                return (
                    <GenericSection
                        key={section.id}
                        section={section}
                        registerSectionRef={registerSectionRef}
                        registerParallaxRef={registerParallaxRef}
                        variantIndex={index}
                    />
                )
        }
    }

    return (
        <div className="relative overflow-hidden">
            <HeroPostal sections={sections} registerSectionRef={registerSectionRef} />
            {sections.map((section, index) => renderSection(section, index))}
            <FarewellSection registerSectionRef={registerSectionRef} />
        </div>
    )
}

