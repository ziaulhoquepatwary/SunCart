"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { slides } from "@/data/hero-banner";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";

function HeroBanner() {
    const [index, setIndex] = useState(0);

    const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, [index]);

    const slide = slides[index];

    return (
        <section className="relative w-full h-[80vh] overflow-hidden bg-gray-900">

            <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority
                className="object-cover transition-opacity duration-1000"
            />

            {/* Overlays */}
            <div className={`absolute inset-0 bg-linear-to-r ${slide.bg} transition-colors duration-700`} />
            <div className="absolute inset-0 bg-black/30" />

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center h-full">
                <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl text-white animate-fadeInUp">
                        <span className="inline-flex items-center gap-2 w-fit px-4 py-1.5 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full text-white text-sm font-medium">
                            {slide.badgeIcon}
                            {slide.badge}
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold my-6 leading-tight">
                            {slide.title}
                        </h1>
                        <p className="text-lg text-white/80 mb-8 max-w-md">
                            {slide.subtitle}
                        </p>
                        <button className="group flex items-center gap-2 px-8 py-4 bg-white border border-gray-300 rounded-xl shadow-sm hover:shadow-lg hover:border-green-400 hover:text-green-400 hover:scale-105 active:scale-95 transition-all duration-300 font-bold text-gray-800 cursor-pointer">
                            {slide.cta}
                            <FiArrowRight className="group-hover:scale-110 transition-transform duration-300" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`h-1.5 transition-all rounded-full ${i === index ? "w-8 bg-white" : "w-2 bg-white/50"}`}
                    />
                ))}
            </div>
        </section>
    )
}

export default HeroBanner