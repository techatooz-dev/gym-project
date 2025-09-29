"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";
// Using FontAwesome (fa) icon pack for broad compatibility (fa6 names caused undefined runtime error)
import { FaBolt, FaHeartbeat, FaSpa, FaHandsHelping, FaRunning, FaChartLine, FaBone, FaHandHoldingHeart } from "react-icons/fa";
import { site } from "@/config/site";


export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    const isActive = (href) => (href === "/" ? pathname === "/" : pathname?.startsWith(href));
    const [servicesOpen, setServicesOpen] = useState(false);
    const servicesCloseTimer = useRef(null);

    // Original service pages with concise descriptions for grid menu
    const services = [
        { href: "/ems-sessions", label: "EMS Sessions", desc: "Guided electro muscle training", icon: <FaBolt /> },
        { href: "/power-of-ems-training", label: "Power EMS Training", desc: "High‑intensity EMS strength work", icon: <FaHeartbeat /> },
        { href: "/physiotherapy-sessions", label: "Physiotherapy Sessions", desc: "Recovery & mobility therapy", icon: <FaHandsHelping /> },
        { href: "/wellness-programs", label: "Wellness Programs", desc: "Holistic lifestyle planning", icon: <FaSpa /> },
        { href: "/pain-reliefwith-ems", label: "Pain Relief with EMS", desc: "Targeted pain management", icon: <FaHandHoldingHeart /> },
        { href: "/sprained-ankle-recovery", label: "Sprained Ankle Recovery", desc: "Accelerated ankle rehab", icon: <FaRunning /> },
        { href: "/spinal-back-pain-management", label: "Spinal & Back Pain Mgmt", desc: "Postural & spine support", icon: <FaBone /> },
        { href: "/knee-shoulder-therapy", label: "Knee & Shoulder Therapy", desc: "Joint stability sessions", icon: <FaChartLine /> },
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
                                                    className={`px-4 py-3 inline-flex items-center gap-1 text-[13px] uppercase text-white/95 hover:text-white transition relative focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-sm`}
                                                    aria-haspopup="true"
                                                    aria-expanded={servicesOpen}
                                                    onKeyDown={(e) => {
                                                        if (["Enter", " ", "ArrowDown"].includes(e.key)) {
                                                            e.preventDefault();
                                                            setServicesOpen(true);
                                                            // focus first item after open
                                                            const first = document.querySelector('#services-menu [data-menu-item]');
                                                            first && first.focus();
                                                        } else if (e.key === "Escape") {
                                                            setServicesOpen(false);
                                                        }
                                                    }}
                                                >
                                                    {link.label}
                                                    <svg className="w-3.5 h-3.5 text-white transition-transform duration-200 group-hover:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                                                        <path d="M6 9l6 6 6-6" />
                                                    </svg>
                                                </Link>
                                                <div
                                                    id="services-menu"
                                                    role="menu"
                                                    aria-label="Services"
                                                    className={`absolute left-1/2 top-full mt-2 -translate-x-1/2 w-[940px] max-w-[94vw] rounded-xl border border-green-200/60 bg-white shadow-xl z-50 transition-all ${servicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1"}`}
                                                >
                                                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-t border-l border-green-200/60" />
                                                    <div className="p-6 grid grid-cols-3 gap-x-12 gap-y-8" data-grid>
                                                        {services.map((s, idx) => {
                                                            const activeItem = isActive(s.href);
                                                            return (
                                                                <Link
                                                                    key={`${s.href}-${idx}`}
                                                                    href={s.href}
                                                                    role="menuitem"
                                                                    tabIndex={-1}
                                                                    data-menu-item
                                                                    data-index={idx}
                                                                    className={`group flex items-start gap-4 rounded-lg p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#76C043]/40 transition-colors ${activeItem ? "bg-[#76C043]" : "hover:bg-[#76C043]"}`}
                                                                >
                                                                    <span className={`inline-flex h-10 w-10 items-center justify-center rounded-md text-lg shrink-0 ring-1 ring-[#76C043]/40 transition-colors
                                                                        ${activeItem ? "bg-white text-[#76C043]" : "bg-[#76C043] text-white group-hover:bg-[#5ea932]"}`}>{s.icon}</span>
                                                                    <span className="flex flex-col pr-2 -mt-0.5">
                                                                        <span className={`text-[14px] font-semibold tracking-tight transition-colors ${activeItem ? "text-white" : "text-gray-900 group-hover:text-gray-900"}`}>{s.label}</span>
                                                                        <span className={`text-[11px] leading-snug mt-1 transition-colors ${activeItem ? "text-white" : "text-gray-500 group-hover:text-gray-600"}`}>{s.desc}</span>
                                                                    </span>
                                                                </Link>
                                                            );
                                                        })}
                                                    </div>
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
                                    {services.map((s, idx) => (
                                        <Link
                                            key={`${s.href}-${idx}`}
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
