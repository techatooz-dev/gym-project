"use client";
import React, { useEffect, useRef } from "react";

// Placeholder client logos (reuse existing public assets). Replace with real logos later.
const clientLogos = [
  { src: "/mISHA_Amir-1-185x119.jpg", alt: "Vercel" },
  { src: "/Toni_Guy-1-185x119.jpg", alt: "Next.js" },
  { src: "/omc-1-185x119.jpg", alt: "File Icon" },
  { src: "/Structure_GYM-1-185x119.jpg", alt: "Global Icon" },
  
];

export default function ClientsCarousel() {
  const containerRef = useRef(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollStartRef = useRef(0);
  const halfWidthRef = useRef(0);

  // Infinite scroll logic: duplicate array * 2
  const items = [...clientLogos, ...clientLogos];

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Compute original list width (half of duplicated set)
    halfWidthRef.current = el.scrollWidth / 2;

    const onScroll = () => {
      const half = halfWidthRef.current;
      if (el.scrollLeft >= half) {
        el.scrollLeft -= half; // wrap forward
      } else if (el.scrollLeft < 0) {
        el.scrollLeft += half; // wrap backward if user drags left past start
      }
    };
    el.addEventListener("scroll", onScroll, { passive: true });

    // Drag / swipe support
    const onPointerDown = (e) => {
      isDraggingRef.current = true;
      el.classList.add("dragging");
      startXRef.current = e.clientX || e.touches?.[0]?.clientX || 0;
      scrollStartRef.current = el.scrollLeft;
    };
    const onPointerMove = (e) => {
      if (!isDraggingRef.current) return;
      const currentX = e.clientX || e.touches?.[0]?.clientX || 0;
      const delta = currentX - startXRef.current;
      el.scrollLeft = scrollStartRef.current - delta;
      onScroll(); // ensure wrapping during drag
    };
    const endDrag = () => {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;
      el.classList.remove("dragging");
    };

    el.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", endDrag);
    window.addEventListener("pointerleave", endDrag);

    return () => {
      el.removeEventListener("scroll", onScroll);
      el.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", endDrag);
      window.removeEventListener("pointerleave", endDrag);
    };
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-10">
        <span className="block w-40 h-1 bg-blue-700 mx-auto mb-4" />
        <h2 className="text-blue-700 font-bold text-xl md:text-2xl tracking-wide">OUR HAPPY CLIENTS</h2>
      </div>
      <div className="relative px-29 py-4">
        {/* Optional gradient fades at edges */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-white to-transparent" />
        <ul
          ref={containerRef}
          className="clients-carousel flex gap-6 overflow-x-auto scroll-smooth px-6 select-none cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: "none" }}
          aria-label="Client logos carousel"
        >
          {items.map((logo, idx) => (
            <li
              key={idx + logo.src}
              className="flex-shrink-0 w-49 h-32 bg-white border border-gray-200 shadow-sm flex items-center justify-center rounded transition-transform duration-300 hover:shadow-lg hover:scale-[1.02]"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-w-[80%] max-h-[70%] object-contain"
                draggable={false}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
