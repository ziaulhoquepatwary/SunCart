"use client";
import React from 'react';
import { authClient } from '@/lib/auth-client';
import { User, Mail, Edit2, ArrowLeft, } from 'lucide-react';
import Link from 'next/link';

function MyProfile() {
    const { data: session, isPending } = authClient.useSession();


    if (isPending) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="w-12 h-12 border-4 border-[#42D3F2] border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }


    return (
        <div className="bg-[#cef0f8] py-12 px-4">
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
                                    src={session.user.image || "/user.png"}
                                    alt="Profile"
                                    className="w-32 h-32 rounded-2xl object-cover border-4 border-white shadow-md"
                                />
                            </div>

                            <div className="flex-1 pb-10">
                                <h2 className="text-2xl font-bold text-gray-900">{session.user.name}</h2>
                                <p className="text-gray-500">{session.user.email}</p>
                            </div>

                            <button
                                onClick={() => setIsEditing(true)}
                                className="flex items-center gap-2 px-6 py-2.5 bg-[#42D3F2] text-white rounded-xl font-semibold hover:opacity-90 transition-all"
                            >
                                <Edit2 size={16} /> Edit Profile
                            </button>
                        </div>

                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                                    <p className="text-xs font-semibold text-gray-400 uppercase mb-1">Full Name</p>
                                    <div className="flex items-center gap-2 text-gray-700">
                                        <User size={16} className="text-[#42D3F2]" />
                                        <p className="font-medium">{session.user.name}</p>
                                    </div>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                                    <p className="text-xs font-semibold text-gray-400 uppercase mb-1">Email Address</p>
                                    <div className="flex items-center gap-2 text-gray-700">
                                        <Mail size={16} className="text-[#42D3F2]" />
                                        <p className="font-medium">{session.user.email}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Additional Stats or Bio could go here */}
                        <div className="mt-8 p-6 bg-cyan-50 rounded-2xl border border-cyan-100">
                            <h3 className="text-sm font-bold text-cyan-800 mb-2">Account Security</h3>
                            <p className="text-sm text-cyan-600">Your account is managed via Better Auth. To change your password, please check your email settings.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyProfile;