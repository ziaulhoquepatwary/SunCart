import { skinTips } from '@/data/home-page-cards-data'
import React from 'react'

function SummerCareTips() {
    return (
        <section className="py-20 px-6 bg-[#CEFAFE]">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
                        Summer Care Guide ☀️
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Stay fresh, hydrated, and protected. Follow these simple tips to keep your skin glowing all summer long.
                    </p>
                </div>

                {/* Tips Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skinTips.map((tip) => (
                        <div
                            key={tip.id}
                            className="group p-8 rounded-3xl border border-gray-100 hover:border-transparent hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 bg-[#effafc]"
                        >
                            <div className={`w-16 h-16 ${tip.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-130 transition-transform`}>
                                {tip.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {tip.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {tip.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Subtle Bottom Banner */}
                <div className="mt-16 bg-[#FFF9EB] rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-orange-100">
                    <div>
                        <h4 className="text-xl font-bold text-orange-900">Need personalized advice?</h4>
                        <p className="text-orange-800/80">Consult with our skincare experts for a custom routine.</p>
                    </div>
                    <button className="px-8 py-3 bg-[#42D3F2] text-white rounded-full font-bold hover:bg-[#2bcdf1] transition-colors shadow-lg shadow-[#42D3F2]/30">
                        Chat with Expert
                    </button>
                </div>

            </div>
        </section>
    )
}

export default SummerCareTips