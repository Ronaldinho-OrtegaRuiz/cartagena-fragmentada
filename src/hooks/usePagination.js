import { useState } from "react"

export const usePagination = (items, itemsPerPage = 6) => {
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
        goToNext
    }
}
