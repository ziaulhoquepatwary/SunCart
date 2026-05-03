"use client";
import React, { useState } from 'react';
import { authClient } from '@/lib/auth-client';
import { User, Mail, Edit2, ArrowLeft, Camera, Loader2, Save, } from 'lucide-react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import AuthGuard from '@/components/AuthGuard';

function MyProfile() {
    const { data: session, isPending } = authClient.useSession();
    const [isEditing, setIsEditing] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);

    const user = session?.user;

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: user?.name || "",
            image: user?.image || ""
        }
    })


    if (isPending) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="w-12 h-12 border-4 border-[#42D3F2] border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    const handleUpdateProfile = async (data) => {
        // console.log('update data', data);

        const { error } = await authClient.updateUser({
            image: data.image,
            name: data.name,
        });

        if (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.message,
            });
        } else {
            Swal.fire({
                icon: "success",
                title: "Profile Updated!",
                text: "Your profile has been updated successfully.",
            });
        }

        setIsEditing(false);
    }


    return (
        <AuthGuard>
            <section className="bg-[#cef0f8] py-12 px-4">
                <div className="max-w-3xl mx-auto">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-8">
                        <Link href="/" className="p-2 hover:bg-white rounded-full transition-colors">
                            <ArrowLeft size={20} />
                        </Link>
                        <h1 className="text-2xl font-bold text-gray-900">My Profile</h1>
                    </div>

                    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="h-32 bg-gradient-to-r from-[#42D3F2] to-cyan-200"></div>

                        <div className="px-8 pb-8">
                            <div className="relative -top-12 flex flex-col sm:flex-row items-end sm:items-center gap-6">
                                <div className="relative group">
                                    <img
                                        src={user?.image || "/user.png"}
                                        alt="Profile"
                                        className="w-32 h-32 rounded-2xl object-cover border-4 border-white shadow-md"
                                    />
                                </div>

                                <div className="flex-1 pb-10">
                                    <h2 className="text-2xl font-bold text-gray-900">{user?.name}</h2>
                                    <p className="text-gray-500">{user?.email}</p>
                                </div>

                                {!isEditing && (
                                    <button
                                        onClick={() => setIsEditing(true)}
                                        className="flex items-center gap-2 px-6 py-2.5 bg-[#42D3F2] text-white rounded-xl font-semibold hover:opacity-90 transition-all"
                                    >
                                        <Edit2 size={16} /> Edit Profile
                                    </button>
                                )}
                            </div>

                            {
                                isEditing ? (
                                    <form onSubmit={handleSubmit(handleUpdateProfile)} className="space-y-6 animate-in fade-in duration-300">
                                        <div className="grid grid-cols-1 gap-6">
                                            {/* Name Field */}
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                                <div className="relative">
                                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                                    <input
                                                        {...register("name", { required: "Name is required" })}
                                                        type="text"
                                                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#42D3F2] outline-none"
                                                        placeholder="Enter your name"
                                                    />
                                                </div>
                                                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                                            </div>

                                            {/* Image URL Field */}
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Profile Image URL</label>
                                                <div className="relative">
                                                    <Camera className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                                    <input
                                                        {...register("image")}
                                                        type="text"
                                                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#42D3F2] outline-none"
                                                        placeholder="Paste image URL"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex gap-3 pt-4">
                                            <button
                                                type="submit"
                                                disabled={isUpdating}
                                                className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#42D3F2] text-white rounded-xl font-bold shadow-lg disabled:opacity-70"
                                            >
                                                {isUpdating ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
                                                {isUpdating ? "Saving..." : "Save Changes"}
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setIsEditing(false)}
                                                className="px-6 py-3 bg-gray-100 text-gray-600 rounded-xl font-bold hover:bg-gray-200"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </form>
                                ) : (
                                    <div className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                                                <p className="text-xs font-semibold text-gray-400 uppercase mb-1">Full Name</p>
                                                <div className="flex items-center gap-2 text-gray-700">
                                                    <User size={16} className="text-[#42D3F2]" />
                                                    <p className="font-medium">{user?.name}</p>
                                                </div>
                                            </div>
                                            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                                                <p className="text-xs font-semibold text-gray-400 uppercase mb-1">Email Address</p>
                                                <div className="flex items-center gap-2 text-gray-700">
                                                    <Mail size={16} className="text-[#42D3F2]" />
                                                    <p className="font-medium">{user?.email}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            {/* Additional Stats or Bio could go here */}
                            <div className="mt-8 p-6 bg-cyan-50 rounded-2xl border border-cyan-100">
                                <h3 className="text-sm font-bold text-cyan-800 mb-2">Account Security</h3>
                                <p className="text-sm text-cyan-600">Your account is managed via Better Auth. To change your password, please check your email settings.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </AuthGuard>
    );
}

export default MyProfile;