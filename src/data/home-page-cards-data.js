import { Droplets, Leaf, ShieldCheck, Sparkles, Sun, Trees, Waves, Wind } from "lucide-react";
import { BsSunFill } from "react-icons/bs";
import { HiFire } from "react-icons/hi";
import { MdBeachAccess } from "react-icons/md";

export const slides = [
    {
        badge: "Summer Sale",
        title: "Up to 50% OFF",
        badgeIcon: <BsSunFill />,
        subtitle: "Shop sunglasses, outfits & beach essentials",
        cta: "Shop Now",
        bg: "from-orange-500/30 to-yellow-400/10",
        image: "/bg-img-1.jpg",
    },
    {
        badge: "Hot Deals",
        title: "Beat the Heat",
        badgeIcon: <HiFire />,
        subtitle: "Trending skincare & summer fashion picks",
        cta: "Explore Deals",
        bg: "from-violet-500/30 to-orange-400/10",
        image: "/bg-img-2a.jpg",
    },
    {
        badge: "Beach Ready",
        title: "Coastal Vibes Only",
        badgeIcon: <MdBeachAccess />,
        subtitle: "Everything you need for the perfect beach day",
        cta: "Shop Beach",
        bg: "from-cyan-500/30 to-blue-400/10",
        image: "/bg-img-3.jpg",
    },
];

export const skinTips = [
    {
        id: 1,
        title: "Sun Protection",
        description: "Apply SPF 30+ every 2 hours, even on cloudy days. Don't forget your ears and neck!",
        icon: <Sun className="w-8 h-8 text-orange-500" />,
        bgColor: "bg-orange-50"
    },
    {
        id: 2,
        title: "Deep Hydration",
        description: "Drink at least 3 liters of water daily. Eat water-rich fruits like watermelon and cucumber.",
        icon: <Droplets className="w-8 h-8 text-blue-500" />,
        bgColor: "bg-blue-50"
    },
    {
        id: 3,
        title: "Light Skincare",
        description: "Switch to a gel-based moisturizer and a mild cleanser to prevent clogged pores in humidity.",
        icon: <Leaf className="w-8 h-8 text-green-500" />,
        bgColor: "bg-green-50"
    },
    {
        id: 4,
        title: "Breathable Fabrics",
        description: "Wear light-colored cotton or linen clothes to help your skin breathe and stay cool.",
        icon: <Wind className="w-8 h-8 text-teal-500" />,
        bgColor: "bg-teal-50"
    }
]

export const brands = [
    { id: 1, name: "SunShade", icon: <Sun className="w-6 h-6" />, color: "text-orange-600" },
    { id: 2, name: "PureShield", icon: <ShieldCheck className="w-6 h-6" />, color: "text-blue-600" },
    { id: 3, name: "GlowGuard", icon: <Sparkles className="w-6 h-6" />, color: "text-pink-600" },
    { id: 4, name: "ShoreShelter", icon: <Waves className="w-6 h-6" />, color: "text-cyan-600" },
    { id: 5, name: "IsleStyle", icon: <Trees className="w-6 h-6" />, color: "text-green-600" },
    { id: 6, name: "BreezeWear", icon: <Wind className="w-6 h-6" />, color: "text-teal-600" },
]