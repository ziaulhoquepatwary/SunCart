
function Loading() {
    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/80 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-4">
                {/* Spinner Design */}
                <div className="relative w-16 h-16">
                    <div className="absolute inset-0 border-4 border-[#16a34a]/20 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-[#42D3F2] border-t-transparent rounded-full animate-spin"></div>
                </div>

                <p className="text-[#16a34a] font-medium animate-pulse tracking-wide">
                    Loading...
                </p>
            </div>
        </div>
    )
}

export default Loading