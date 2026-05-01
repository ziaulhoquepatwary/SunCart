import Navbar from "@/share/Navbar";
import Footer from "@/share/Footer";

function MainLayout({ children }) {
    return (
        <div className="flex flex-col min-h-full">
            <Navbar />
            <main className="grow">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout
