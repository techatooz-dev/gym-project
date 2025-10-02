"use client";

import Image from "next/image";
import { useState } from "react";
import { Anton } from "next/font/google";

const anton = Anton({ subsets: ["latin"], weight: "400" });

function ChooseHappy() {
  // Image sources for the cards (12 total)
  const baseImages = [
    { src: "/happy5.webp", alt: "Happy client training in the gym" },
    { src: "/EMS_workout.webp", alt: "Client smiling after a workout session" },
    { src: "/happy3.webp", alt: "Clients celebrating fitness progress" },
  ];
  const images = Array(4).fill(baseImages).flat(); // 12 items
  const [visible, setVisible] = useState(6);

  return (
    <section className="relative bg-white px-4 md:px-6 lg:px-8  md:py-16">
      {/* Decorative dashed arrow on the left */}
      {/* <div className="pointer-events-none absolute left-4 top-6 hidden md:block">
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black">
          <path d="M68 4C45 14 30 22 18 36C8 48 8 56 8 68" stroke="currentColor" strokeWidth="3" strokeDasharray="6 8" strokeLinecap="round"/>
          <path d="M8 68l10-3-6 9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div> */}

      <div className="mx-auto max-w-7xl text-center">
        <h2 className={`${anton.className} text-4xl md:text-7xl uppercase text-[#111827] mb-2`}>Our Happy Clients</h2>
        <p className="mx-auto max-w-3xl text-sm md:text-base text-slate-600">
          At Pro EMS Fit, our clients’ happiness is our greatest success. Every journey is unique, but each one
          leads to the same result — healthier, stronger, and more confident individuals who trust us with their
          fitness and recovery goals.
        </p>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-y-6 justify-items-center">
          {images.slice(0, visible).map((img, idx) => (
            <ImageCard key={`${img.src}-${idx}`} src={img.src} alt={img.alt} />
          ))}
        </div>

        {/* Show more */}
        <div className="mt-8">
          {visible < images.length ? (
            <button
              type="button"
              aria-label="Show more client photos"
              onClick={() => setVisible((v) => Math.min(v + 6, images.length))}
              className="rounded-md bg-[#26A3D7] px-6 py-3 text-xs md:text-sm font-semibold uppercase tracking-wide text-white shadow-md hover:bg-[#1E8FBE] active:translate-y-[1px]"
            >
              Show More
            </button>
          ) : (
            <button
              type="button"
              aria-label="Show fewer client photos"
              onClick={() => setVisible(6)}
              className="rounded-md bg-[#26A3D7] px-6 py-3 text-xs md:text-sm font-semibold uppercase tracking-wide text-white shadow-md hover:bg-[#1E8FBE] active:translate-y-[1px]"
            >
              Show Less
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

function ImageCard({ src, alt }) {
  return (
    <div className="relative w-72 h-80 md:w-82 md:h-90 rounded-[26px] overflow-hidden shadow-xl">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 640px) 18rem, 18rem"
        className="object-cover"
        priority={false}
      />
    </div>
  );
}

export default ChooseHappy;
