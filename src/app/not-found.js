import Link from 'next/link'
import React from 'react'

function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#e0fcff] px-6">
            <div className="text-center">
                <h1 className="text-9xl font-black text-gray-300 tracking-widest">
                    404
                </h1>

                <div className="bg-[#2dacc9] px-2 text-sm rounded rotate-12 absolute translate-y-[-3rem] translate-x-[4rem] inline-block text-white">
                    Page Not Found
                </div>

                <div className="mt-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Oops! Page not found
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-md mx-auto">
                        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </p>

                    <Link
                        href="/"
                        className="inline-block px-8 py-3 bg-[#42D3F2] text-white font-semibold rounded-lg shadow-md hover:bg-[#1acaf1] transition-all duration-300 transform hover:scale-105"
                    >
                        Back to Homepage
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound