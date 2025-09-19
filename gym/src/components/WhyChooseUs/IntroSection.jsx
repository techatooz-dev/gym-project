"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/config/site";

function IntroSection() {
  const brand = site?.name ?? "Our Studio";

  return (
    <section className="relative isolate overflow-hidden">
      {/* Background media */}
      <div className="absolute inset-0 -z-10">
        {/* Optional video background: provide your clip at /public/ems-hero.mp4 */}
        <video
          className="hidden md:block h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/EMS-fitness-training.jpeg"
        >
          <source src="/ems-hero.mp4" type="video/mp4" />
        </video>
        {/* Fallback image for mobile or no video */}
        <Image
          src="/EMS-fitness-training.jpeg"
          alt="Physiotherapist assisting a client in an EMS suit"
          priority
          fill
          sizes="100vw"
          className="object-cover md:hidden"
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        {/* Accent glow */}
        <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[110vw] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-24 md:py-32">
        <div className="grid items-center gap-10 md:grid-cols-12">
          {/* Copy */}
          <div className="md:col-span-7 lg:col-span-6 text-white">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white/90 ring-1 ring-white/20 backdrop-blur">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Trusted EMS training by physiotherapists
            </div>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
              <span className="align-middle">Why Choose </span>
              <span className="text-green-600">
                {brand}
              </span>
              ?
            </h1>

            <h2 className="mt-4 max-w-2xl text-base md:text-xl text-white/90">
              Scientifically backed EMS training designed for faster fat burn, joint-friendly
              workouts, and personalized results.
            </h2>

            <p className="mt-4 max-w-2xl text-sm md:text-base text-white/80">
              Train smarter in just 20 minutes per session — guided by physiotherapists for
              maximum safety and efficiency.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/contact-us"
                className="group inline-flex items-center justify-center rounded-full bg-green-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-emerald-900/30 transition hover:translate-y-[-1px]  active:translate-y-0"
              >
                 Book Your Free Trial
                <span className="ml-2 inline-block transition group-hover:translate-x-0.5">→</span>
              </Link>

              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                 See How It Works
              </Link>

              {/* Quick reassurance */}
              <div className="ml-1 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 text-xs text-white/80 ring-1 ring-white/15">
                <Image src="/footer_logo-01.png" alt="brand" width={18} height={18} className="opacity-90" />
                No obligations • First session free
              </div>
            </div>

            {/* Feature chips */}
            <ul className="mt-6 flex flex-wrap gap-2 text-xs text-white/80">
              {[
                "Faster fat burn",
                "Joint-friendly",
                "Physio-guided",
                "Personalized plan",
                "20-min sessions",
              ].map((item) => (
                <li key={item} className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Visual card */}
          <div className="md:col-span-5 lg:col-span-6">
            <div className="relative mx-auto w-full max-w-md md:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl ring-1 ring-white/10 bg-white/5 backdrop-blur">
                <Image
                  src="/EMS.jpg"
                  alt="Client doing EMS workout with trainer guidance"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 90vw"
                  priority
                />
                {/* Corner badge */}
                <div className="absolute left-3 top-3 rounded-full bg-emerald-400 px-3 py-1 text-xs font-semibold text-emerald-950 shadow">
                  New Clients Welcome
                </div>
                {/* Floating stats card */}
                <div className="absolute -bottom-5 left-1/2 w-[92%] -translate-x-1/2 rounded-2xl bg-black/60 p-4 text-white ring-1 ring-white/10 backdrop-blur">
                  <div className="grid grid-cols-3 divide-x divide-white/10 text-center">
                    <div>
                      <div className="text-lg font-semibold">20m</div>
                      <div className="text-[10px] uppercase tracking-wide text-white/70">Session</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold">2x</div>
                      <div className="text-[10px] uppercase tracking-wide text-white/70">Weekly</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold">Safe</div>
                      <div className="text-[10px] uppercase tracking-wide text-white/70">Physio-Guided</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Anchor target for "See How It Works" */}
      <div id="how-it-works" className="sr-only" aria-hidden="true" />
    </section>
  );
}

export default IntroSection;
