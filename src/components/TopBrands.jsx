import { brands } from '@/data/home-page-cards-data'

function TopBrands() {
    return (
        <section className="py-12 bg-[#e0fcff] border-y border-gray-50">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Title */}
                <div className="flex items-center gap-4 mb-10">
                    <div className="h-0.5 w-12 bg-[#16a34a]"></div>
                    <h2 className="text-xl font-bold uppercase tracking-[0.2em] text-gray-500">
                        Trusted by Global Brands
                    </h2>
                </div>

                {/* Brands Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
                    {brands.map((brand) => (
                        <div
                            key={brand.id}
                            className="group flex items-center justify-center gap-2 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
                        >
                            <div className={`${brand.color} group-hover:scale-110 transition-transform`}>
                                {brand.icon}
                            </div>
                            <span className="text-lg font-bold text-gray-800 tracking-tight">
                                {brand.name}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default TopBrands