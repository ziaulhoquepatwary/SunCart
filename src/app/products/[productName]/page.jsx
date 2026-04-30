import { productAdditionalInfo } from "@/data/home-page-cards-data";
import { summerProducts } from "@/data/summer_products";
import { Award, Info, Leaf, RotateCcw, ShieldCheck, Star, Truck } from "lucide-react";
import Image from "next/image";
import React from "react"

function ProductDetailsPage({ params }) {
    const { productName } = React.use(params);
    const decodedName = decodeURIComponent(productName);

    console.log(decodedName);
    const product = summerProducts.find(item => item.name === decodedName);

    if (!product) {
        return <div className="p-10 text-center">Product not found</div>;
    }

    return (
        <section className="py-12 px-6 bg-[#CEFAFE]">
            <div className="max-w-7xl mx-auto xl:px-8 lg:px-8 md:px-8">
                <div className="flex flex-col lg:flex-row gap-12 items-start">

                    {/* Right Side: Product Image */}
                    <div className="w-full lg:w-[40%]">
                        <div className="relative aspect-square rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 shadow-sm">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 33vw"
                                className="object-cover hover:scale-105 transition-transform duration-500"
                                priority
                            />
                        </div>
                    </div>

                    {/* Left Side: Product Details */}
                    <div className="w-full lg:w-[55%] space-y-6">
                        <div>
                            <span className="inline-block px-3 py-1 bg-green-100 text-[#16a34a] text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
                                {product.brand}
                            </span>
                            <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
                                {product.name}
                            </h1>
                        </div>

                        {/* Rating & Stock */}
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1 text-yellow-500">
                                <Star fill="currentColor" size={18} />
                                <span className="text-gray-900 font-bold">{product.rating}</span>
                                <span className="text-gray-400 text-sm">(120+ Reviews)</span>
                            </div>
                            <div className="h-4 w-1px bg-gray-300"></div>
                            <p className={`text-sm font-semibold ${product.stock > 0 ? 'text-green-600' : 'text-red-500'}`}>
                                {product.stock > 0 ? `In Stock (${product.stock})` : 'Out of Stock'}
                            </p>
                        </div>

                        <p className="text-3xl font-black text-gray-900">
                            ${product.price}
                        </p>

                        <p className="text-gray-600 leading-relaxed text-lg">
                            {product.description}
                        </p>

                        {/* Action Buttons */}
                        <div className="group flex flex-col sm:flex-row gap-4 pt-4">
                            <button className="flex-1 bg-gray-700 text-white py-4 rounded-xl shadow-sm hover:shadow-lg border border-gray-300 hover:border-green-600 hover:text-[#1dc9f0] hover:scale-105 active:scale-95 transition-all duration-300 font-bold cursor-pointer">
                                Add to Cart
                            </button>
                            <button className="group flex-1 py-3 bg-white border border-gray-300 rounded-xl shadow-sm hover:shadow-lg hover:border-[#1dc9f0] hover:text-[#1dc9f0] hover:scale-105 active:scale-95 transition-all duration-300 font-bold text-gray-800 cursor-pointer">
                                Buy Now
                            </button>
                        </div>

                        {/* Fixed Quality/Service Info */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-gray-100">
                            <div className="flex items-center gap-3">
                                <Truck className="text-[#16a34a]" size={24} />
                                <div>
                                    <p className="text-xs font-bold uppercase text-gray-900">Free Delivery</p>
                                    <p className="text-xs text-gray-500">On orders over $100</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <RotateCcw className="text-[#16a34a]" size={24} />
                                <div>
                                    <p className="text-xs font-bold uppercase text-gray-900">30 Days Return</p>
                                    <p className="text-xs text-gray-500">Hassle free exchange</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <ShieldCheck className="text-[#16a34a]" size={24} />
                                <div>
                                    <p className="text-xs font-bold uppercase text-gray-900">100% Authentic</p>
                                    <p className="text-xs text-gray-500">Genuine product</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        productAdditionalInfo.map(info => (
                            <div key={info.id} className="bg-white/60 backdrop-blur-md p-8 rounded-4xl border border-white space-y-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
                                    {info.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">{info.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {info.description}
                                </p>
                            </div>
                        ))
                    }
                </div>

            </div>
        </section>
    )
}

export default ProductDetailsPage