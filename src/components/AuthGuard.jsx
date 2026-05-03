"use client";
import { authClient } from "@/lib/auth-client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

function AuthGuard({ children }) {
    const { data: session, isPending } = authClient.useSession();
    const router = useRouter();
    const pathname = usePathname();

    const user = session?.user;

    useEffect(() => {
        if (!isPending && !user) {
            router.push(`/login?redirect=${pathname}`);
        }
    }, [isPending, user, pathname, router]);

    if (isPending || !user) {
        return (
            <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white">
                {/* Spinner */}
                <div className="w-14 h-14 rounded-full border-4 border-gray-200 border-t-[#42D3F2] animate-spin mb-5" />

                {/* Text */}
                <p className="text-gray-500 text-sm font-medium tracking-wide">
                    {isPending ? "Checking session..." : "Redirecting to login..."}
                </p>
            </div>
        );
    }

    if (!user) {
        return null;
    }

    return <>{children}</>;
}

export default AuthGuard;