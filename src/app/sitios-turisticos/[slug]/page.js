import { getAllSlugs } from "../data/sites"
import { notFound } from "next/navigation"
import SitePageClient from "./SitePageClient"

export async function generateStaticParams() {
    const slugs = getAllSlugs()
    return slugs.map((slug) => ({
        slug: slug,
    }))
}

export default async function SitePage({ params }) {
    const { slug } = await params

    return <SitePageClient slug={slug} />
}

