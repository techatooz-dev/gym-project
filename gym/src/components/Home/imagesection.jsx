import React from "react";

// Hardcoded image section: static heading, description and image.
export default function ImageSection() {
  return (
    <section className="relative py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col gap-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-[36px] md:text-5xl font-extrabold tracking-tight text-green-600 mb-4">
            FAQ'S
          </h2>
          <p className="text-sm  md:text-base text-gray-600 leading-relaxed">
           Frequently Asked Questions
          </p>
        </div>

        <div className="relative w-full max-w-6xl mx-auto">
          {/* Use asymmetrical rounding: modest on left, fully pill / semicircle on right */}
          <div className="relative overflow-hidden bg-white aspect-[16/9] rounded-l-[3rem] md:rounded-l-[4rem] rounded-r-[1000px]">
            <img
              src="/imagesection.png"
              alt="Group EMS training"
              className="w-full h-full object-cover select-none"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 rounded-l-[3rem] md:rounded-l-[4rem] rounded-r-[1000px] ring-1 ring-black/5" />
          </div>
        </div>
      </div>
    </section>
  );
}
