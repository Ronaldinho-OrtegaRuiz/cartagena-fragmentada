"use client"

import { useState } from "react"

export default function Pagination({ items, itemsPerPage = 6 }) {
    const [currentPage, setCurrentPage] = useState(1)
    
    const totalPages = Math.ceil(items.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentItems = items.slice(startIndex, endIndex)

    const goToPage = (page) => {
        setCurrentPage(page)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const goToPrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }

    const goToNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }

    return {
        currentItems,
        currentPage,
        totalPages,
        goToPage,
        goToPrevious,
        goToNext,
        PaginationControls: () => (
            <div className="flex justify-center items-center space-x-2 mt-8">
                <button
                    onClick={goToPrevious}
                    disabled={currentPage === 1}
                    className="px-4 py-2 rounded-md font-ui font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                        color: currentPage === 1 ? 'var(--cartagena-soft-black)' : 'var(--cartagena-coral)',
                        backgroundColor: currentPage === 1 ? 'transparent' : 'var(--cartagena-gold)',
                        border: '2px solid var(--cartagena-gold)'
                    }}
                >
                    Anterior
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                        key={page}
                        onClick={() => goToPage(page)}
                        className="px-4 py-2 rounded-md font-ui font-medium transition-all duration-300"
                        style={{
                            color: currentPage === page ? 'var(--cartagena-coral)' : 'var(--cartagena-soft-black)',
                            backgroundColor: currentPage === page ? 'var(--cartagena-gold)' : 'transparent',
                            border: '2px solid var(--cartagena-gold)'
                        }}
                    >
                        {page}
                    </button>
                ))}

                <button
                    onClick={goToNext}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 rounded-md font-ui font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                        color: currentPage === totalPages ? 'var(--cartagena-soft-black)' : 'var(--cartagena-coral)',
                        backgroundColor: currentPage === totalPages ? 'transparent' : 'var(--cartagena-gold)',
                        border: '2px solid var(--cartagena-gold)'
                    }}
                >
                    Siguiente
                </button>
            </div>
        )
    }
}
