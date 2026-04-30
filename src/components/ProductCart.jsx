import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaStar } from 'react-icons/fa6'

function ProductCart({ product }) {
    return (
        <div key={product.id} className="bg-[#effafc] rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow group">

            {/* Image Container */}
            <div className="relative w-full h-64 bg-gray-100 rounded-xl overflow-hidden mb-4">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>

            {/* Product Info */}
            <div className="space-y-2">
                <div className="flex justify-between items-center">
                    <h3 className="text-lg font-bold text-gray-800 truncate">{product.name}</h3>
                    <div className="flex items-center gap-1 text-yellow-500">
                        <FaStar size={14} />
                        <span className="text-sm font-medium text-gray-600">{product.rating}</span>
                    </div>
                </div>

                <p className="text-xl font-extrabold text-gray-900">${product.price}</p>

                {/* View Details Button */}
                <Link
                    href={`/products/${product.id}`}
                    className="block w-full text-center bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors mt-4"
                >
                    View Details
                </Link>
            </div>
        </div>
    )
}

export default ProductCart