"use client";
import { Home, Menu, ShoppingBag, UserRound, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const brandColor = "#42D3F2";

    const navLinks = [
        { name: 'Home', icon: <Home size={18} />, href: '/' },
        { name: 'Products', icon: <ShoppingBag size={18} />, href: '/products' },
        { name: 'My Profile', icon: <UserRound size={18} />, href: '/my-profile' },
    ];

    return (
        <nav className="bg-[#CEFAFE] border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo — Left */}
                    <Link href="/" className="shrink-0">
                        <h1 className="text-3xl font-bold tracking-tight">
                            <span className="text-gray-900">Sun</span>
                            <span style={{ color: brandColor }}>Cart</span>
                        </h1>
                    </Link>

                    {/* Nav Links — Center (Desktop) */}
                    <div className="hidden md:flex items-center space-x-2 absolute left-1/2 -translate-x-1/2">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all duration-200 font-medium ${isActive
                                        ? 'bg-white/50 text-[#42D3F2] border border-[#42D3F2]/30 shadow-sm'
                                        : 'text-gray-600 hover:bg-white/30 hover:text-[#42D3F2]'
                                        }`}
                                >
                                    {link.icon}
                                    <span>{link.name}</span>
                                </Link>
                            );
                        })}
                    </div>

                    {/* Auth Buttons — Right (Desktop) */}
                    <div className="hidden md:flex items-center gap-3">
                        <Link href="/login" className="px-5 py-3 text-sm font-semibold text-gray-700 hover:text-[#42D3F2] transition-colors">
                            Login
                        </Link>
                        <Link
                            href="/register"
                            style={{ backgroundColor: brandColor }}
                            className="px-5 py-2.5 text-sm font-semibold text-white rounded-lg hover:opacity-90 shadow-md transition-all shadow-cyan-200"
                        >
                            Register
                        </Link>
                    </div>

                    {/* Mobile Burger Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-gray-500 hover:text-[#42D3F2] hover:bg-cyan-50 rounded-lg transition-colors"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white ${isOpen ? 'max-h-screen border-t' : 'max-h-0'}`}>
                <div className="px-4 pt-4 pb-6 space-y-2">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-colors ${isActive
                                    ? 'bg-cyan-50 text-[#42D3F2] font-semibold'
                                    : 'text-gray-600 hover:bg-cyan-50'
                                    }`}
                            >
                                {link.icon} {link.name}
                            </Link>
                        );
                    })}

                    {/* Auth Buttons (Mobile) */}
                    <div className="pt-4 border-t border-gray-100 flex flex-col gap-2">
                        <Link href="/login" onClick={() => setIsOpen(false)} className="w-full py-3 text-center font-semibold text-gray-700 rounded-xl bg-gray-200">
                            Login
                        </Link>
                        <Link href="/register" onClick={() => setIsOpen(false)} style={{ backgroundColor: brandColor }} className="w-full py-3 text-center font-semibold text-white rounded-xl shadow-lg shadow-cyan-100">
                            Register
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;