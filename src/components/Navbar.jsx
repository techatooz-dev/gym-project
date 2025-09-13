"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/config/site";

function CartIcon(props) {
    return (
        <svg
            viewBox="0 0 24 24"
            width="22"
            height="22"
            aria-hidden="true"
            {...props}
        >
            <path
                fill="currentColor"
                d="M7 18a2 2 0 1 0 .001 3.999A2 2 0 0 0 7 18m10 0a2 2 0 1 0 .001 3.999A2 2 0 0 0 17 18M6.2 5h14.06a1 1 0 0 1 .98 1.2l-1.4 7a1 1 0 0 1-.98.8H9.02l-.2 1h9.66a1 1 0 1 1 0 2H7a1 1 0 0 1-.97-.76L3.3 3H2a1 1 0 1 1 0-2h2.7a1 1 0 0 1 .97.76L6.2 5Z"
            />
        </svg>
    );
}

export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    const isActive = (href) => (href === "/" ? pathname === "/" : pathname?.startsWith(href));

    return (
        <header className="sticky top-0 z-50 bg-white  border-b border-black/5">
            <div className="mx-auto max-w-7xl px-8 lg:px-10  py-3">
                <div className="flex h-16 items-center gap-4">
                    {/* Brand */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <Image
                            src={site.logo.src}
                            alt={site.logo.alt}
                            width={site.logo.width}
                            height={site.logo.height}
                            priority
                        />
                        <span className="sr-only">{site.name}</span>
                    </Link>

                    {/* Right area: desktop nav + actions aligned to end */}
                    <div className="ml-auto flex items-center gap-2">
                        {/* Desktop nav at the right end */}
                        <nav className="hidden md:flex items-center gap-1 mr-2">
                            {site.nav.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="px-3 py-2 rounded-md text-sm font-semibold uppercase tracking-wide transition-colors hover:bg-transparent focus:bg-transparent text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>

                        {/* Right actions */}
                        <Link
                            href="#cart"
                            aria-label="Cart"
                            className="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-full text-gray-700 hover:bg-black/5 dark:text-gray-200 dark:hover:bg-white/10"
                        >
                            <CartIcon />
                        </Link>
                        <button
                            type="button"
                            aria-label="Toggle menu"
                            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-black/5 dark:hover:bg-white/10"
                            onClick={() => setOpen((v) => !v)}
                            aria-expanded={open}
                            aria-controls="mobile-menu"
                        >
                            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden>
                                <path
                                    d="M4 6h16M4 12h16M4 18h16"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                id="mobile-menu"
                className={`md:hidden border-t border-black/5 dark:border-white/10 ${open ? "block" : "hidden"}`}
            >
                <nav className="px-4 py-3 space-y-1 bg-white/90 dark:bg-black/40 backdrop-blur">
                    {site.nav.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            aria-current={isActive(link.href) ? "page" : undefined}
                            className={`block px-3 py-2 rounded-md text-sm font-semibold uppercase tracking-wide hover:bg-transparent focus:bg-transparent ${isActive(link.href)
                                ? "text-gray-900 dark:text-white bg-black/5 dark:bg-white/10"
                                : "text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
