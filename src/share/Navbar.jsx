"use client";
import { authClient } from '@/lib/auth-client';
import { Home, LogOut, Menu, ShoppingBag, User, UserRound, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [avatarMenuOpen, setAvatarMenuOpen] = useState(false);
    const { data: session, isPending } = authClient.useSession();
    const pathname = usePathname();
    const brandColor = "#42D3F2";

    const user = session?.user;

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

                    <div className="hidden md:flex items-center gap-2">
                        <Link href="/cart" className="relative text-gray-600 hover:text-[#42D3F2] transition-colors px-2">
                            <FiShoppingCart size={24} />
                            <span className="absolute -top-2 right-0 bg-[#42D3F2] text-white text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center">
                                0
                            </span>
                        </Link>

                        {/* Auth Buttons — Right (Desktop) */}
                        {isPending ? (
                            <div className="w-9 h-9 rounded-full bg-sky-400 animate-pulse" />
                        ) : user ? (
                            <div className="relative">
                                <button
                                    onClick={() => setAvatarMenuOpen(prev => !prev)}
                                    className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#42D3F2] hover:opacity-90 transition-opacity"
                                >
                                    <img
                                        src={user?.image || "/user.png"}
                                        alt={user?.name}
                                        className="object-cover w-full h-full"
                                    />
                                </button>

                                {avatarMenuOpen && (
                                    <div className="absolute right-0 top-12 w-56 bg-white rounded-xl border border-gray-100 shadow-lg shadow-cyan-50 z-50">
                                        <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
                                            <img
                                                src={user?.image || "/user.png"}
                                                alt={user?.name}
                                                className="w-10 h-10 rounded-full object-cover"
                                            />
                                            <div className="overflow-hidden">
                                                <p className="text-sm font-semibold text-gray-800 truncate">{user?.name}</p>
                                                <p className="text-xs text-gray-400 truncate">{user?.email}</p>
                                            </div>
                                        </div>

                                        <div className="p-2">
                                            <Link
                                                href="/my-profile"
                                                onClick={() => setAvatarMenuOpen(false)}
                                                className="flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-cyan-50 hover:text-[#42D3F2] transition-colors"
                                            >
                                                <User size={15} />
                                                My Profile
                                            </Link>
                                            <button
                                                onClick={() => {
                                                    setAvatarMenuOpen(false);
                                                    authClient.signOut();
                                                }}
                                                className="flex items-center gap-2 w-full px-3 py-2 text-sm text-red-500 rounded-lg hover:bg-red-50 transition-colors"
                                            >
                                                <LogOut size={15} />
                                                Logout
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="flex items-center gap-3">
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
                        )}
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

                    {user && (
                        <div className="flex items-center gap-3 px-4 py-4 mb-2 bg-cyan-50 rounded-2xl border border-cyan-100">
                            <img
                                src={user?.image || "/user.png"}
                                alt={user?.name}
                                className="w-12 h-12 rounded-full object-cover border-2 border-[#42D3F2]"
                            />
                            <div className="overflow-hidden">
                                <p className="font-bold text-gray-900 truncate">{user?.name}</p>
                                <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                            </div>
                        </div>
                    )}

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

                    <div className="pt-4 border-t border-gray-100 flex flex-col gap-2">
                        {isPending ? (
                            <div className="w-full h-12 bg-gray-100 animate-pulse rounded-xl" />
                        ) : user ? (
                            <button
                                onClick={() => {
                                    setIsOpen(false);
                                    authClient.signOut();
                                }}
                                className="flex items-center justify-center gap-2 w-full py-3 text-center font-semibold text-red-500 rounded-xl bg-red-50 hover:bg-red-100 transition-colors"
                            >
                                <LogOut size={18} />
                                Logout
                            </button>
                        ) : (
                            <>
                                <Link href="/login" onClick={() => setIsOpen(false)} className="w-full py-3 text-center font-semibold text-gray-700 rounded-xl bg-gray-100">
                                    Login
                                </Link>
                                <Link href="/register" onClick={() => setIsOpen(false)} style={{ backgroundColor: brandColor }} className="w-full py-3 text-center font-semibold text-white rounded-xl shadow-lg shadow-cyan-100">
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;