import Link from 'next/link'
import { IoIosArrowRoundForward } from 'react-icons/io'
import ProductCart from './ProductCart'
import { summerProducts } from '@/data/summer_products'

function PopularProducts() {
    return (
        <section className="py-16 px-6 bg-[#CEFAFE]">
            <div className="max-w-7xl mx-auto">

                <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
                    <h2 className="text-3xl text-[#13c9f1] font-extrabold">Popular Products 🔥</h2>
                    <Link href="/products" className="text-[#16a34a] font-semibold hover:underline flex items-center gap-1">
                        See more <IoIosArrowRoundForward />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        summerProducts?.slice(0, 6).map(product => (
                            <ProductCart key={product.id} product={product} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default PopularProducts