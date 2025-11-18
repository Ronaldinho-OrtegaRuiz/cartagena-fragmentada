"use client"

import { notFound } from "next/navigation"
import useSitioController from "../hooks/useSitioController"
import SiteLayout from "../components/SiteLayout"
import SiteContentRenderer from "../components/SiteContentRenderer"

export default function SitePageClient({ slug }) {
    const { site } = useSitioController(slug)

    if (!site) {
        notFound()
    }

    return (
        <SiteLayout site={site}>
            <SiteContentRenderer site={site} />
        </SiteLayout>
    )
}

