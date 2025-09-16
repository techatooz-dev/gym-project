"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export default function HeroSlider({ slides: slidesProp, interval = 4500, className = "" }) {
  // Replace with your image paths
  const slides = useMemo(
    () =>
      slidesProp ?? [
        { src: "/Slider-01-2.jpg", alt: "Slide 1" },
        { src: "/Slider-02-3.jpg", alt: "Slide 2" },
        { src: "/Slider-03.jpg", alt: "Slide 3" },
      ],
    [slidesProp]
  );

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (paused || slides.length <= 1) return;
    timerRef.current = setInterval(next, interval);
    return () => clearInterval(timerRef.current);
  }, [paused, interval, slides.length]);

  return (
    <div
      className={`relative w-full h-full overflow-hidden ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="flex w-full h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
        aria-live="polite"
      >
        {slides.map((s, i) => (
          <section
            key={i}
            className="min-w-full w-full h-full relative"
          >
            <img
              src={s.src}
              alt={s.alt}
              className="w-full h-full object-cover"
              draggable="false"
            />
          </section>
        ))}
      </div>

      {/* Controls */}
      {slides.length > 1 && (
        <>
          <button
            aria-label="Previous slide"
            onClick={prev}
            className="absolute left-6 top-1/2 -translate-y-1/2 grid place-items-center h-10 w-10 rounded-full bg-black/40 text-white hover:bg-black/60 focus:outline-none"
          >
            ‹
          </button>
          <button
            aria-label="Next slide"
            onClick={next}
            className="absolute right-6 top-1/2 -translate-y-1/2 grid place-items-center h-10 w-10 rounded-full bg-black/40 text-white hover:bg-black/60 focus:outline-none"
          >
            ›
          </button>

          <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2.5 w-2.5 rounded-full border border-white/70 ${
                  index === i ? "bg-white" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
