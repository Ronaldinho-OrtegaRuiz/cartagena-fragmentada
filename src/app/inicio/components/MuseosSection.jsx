"use client"

export default function MuseosSection({ section, registerSectionRef, handleNavigate }) {
    const allMuseums = section.blocks.flatMap((block) =>
        block.museums.map((museum) => ({
            ...museum,
            category: block.title,
            categoryColor: block.color
        }))
    )

    return (
        <section
            ref={registerSectionRef}
            id={`section-${section.id}`}
            className="relative min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200"
        >
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><defs><pattern id="gallery" width="100" height="100" patternUnits="userSpaceOnUse"><rect x="0" y="0" width="100" height="100" fill="none" stroke="white" stroke-width="0.5" opacity="0.1"/><circle cx="50" cy="50" r="20" fill="none" stroke="white" stroke-width="0.3" opacity="0.05"/><path d="M20 20 L80 20 L80 80 L20 80 Z" fill="none" stroke="white" stroke-width="0.2" opacity="0.08"/></pattern></defs><rect width="100%" height="100%" fill="url(%23gallery)"/></svg>')`,
                    backgroundSize: "150px 150px"
                }}
            />

            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 via-transparent to-gray-800/30" />

            <div className="relative z-10 min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="text-center mb-8 sm:mb-12">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-title font-light mb-4 sm:mb-6 text-gray-800 animate-fade-in-up tracking-wide">
                            {section.title}
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl font-body text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delayed">
                            {section.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-6 mb-8 sm:mb-12">
                        {allMuseums.map((museum, index) => (
                            <div
                                key={`${museum.name}-${index}`}
                                className="group relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 cursor-pointer h-64 sm:h-72 flex flex-col border-4 border-white hover:border-gray-300 animate-fade-in-up"
                                onClick={() => handleNavigate("/museos")}
                                style={{
                                    animationDelay: `${index * 0.1}s`
                                }}
                            >
                                <div className="absolute inset-0">
                                    <img
                                        src={museum.image}
                                        alt={museum.name}
                                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300" />
                                </div>

                                <div className="relative z-10 h-full flex flex-col justify-between p-3 sm:p-4">
                                    <div
                                        className="self-start px-2 sm:px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border"
                                        style={{
                                            backgroundColor: `${museum.categoryColor}80`,
                                            borderColor: `${museum.categoryColor}60`,
                                            color: "white"
                                        }}
                                    >
                                        {museum.category}
                                    </div>

                                    <div className="text-white">
                                        <h3
                                            className="text-base sm:text-lg font-title font-bold mb-2 group-hover:text-amber-200 transition-colors duration-300 leading-tight"
                                            style={{
                                                color: "#FFFFFF",
                                                textShadow: "2px 2px 8px rgba(0, 0, 0, 0.9), 0 0 20px rgba(0, 0, 0, 0.5)"
                                            }}
                                        >
                                            {museum.name}
                                        </h3>
                                        <p
                                            className="text-xs sm:text-sm font-body leading-relaxed mb-2 sm:mb-3 text-white"
                                            style={{
                                                textShadow: "1px 1px 6px rgba(0, 0, 0, 0.8), 0 0 15px rgba(0, 0, 0, 0.4)"
                                            }}
                                        >
                                            {museum.description}
                                        </p>

                                        <div
                                            className="flex items-center text-amber-200 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0"
                                            style={{
                                                textShadow: "1px 1px 4px rgba(0, 0, 0, 0.8)"
                                            }}
                                        >
                                            <span className="text-xs sm:text-sm font-medium mr-2">Explorar</span>
                                            <svg className="w-3 sm:w-4 h-3 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%]"></div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <button
                            onClick={() => handleNavigate("/museos")}
                            className="group relative px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-gray-700 to-gray-800 backdrop-blur-sm border-2 border-gray-600 text-white font-ui font-medium rounded-full hover:from-gray-600 hover:to-gray-700 hover:border-gray-500 transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-gray-500/25 animate-fade-in-up overflow-hidden text-sm sm:text-base"
                            style={{ animationDelay: "0.8s" }}
                        >
                            <span className="relative z-10 flex items-center">
                                Explorar Todos los Museos
                                <svg className="w-4 sm:w-5 h-4 sm:h-5 ml-2 sm:ml-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-gray-400/10 to-gray-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </button>
                    </div>
                </div>
            </div>

            <div className="absolute top-20 right-20 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl animate-float hidden lg:block" />
            <div className="absolute bottom-20 left-20 w-40 h-40 bg-stone-400/10 rounded-full blur-2xl animate-float-delayed hidden lg:block" />
            <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-gray-400/10 rounded-full blur-2xl animate-float hidden lg:block" />
        </section>
    )
}

