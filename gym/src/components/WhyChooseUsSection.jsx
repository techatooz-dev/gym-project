"use client";
import Link from "next/link";
import React from "react";

// Key differentiators / features
const FEATURES = [
    {
        title: "Physio-Led EMS",
        desc: "Certified physiotherapists tailor every session for safe accelerated results.",
        icon: () => (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 6v6l4 2" /></svg>
        )
    },
    {
        title: "Faster Fat Burn",
        desc: "Up to 20× workout efficiency with full‑body muscle activation.",
        icon: () => (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l3 3" /></svg>
        )
    },
    {
        title: "Joint Friendly",
        desc: "Low impact sessions ideal for recovery, mobility & long‑term health.",
        icon: () => (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h16" /><path d="M12 4v16" /></svg>
        )
    },
    {
        title: "Personal Plans",
        desc: "Wedding prep, posture, weight loss, strength & wellness roadmaps.",
        icon: () => (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18M3 12h12M3 18h6" /></svg>
        )
    }
];

const STATS = [
    { label: "Calories / Session", value: "800–1400" },
    { label: "Muscle Activation", value: "90%" },
    { label: "Time Saved", value: "3h → 20m" }
];

export default function WhyChooseUsSection() {
    return (
        <section className="relative py-20 bg-white overflow-hidden">

            <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 grid lg:grid-cols-2 gap-14 items-center">
                {/* Visual / Image Side */}
                <div className="relative rounded-3xl overflow-hidden group min-h-[520px] border border-gray-200">
                    <img
                        src="/Why_choose_us-1.jpg"
                        alt="Training session"
                        className="w-full h-full object-cover transition-transform duration-[3500ms] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    {/* Floating Stats */}
                    <div className="absolute top-6 left-6 flex flex-col gap-4">
                        {STATS.map((s) => (
                            <div key={s.label} className="bg-white border border-gray-200 rounded-xl px-5 py-3 flex flex-col">
                                <span className="text-xs uppercase tracking-wider text-gray-600 font-medium">{s.label}</span>
                                <span className="text-lg font-bold text-green-600">{s.value}</span>
                            </div>
                        ))}
                    </div>
                    <div className="absolute bottom-6 right-6 bg-white border border-gray-200 rounded-2xl p-5 w-48">
                        <p className="text-xs text-gray-600 leading-relaxed"><span className="font-semibold text-green-600">EMS</span> boosts deep muscle recruitment while keeping joints safe.</p>
                    </div>
                </div>

                {/* Content Side */}
                <div className="relative">
                    <div className="mb-8">
                        {/* <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-green-600 via-green-500 to-blue-500 bg-clip-text text-transparent">
                            WHY CHOOSE US
                        </h2> */}

                        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-green-600">
                            WHY CHOOSE US
                        </h2>

                        <span className="mt-4 block w-28 h-1 bg-gradient-to-r from-green-400 via-blue-500 to-green-400 rounded-full" />
                    </div>
                    <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-8 max-w-xl">
                        We combine <span className="font-semibold text-green-600">physio expertise</span>, smart EMS technology and individualized programming to help you reshape faster, safer and with measurable progress. Every plan balances activation, recovery and sustainable performance so you keep improving—session after session.
                    </p>

                    {/* Feature Grid */}
                    <ul className="grid sm:grid-cols-2 gap-6 mb-10">
                        {FEATURES.map((f) => (
                            <li key={f.title} className="relative p-5 rounded-2xl bg-white border border-gray-200 flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-600 text-white flex items-center justify-center">
                                    {f.icon()}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 tracking-wide mb-1">{f.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                        <Link
                            href="/why-choose-us"
                            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-green-600 hover:bg-green-700 text-white font-semibold transition-colors"
                        >
                            Read More
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M5 12h14" /><path d="M13 6l6 6-6 6" /></svg>
                        </Link>
                        <div className="text-sm text-gray-500 max-w-xs">Average session equals hours of conventional training—without strain on joints.</div>
                    </div>
                </div>
            </div>
        </section>
    );
}