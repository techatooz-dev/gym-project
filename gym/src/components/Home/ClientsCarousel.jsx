
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Anton } from "next/font/google";

const anton = Anton({ subsets: ["latin"], weight: "400" });

// Replace placeholder cards with client images. Adjust /public image filenames as needed.
// Keep colors as subtle gradient overlays for consistency; can be removed if not desired.
const cards = [
  { src: "/EMS_workout.webp", alt: "Client training session 1" },
  // { src: "/happy2jpg.jpg", alt: "Client training session 2" },
  { src: "/happy5.webp", alt: "Client training session 3" },
  { src: "/happy3.webp", alt: "EMS workout" },
  // { src: "/Fitness-training.jpg", alt: "Fitness guidance" },
];

export default function ClientsCarousel() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const total = cards.length;

  // Show 3 cards at a time, center active
  const getVisible = () => {
    // On mobile show only active card; on desktop show 3 (prev, active, next)
    if (isMobile) {
      return [cards[index % total]];
    }
    return [
      cards[(index + total - 1) % total],
      cards[index % total],
      cards[(index + 1) % total],
    ];
  };

  const advance = (dir) => {
    setIndex((prev) => (prev + dir + total) % total);
  };

  // Watch viewport to toggle mobile/desktop rendering
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 767px)");
    const onChange = (e) => setIsMobile(e.matches);
    // Initialize and subscribe
    setIsMobile(mq.matches);
    try {
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    } catch {
      // Safari fallback
      mq.addListener(onChange);
      return () => mq.removeListener(onChange);
    }
  }, []);

  return (
  <section className="relative bg-white">
      {/* Green header band */}
  <div className="bg-[#7CC245] pt-10 pb-42">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <div className="flex flex-col items-center gap-1 md:gap-2">
              <span className="h-1.5 w-16 md:w-24 bg-white rounded-full" />
              <h2 className={`${anton.className} text-[44px] md:text-[80px] font-black uppercase leading-[0.95] tracking-tight text-gray-900`}>
                OUR HAPPY CLIENTS
              </h2>
            </div>
          <p className="mt-4 md:mt-0 text-white text-sm md:text-base font-medium max-w-2xl mx-auto">
            At Pro EMS Fit, our clients’ happiness is our greatest achievement. From fitness enthusiasts to recovery patients, each success story reflects the impact of our EMS programs. Their positive feedback and lasting results inspire us to keep delivering safe, effective, and personalized solutions that truly make a difference.
          </p>
        </div>
      </div>

      {/* Cards row straddling the boundary */}
      <div className="mx-auto max-w-5xl px-4">
        <div className="-mt-30 md:-mt-32 flex justify-center items-end gap-8 md:gap-10">
          {getVisible().map((card, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-[28px] shadow-[0_14px_28px_rgba(0,0,0,0.18)] w-[min(88vw,260px)] md:w-[240px] aspect-[3/4] select-none`}
            >
              <Image
                src={card.src}
                alt={card.alt}
                fill
                sizes="(max-width: 767px) 88vw, 240px"
                className="object-cover will-change-transform"
                // Slightly higher quality for better clarity (default is 75)
                quality={85}
                priority={isMobile ? i === 0 : i === 1}
              />
            </div>
          ))}
        </div>

        {/* Slider arrows on white area */}
        <div className="flex justify-center gap-4 mt-8 mb-8">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => advance(-1)}
            className="h-10 w-10 rounded-full border border-[#23A7D8] bg-white text-gray-700 flex items-center justify-center shadow hover:bg-blue-300"
          >
            <span className="text-2xl">&#60;</span>
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => advance(1)}
            className="h-10 w-10 rounded-full border border-[#7CC245] bg-white text-gray-700 flex items-center justify-center shadow hover:bg-[#7CC245]"
          >
            <span className="text-2xl">&#62;</span>
          </button>
        </div>
      </div>
    </section>
  );
}
