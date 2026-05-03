"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { FaFacebook, FaHome } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import Swal from "sweetalert2";

function Login() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = async (userData) => {
        console.log("Login Data Submitted:", userData);

        const { data, error } = await authClient.signIn.email({
            email: userData.email,
            password: userData.password,
        });

        console.log(data, error);

        if (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.message,
            });
            reset();
        } else {
            const redirectTo = searchParams.get("redirect");
            router.push(redirectTo || "/");
        }
    }


    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-sans relative">

            {/* Floating Go Home Button */}
            <Link
                href="/"
                className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm text-gray-700 hover:bg-gray-50 transition-all text-sm font-medium"
            >
                <FaHome className="text-blue-600" />
                <span>Go Home</span>
            </Link>

            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-gray-100">

                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Welcome Back</h1>
                    <p className="text-gray-500 mt-2">Please enter your details to sign in</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                    {/* Email Field */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1 ml-1">Email Address</label>
                        <input
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address"
                                }
                            })}
                            type="email"
                            placeholder="type your email"
                            className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-gray-50 focus:bg-white`}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email.message}</p>}
                    </div>

                    {/* Password Field */}
                    <div>
                        <div className="flex justify-between items-center mb-1 ml-1">
                            <label className="block text-sm font-semibold text-gray-700">Password</label>
                        </div>
                        <input
                            {...register("password", {
                                required: "Password is required"
                            })}
                            type="password"
                            placeholder="••••••••"
                            className={`w-full px-4 py-3 rounded-xl border ${errors.password ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-gray-50 focus:bg-white`}
                        />
                        {errors.password && <p className="text-red-500 text-xs mt-1 ml-1">{errors.password.message}</p>}
                    </div>

                    {/* Remember Me */}
                    <div className="flex items-center ml-1">
                        <input
                            id="remember"
                            type="checkbox"
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded cursor-pointer"
                        />
                        <label htmlFor="remember" className="ml-2 block text-sm text-gray-600 cursor-pointer">
                            Remember me
                        </label>
                        <Link href="/forgot-password" size="sm" className="text-xs text-blue-600 hover:underline ml-auto">
                            Forgot Password?
                        </Link>
                    </div>

                    {/* Login Button */}
                    <div className="pt-2">
                        <button
                            type="submit"
                            className="w-full bg-[#42D3F2] hover:bg-[#24caf0] text-white font-bold py-3.5 rounded-xl shadow-lg shadow-blue-100 transition-all active:scale-[0.98] cursor-pointer"
                        >
                            Sign In
                        </button>
                    </div>
                </form>

                <div className="mt-8 text-center text-sm text-gray-600 font-medium">
                    Don't have an account?{' '}
                    <Link href="/register" className="text-blue-600 hover:underline">
                        Register now
                    </Link>
                </div>

                {/* Divider */}
                <div className="relative mb-8 mt-5">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-white px-3 text-gray-400 font-medium">Or login</span>
                    </div>
                </div>

                {/* Social Login Buttons */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                    <button
                        type="button"
                        className="flex items-center justify-center gap-2 py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-sm font-semibold text-gray-700"
                    >
                        <FcGoogle size={20} />
                        Google
                    </button>
                    <button
                        type="button"
                        className="flex items-center justify-center gap-2 py-2.5 bg-[#1877F2] text-white rounded-xl hover:bg-[#166fe5] transition-colors text-sm font-semibold"
                    >
                        <FaFacebook size={20} />
                        Facebook
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login