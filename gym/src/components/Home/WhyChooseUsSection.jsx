"use client";
import React from "react";

export default function WhyChooseUsSection() {
  return (
    <section className="relative py-10 md:py-14 bg-white overflow-hidden">
      <div className="max-w-7xl">
        {/* Big heading */}
        <h2 className="text-[44px] md:text-[86px] font-black leading-none tracking-tight text-black uppercase">
          WHY CHOOSE US
        </h2>

        {/* Layered block with text and image */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-0 items-stretch">
          {/* Columns 1-3 combined as one green block */}
          <div className="md:col-span-3 bg-[#7CC245] min-h-[320px] md:min-h-[360px] flex">
            <div className="px-6 md:px-10 py-8 md:py-10 max-w-2xl">
              <p className="text-white text-sm md:text-base leading-7">
                At Pro EMS Fit, we combine cutting-edge EMS technology with professional
                expertise to provide results that are both fast and effective. Our programs
                are designed to suit your unique goals, whether it’s weight loss, muscle
                building, body shaping, posture correction, or recovery from injuries. With
                personalized care, expert supervision, and state-of-the-art facilities, we make sure
                every session is safe, efficient, and tailored to your needs—helping you achieve
                maximum results in minimum time.
              </p>
            </div>
          </div>

          {/* Column 4: white panel with image */}
          <div className="md:col-span-1 bg-white overflow-hidden">
            <img
              src="/Why_choose_us-1.jpg"
              alt="Athlete training with EMS"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Footer green strip under the left block */}
        <div className="mt-3 h-6 w-56 bg-[#7CC245]"></div>
      </div>
    </section>
  );
}