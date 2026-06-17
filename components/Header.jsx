"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
    const pathname = usePathname()

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
    ]

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
            <div className="container mx-auto px-4 py-5 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2 group">
                    <span className="h-2.5 w-2.5 rounded-full bg-indigo-600 transition-transform duration-300 group-hover:scale-125" />
                    <h1 className="text-2xl font-bold tracking-tight text-slate-900">Blog</h1>
                </Link>

                <nav className="flex items-center gap-1 sm:gap-2">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                                    isActive
                                        ? "text-indigo-600"
                                        : "text-slate-600 hover:text-indigo-600 hover:bg-indigo-50"
                                }`}
                            >
                                {link.label}
                                {isActive && (
                                    <span className="absolute left-3 right-3 -bottom-[1px] h-0.5 rounded-full bg-indigo-600" />
                                )}
                            </Link>
                        )
                    })}
                </nav>
            </div>
        </header>
    )
}