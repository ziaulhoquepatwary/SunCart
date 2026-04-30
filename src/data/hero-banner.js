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