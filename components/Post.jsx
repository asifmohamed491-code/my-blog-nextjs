"use client"

import { useEffect, useState } from "react";
import Link from "next/link";

export default function post({params}) {
    const id = params.id;
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_API_URL + '/post/' + id)
            .then(res => res.json())
            .then(res => setPost(res))
    }, [])

    return (
        <>
            {!post && (
                <main className="container mx-auto px-4 py-10 sm:py-14 max-w-3xl animate-pulse">
                    <div className="h-4 w-32 bg-slate-200 rounded mb-6" />
                    <div className="h-10 bg-slate-200 rounded w-3/4 mb-4" />
                    <div className="h-4 bg-slate-200 rounded w-1/3 mb-6" />
                    <div className="w-full h-72 bg-slate-200 rounded-2xl mb-8" />
                    <div className="space-y-3">
                        <div className="h-4 bg-slate-200 rounded w-full" />
                        <div className="h-4 bg-slate-200 rounded w-full" />
                        <div className="h-4 bg-slate-200 rounded w-2/3" />
                    </div>
                </main>
            )}

            {post && (
                <main className="container mx-auto px-4 py-10 sm:py-14 max-w-3xl">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors duration-200 mb-6"
                    >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to all posts
                    </Link>

                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-3">
                        {post.title}
                    </h2>
                    <p className="text-sm text-slate-500 mb-6">Published on {post.created_at_formatted}</p>

                    <img
                        className="w-full max-h-[420px] object-cover rounded-2xl shadow-sm mb-8"
                        src={post.image}
                        alt="Post Image"
                    />

                    <p className="text-lg leading-relaxed text-slate-700 whitespace-pre-line">
                        {post.description}
                    </p>
                </main>
            )}
        </>
    )
}