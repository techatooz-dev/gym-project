"use client";
import React, { useState } from "react";

// Placeholder client logos (reuse existing public assets). Replace with real logos later.
const clientLogos = [
  { src: "/gym1.webp", alt: "Vercel" },
  { src: "/gym2.jpg", alt: "Next.js" },
  { src: "/gym3.jpg", alt: "File Icon" },
  { src: "/fit at older.jpg", alt: "Global Icon" },

];

export default function ClientsCarousel() {
  // Mobile index (single card at a time)
  const [mobileIndex, setMobileIndex] = useState(0);
  // Desktop index controlling first of visible items (3 shown of 4)
  const [desktopIndex, setDesktopIndex] = useState(0);

  const total = clientLogos.length;
  const advance = (dir) => {
    setMobileIndex((prev) => {
      const next = (prev + dir + total) % total;
      return next;
    });
  };

  const currentMobileLogo = clientLogos[mobileIndex];

  return (
    <section className="relative py-16 bg-gray-900 overflow-hidden">
      {/* Ambient decorative gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-24 w-96 h-96 bg-green-600/15 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-24 w-[28rem] h-[28rem] bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-48 bg-gradient-to-r from-green-500/10 via-transparent to-green-500/10 blur-2xl" />
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_1px_1px,#1f2937_1px,transparent_0)] [background-size:22px_22px]" />
      </div>
      <div className="text-center mb-10 relative">
        {/* Enhanced title design */}
        <div className="relative inline-block">
          {/* Top decorative line */}
          <span className="block w-24 h-1 bg-gradient-to-r from-green-400 via-green-500 to-emerald-400 mx-auto mb-3 rounded-full shadow-sm shadow-green-500/30" />

          {/* Main title with enhanced styling */}
          {/* <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to- from-green-300 via-emerald-400 to-green-200 bg-clip-text text-transparent tracking-tight mb-5 drop-shadow-[0_4px_12px_rgba(16,185,129,0.35)]">
            OUR HAPPY CLIENTS
          </h2> */}

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-green-600 mb-3">
            OUR HAPPY CLIENTS
          </h2>


          {/* Bottom decorative elements */}
          {/* <div className="flex justify-center items-center gap-2 mb-2">
            <span className="block w-8 h-0.5 bg-green-300 opacity-60" />
            <div className="w-2 h-2 bg-green-500 rotate-45 opacity-70" />
            <span className="block w-16 h-0.5 bg-gradient-to-r from-green-500 to-green-600" />
            <div className="w-2 h-2 bg-green-500 rotate-45 opacity-70" />
            <span className="block w-8 h-0.5 bg-green-300 opacity-60" />
          </div> */}

          {/* Subtitle */}
          <p className="text-gray-300 text-sm md:text-base font-medium tracking-wide opacity-80 
                        transition-opacity duration-300 hover:opacity-100">
            Trusted by leading brands and businesses
          </p>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 
    w-32 h-32 bg-green-500/20 rounded-full opacity-30 blur-xl -z-10" />
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 -translate-y-2 
    w-48 h-16 bg-gradient-to-r from-green-500/30 to-transparent rounded-full opacity-40 blur-2xl -z-10" />
      </div>
      {/* Mobile (<= md): single card with top-right arrows */}
      <div className="md:hidden px-5 -mt-2">
        <div className="flex justify-end gap-3 mb-4">
          <button
            type="button"
            aria-label="Previous client"
            onClick={() => advance(-1)}
            className="h-10 w-10 rounded-full border border-gray-300 bg-white text-blue-600 flex items-center justify-center shadow-sm hover:shadow-md hover:border-blue-400 hover:text-blue-700 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next client"
            onClick={() => advance(1)}
            className="h-10 w-10 rounded-full border border-gray-300 bg-white text-blue-600 flex items-center justify-center shadow-sm hover:shadow-md hover:border-blue-400 hover:text-blue-700 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-sm h-72 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/60 shadow-lg rounded-3xl overflow-hidden flex items-center justify-center relative group/card">
            <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_30%_30%,#10b98133,transparent_60%)]" />
            <img
              src={currentMobileLogo.src}
              alt={currentMobileLogo.alt}
              className="w-full h-full object-cover scale-100 group-hover/card:scale-105 transition-transform duration-500"
              draggable={false}
            />
            <div className="absolute inset-0 ring-1 ring-white/5 rounded-3xl group-hover/card:ring-green-400/40 transition" />
          </div>
        </div>
      </div>

      {/* Desktop / larger screens: centered 4-card carousel with top-right arrows */}
      <div className="hidden md:block relative py-6">
        {(() => {
          const totalDesktop = clientLogos.length;
          const visibleCount = Math.min(4, totalDesktop);
          // Build visible array circularly starting at desktopIndex
          const visible = Array.from({ length: visibleCount }).map((_, i) => clientLogos[(desktopIndex + i) % totalDesktop]);
          const advanceDesktop = (dir) => {
            setDesktopIndex((prev) => (prev + dir + totalDesktop) % totalDesktop);
          };
          return (
            <div className="max-w-7xl mx-auto px-6">
              {/* Arrow group */}
              <div className="flex justify-end mb-6 gap-3 pr-2">
                <button
                  type="button"
                  aria-label="Previous clients"
                  onClick={() => advanceDesktop(-1)}
                  className="h-11 w-11 rounded-full border border-green-400/40 bg-gradient-to-br from-gray-800 to-gray-900 text-green-300 flex items-center justify-center shadow-sm hover:shadow-lg hover:border-green-400 hover:text-white transition relative overflow-hidden group/btn"
                >
                  <span className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 bg-gradient-to-r from-green-500/40 to-emerald-500/20 transition" />
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button
                  type="button"
                  aria-label="Next clients"
                  onClick={() => advanceDesktop(1)}
                  className="h-11 w-11 rounded-full border border-green-400/40 bg-gradient-to-br from-gray-800 to-gray-900 text-green-300 flex items-center justify-center shadow-sm hover:shadow-lg hover:border-green-400 hover:text-white transition relative overflow-hidden group/btn"
                >
                  <span className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 bg-gradient-to-r from-green-500/40 to-emerald-500/20 transition" />
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                </button>
              </div>
              <ul className={`grid gap-6 ${visibleCount === 4 ? 'grid-cols-4' : visibleCount === 3 ? 'grid-cols-3' : visibleCount === 2 ? 'grid-cols-2' : 'grid-cols-1'}`} aria-label="Client logos carousel (desktop)">
                {visible.map((logo, idx) => (
                  <li key={logo.src + idx} className="relative group/card bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/60 rounded-3xl overflow-hidden flex flex-col w-full h-[420px] shadow-lg hover:shadow-emerald-500/20 transition-all">
                    <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_30%_30%,#10b98133,transparent_60%)]" />
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="w-full h-full object-cover scale-100 group-hover/card:scale-105 transition-transform duration-500"
                      draggable={false}
                    />
                    <div className="absolute inset-0 rounded-3xl ring-1 ring-white/5 group-hover/card:ring-green-400/40 transition" />
                  </li>
                ))}
              </ul>
            </div>
          );
        })()}
      </div>
    </section>
  );
}

// (Removed old ArrowNav scroll logic as desktop now index-based)
