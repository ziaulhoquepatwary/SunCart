"use client";
import ProductCart from "@/components/ProductCart"
import { summerProducts } from "@/data/summer_products"
import { Search } from "lucide-react"
import { useState } from "react";

function AllProductsPage() {
    const [products, setProducts] = useState(summerProducts);
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = () => {
        const filteredProducts = summerProducts.filter(product =>
            product.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
        )
        setProducts(filteredProducts)
        setSearchTerm("")
    }

    return (
        <main className="min-h-screen bg-[#d8f8fa] text-gray-900 py-12 px-6">
            <div className="max-w-7xl mx-auto">

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                            All <span className="text-[#42D3F2]">Products</span>
                        </h1>
                    </div>

                    <div className="relative w-full md:w-96">
                        <Search onClick={handleSearch} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#42D3F2] cursor-pointer" size={20} />
                        <input
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            type="text"
                            placeholder="Search by name or email..."
                            className="w-full bg-white border border-gray-200 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-[#86efac] transition-all text-gray-900 placeholder-gray-400"
                        />
                    </div>
                </div>
                {
                    products.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                            {
                                products.map(product => (
                                    <ProductCart key={product.id} product={product} />
                                ))
                            }
                        </div>
                    ) : (
                        <p className="text-gray-500 text-center py-12">No products found.</p>
                    )
                }
            </div>
        </main>
    )
}

export default AllProductsPage