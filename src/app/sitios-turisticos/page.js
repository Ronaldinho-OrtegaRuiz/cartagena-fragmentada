"use client"

import Link from "next/link"
import { sites } from "./data/sites"

export default function SitiosTuristicos() {
    return (
        <div className="min-h-screen p-8 sm:p-20" style={{ background: 'linear-gradient(135deg, var(--cartagena-sand) 0%, #E8DCC0 100%)' }}>
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl sm:text-6xl font-title font-bold mb-8 text-center text-title-large" style={{ color: 'var(--cartagena-gold)' }}>
                    Sitios Turísticos
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sites.map((site) => (
                        <Link 
                            key={site.id} 
                            href={`/sitios-turisticos/${site.slug}`}
                            className="p-6 rounded-lg card-base card-hover block"
                        >
                            <h2 className="text-xl font-title font-semibold mb-3 text-gray-800 dark:text-gray-100">
                                {site.name}
                            </h2>
                            <p className="font-body text-base text-gray-700 dark:text-gray-200 leading-relaxed">
                                {site.description}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

