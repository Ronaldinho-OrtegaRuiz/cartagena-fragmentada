import { useMemo } from "react"
import getTextureStyle from "@/utils/textures"

export default function useHistoriaPalettes(currentPeriod) {
    const currentPalette = useMemo(() => ({
        header: {
            background: currentPeriod.headerBackgroundColor || currentPeriod.headerGradientCss,
            border: currentPeriod.headerBorderColor,
            text: currentPeriod.headerTextColor,
            accent: currentPeriod.headerAccentColor,
            hover: currentPeriod.headerHoverColor,
            menuText: currentPeriod.headerMenuTextColor,
            menuActive: currentPeriod.headerMenuActiveColor,
            menuHover: currentPeriod.headerMenuHoverColor
        },
        timeline: {
            surface: currentPeriod.timelineCardBg,
            border: currentPeriod.timelineCardBorder,
            shadow: currentPeriod.timelineCardShadow,
            footerBorder: currentPeriod.timelineFooterBorderColor || '#facc15'
        }
    }), [currentPeriod])

    const pageTextureStyle = useMemo(
        () => getTextureStyle(currentPeriod.texture),
        [currentPeriod]
    )

    const textPalette = useMemo(() => ({
        primary: currentPeriod.textPrimary || '#ffffff',
        secondary: currentPeriod.textSecondary || 'rgba(255,255,255,0.85)',
        muted: currentPeriod.textMuted || 'rgba(255,255,255,0.6)'
    }), [currentPeriod])

    const swipeHintTheme = useMemo(() => ({
        accent: currentPeriod.headerAccentColor || '#facc15',
        accentSoft: currentPeriod.timelineFooterBorderColor || currentPeriod.headerHoverColor || currentPeriod.headerAccentColor || '#facc15',
        text: currentPeriod.headerTextColor || '#ffffff'
    }), [currentPeriod])

    return {
        currentPalette,
        pageTextureStyle,
        textPalette,
        swipeHintTheme
    }
}

