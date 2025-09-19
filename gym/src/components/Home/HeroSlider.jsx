"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export default function HeroSlider({
  background = "/Slider-01-2.jpg",
  headline = "Transform Your Body with EMS Fitness",
  subheadline = "Save time, burn fat, and build muscle 20x faster with cutting-edge electronic muscle stimulation. Experience the future of fitness in Lahore.",
  cta = { label: "Book Your Free Trial", href: "#services" },
  className = "",
  children,
}) {
  return (
    <section
      className={`relative w-full h-[calc(100vh-4rem)] md:h-[80vh] max-h-[900px] min-h-[480px] flex items-center justify-center overflow-hidden ${className}`}
      style={{
        backgroundImage: `url('${background}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Enhanced Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/40 to-transparent z-10" />
      {/* Floating shapes */}
      {/* <div className="absolute left-10 top-10 w-32 h-32 bg-green-400/30 rounded-full blur-2xl animate-pulse z-20" />
      <div className="absolute right-10 bottom-20 w-24 h-24 bg-blue-400/30 rounded-full blur-2xl animate-pulse z-20" /> */}
      {/* Content */}
      {/* <div className="relative z-30 flex flex-col items-center justify-center text-center px-6 md:px-0 w-full">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight animate-fade-in-up">
          <span className="block text-white drop-shadow-lg">
            {headline.split(/<br\s*\/>/i)[0]}
          </span>
          <span className="block animate-gradient-x bg-gradient-to-r from-green-400 via-blue-400 to-green-400 bg-clip-text text-transparent drop-shadow-lg">
            {headline.split(/<br\s*\/>/i)[1] || ''}
          </span>
        </h1>
        <p className="text-lg md:text-2xl text-white/90 font-medium mb-8 max-w-2xl drop-shadow animate-fade-in-up delay-200">
          {subheadline}
        </p>
        {cta && cta.label && (
          <a
            href={cta.href}
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg transition-colors duration-200 animate-fade-in-up delay-300"
          >
            {cta.label}
          </a>
        )}
        {children}
      </div> */}
      {/* Scroll cue */}
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center animate-bounce">
        <span className="text-white/80 text-xs mb-1">Scroll</span>
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/80" viewBox="0 0 24 24"><path d="M12 5v14m0 0l-6-6m6 6l6-6"/></svg>
      </div> */}
    </section>
  );
}
