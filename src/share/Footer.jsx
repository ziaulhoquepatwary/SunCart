import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { IoLogoFacebook } from 'react-icons/io';
import { FaSquareInstagram, FaXTwitter } from 'react-icons/fa6';
import { RiMastercardLine, RiPaypalLine, RiVisaLine } from 'react-icons/ri';

const Footer = () => {
    const brandColor = "#42D3F2";
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#CEFAFE] border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                    {/* Brand Section */}
                    <div className="space-y-4">
                        <Link href="/" className="shrink-0">
                            <h1 className="text-2xl font-bold tracking-tight">
                                <span className="text-gray-900">Sun</span>
                                <span style={{ color: brandColor }}>Cart</span>
                            </h1>
                        </Link>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Your ultimate destination for summer essentials. From trendy sunglasses to beach-ready outfits, we bring the sunshine to your doorstep.
                        </p>
                        {/* Social Links */}
                        <div className="flex items-center gap-4 pt-2">
                            <a href="#" className="p-2 rounded-full bg-blue-50 text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-all duration-300">
                                <IoLogoFacebook size={18} />
                            </a>
                            <a href="#" className="p-2 rounded-full bg-pink-50 text-[#E4405F] hover:bg-[#E4405F] hover:text-white transition-all duration-300">
                                <FaSquareInstagram size={18} />
                            </a>
                            <a href="#" className="p-2 rounded-full bg-gray-50 text-black hover:bg-black hover:text-white transition-all duration-300">
                                <FaXTwitter size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links & Policy */}
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-gray-900 font-bold mb-4">Shop</h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li><Link href="/products" className="hover:text-[#42D3F2]">All Products</Link></li>
                                <li><Link href="/sunglasses" className="hover:text-[#42D3F2]">Sunglasses</Link></li>
                                <li><Link href="/outfits" className="hover:text-[#42D3F2]">Summer Outfits</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-gray-900 font-bold mb-4">Support</h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li><Link href="/privacy-policy" className="hover:text-[#42D3F2]">Privacy Policy</Link></li>
                                <li><Link href="/terms" className="hover:text-[#42D3F2]">Terms of Service</Link></li>
                                <li><Link href="/faq" className="hover:text-[#42D3F2]">FAQs</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-gray-900 font-bold mb-4">Contact Us</h3>
                        <div className="space-y-3 text-sm text-gray-600">
                            <div className="flex items-start gap-3">
                                <MapPin size={18} className="text-[#42D3F2] shrink-0" />
                                <span>123 Summer Street, Beachside City, Sunshine-3000</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone size={18} className="text-[#42D3F2] shrink-0" />
                                <span>+880 1234 567 890</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail size={18} className="text-[#42D3F2] shrink-0" />
                                <span>support@suncart.com</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="mt-5 pt-5 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-500 text-center">
                        © {currentYear} <span className="font-semibold">SunCart</span>. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <RiVisaLine size={35} className="text-[#1A1F71] cursor-pointer hover:scale-110 transition-transform" />

                        <RiMastercardLine size={35} className="text-[#EB001B] cursor-pointer hover:scale-110 transition-transform" />

                        <RiPaypalLine size={35} className="text-[#003087] cursor-pointer hover:scale-110 transition-transform" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;