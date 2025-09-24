"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";
import { site } from "@/config/site";


export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    const isActive = (href) => (href === "/" ? pathname === "/" : pathname?.startsWith(href));
    const [servicesOpen, setServicesOpen] = useState(false);
    const servicesCloseTimer = useRef(null);

    const services = [
        { href: "/ems-sessions", label: "EMS Sessions" },
        { href: "/sports-performance-training", label: "Sports Performance Training" },
        { href: "/physiotherapy-sessions", label: "Physiotherapy Sessions" },
        { href: "/wellness-programs", label: "Wellness Programs" },
        { href: "/pain-reliefwith-ems", label: "Pain Relief with EMS" },
        { href: "/sprained-ankle-recovery", label: "Sprained Ankle Recovery" },
        { href: "/spinal-back-pain-management", label: "Spinal & Back Pain Management" },
        { href: "/knee-shoulder-therapy", label: "Knee & Shoulder Therapy" },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white  border-b border-black/5">
            <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-10  py-3">
                <div className="flex h-16 items-center justify-between w-full">
                    {/* Brand */}
                    <Link href="/" className="flex items-center gap-3 shrink-0">
                        <Image
                            src={site.logo.src}
                            alt={site.logo.alt}
                            width={site.logo.width}
                            height={site.logo.height}
                            priority
                        />
                        <span className="sr-only">{site.name}</span>
                    </Link>

                    {/* Centered nav (desktop) */}
                    <div className="hidden md:flex flex-1 justify-center px-6">
                        <div className="bg-[#76C043] rounded-sm flex items-stretch px-3">
                            <nav className="flex items-center gap-1">
                                {site.nav.map((link) => {
                                    const active = isActive(link.href);
                                    if (link.href === "/services") {
                                        return (
                                            <div
                                                key={link.href}
                                                className="relative group flex items-center"
                                                onMouseEnter={() => {
                                                    if (servicesCloseTimer.current) clearTimeout(servicesCloseTimer.current);
                                                    setServicesOpen(true);
                                                }}
                                                onMouseLeave={() => {
                                                    servicesCloseTimer.current = setTimeout(() => setServicesOpen(false), 180);
                                                }}
                                            >
                                                <Link
                                                    href={link.href}
                                                    className={`px-4 py-3 inline-flex items-center gap-1 text-[13px] uppercase text-white/95 hover:text-white transition relative`}
                                                >
                                                    {link.label}
                                                    <svg className="w-3.5 h-3.5 text-white transition-transform duration-200 group-hover:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                                                        <path d="M6 9l6 6 6-6" />
                                                    </svg>
                                                </Link>
                                                <div className={`absolute left-0 top-full mt-1 w-72 rounded-md border border-green-200 bg-white shadow-lg z-50 ${servicesOpen ? "block" : "hidden"}`}>
                                                    <div className="absolute -top-2 left-6 w-4 h-4 bg-white rotate-45 border-t border-l border-green-200" />
                                                    <ul className="py-2">
                                                        {services.map((s) => (
                                                            <li key={s.href}>
                                                                <Link
                                                                    href={s.href}
                                                                    className={`block px-4 py-2 text-sm ${isActive(s.href) ? "text-blue-600 font-semibold" : "text-gray-800"} hover:bg-blue-600 hover:text-white`}
                                                                    onMouseEnter={() => {
                                                                        if (servicesCloseTimer.current) clearTimeout(servicesCloseTimer.current);
                                                                        setServicesOpen(true);
                                                                    }}
                                                                >
                                                                    {s.label}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        );
                                    }
                                    return (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            className={`px-4 py-3 text-[13px] uppercase text-white/95 hover:text-white transition relative`}
                                        >
                                            {link.label}
                                        </Link>
                                    );
                                })}
                            </nav>
                        </div>
                    </div>

                    {/* Book Appointment (desktop) */}
                    <div className="hidden md:flex items-center ml-4">
                        <Link href="/contact-us" className="inline-flex items-center px-6 py-3 rounded-l-none rounded-r-2xl bg-sky-500 hover:bg-sky-600 text-white font-semibold text-sm shadow-sm transition">
                            Book Appointment
                        </Link>
                    </div>

                    {/* Mobile menu toggle (unchanged) */}
                    <button
                        type="button"
                        aria-label="Toggle menu"
                        className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-black/5 dark:hover:bg-white/10"
                        onClick={() => setOpen((v) => !v)}
                        aria-expanded={open}
                        aria-controls="mobile-menu"
                    >
                        <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden>
                            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                id="mobile-menu"
                className={`md:hidden border-t border-black/5 dark:border-white/10 ${open ? "block" : "hidden"}`}
            >
                <nav className="px-4 py-3 space-y-1 bg-white/90 dark:bg-black/40 backdrop-blur">
                    {site.nav.map((link) => (
                        <div key={link.href}>
                            <Link
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
                            {link.href === "/services" && (
                                <div className="pl-4">
                                    {services.map((s) => (
                                        <Link
                                            key={s.href}
                                            href={s.href}
                                            onClick={() => setOpen(false)}
                                            className="block px-3 py-2 rounded-md text-sm tracking-wide text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white"
                                        >
                                            {s.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>
            </div>
        </header>
    );
}
