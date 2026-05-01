"use client";
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { FaHome } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';

function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log("Form data Submitted", data);

    }


    return (
        <section className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <Link
                href="/"
                className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm text-gray-700 hover:bg-gray-50 transition-all text-sm font-medium"
            >
                <FaHome className="text-blue-600" />
                <span>Go Home</span>
            </Link>

            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-gray-100">

                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Create Account</h1>
                    <p className="text-gray-500 mt-2">Join us by filling out the details below</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Name Field */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1 ml-1">Full Name</label>
                        <input
                            {...register("name", { required: "Name is required" })}
                            type="text"
                            placeholder="John Doe"
                            className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-gray-50 focus:bg-white`}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1 ml-1">{errors.name.message}</p>}
                    </div>

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
                            placeholder="name@email.com"
                            className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-gray-50 focus:bg-white`}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email.message}</p>}
                    </div>

                    {/* Photo URL Field */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1 ml-1">Photo URL (Optional)</label>
                        <input
                            {...register("photoUrl")}
                            type="url"
                            placeholder="https://image-link.com"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-gray-50 focus:bg-white"
                        />
                    </div>

                    {/* Password Field */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1 ml-1">Password</label>
                        <input
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: "At least 6 characters" }
                            })}
                            type="password"
                            placeholder="••••••••"
                            className={`w-full px-4 py-3 rounded-xl border ${errors.password ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-gray-50 focus:bg-white`}
                        />
                        {errors.password && <p className="text-red-500 text-xs mt-1 ml-1">{errors.password.message}</p>}
                    </div>

                    <div className="pt-2">
                        <button
                            type="submit"
                            className="w-full bg-[#42D3F2] hover:bg-[#23ccf1] text-white font-bold py-3.5 rounded-xl shadow-lg shadow-blue-100 transition-all active:scale-[0.98] cursor-pointer"
                        >
                            Register
                        </button>
                    </div>
                </form>

                <div className="mt-8 text-center text-sm text-gray-600 font-medium">
                    Already have an account?{' '}
                    <Link href="/login" className="text-[#42D3F2] hover:underline">
                        Login
                    </Link>
                </div>

                {/* Divider */}
                <div className="relative mb-8 mt-5">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-white px-3 text-gray-400 font-medium">Or register with </span>
                    </div>
                </div>

                {/* Social Register Buttons */}
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
        </section>
    )
}

export default Register