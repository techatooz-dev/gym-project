"use client";
import React from "react";
import { Anton } from "next/font/google";

const anton = Anton({ subsets: ["latin"], weight: "400" });

export default function WhyChooseUsSection() {
  return (
    <section className="relative py-10 md:py-14 bg-white overflow-hidden">
  <div className="max-w-7xl">
        {/* Big heading */}
        <h2 className={`relative z-20 ml-16 text-start text-[48px] md:text-[96px] font-black leading-none tracking-[0.01em] text-black uppercase -mb-10 md:-mb-14 lg:-mb-16 ${anton.className}`}>
          WHY CHOOSE US
        </h2>

        {/* Layered block with text and mage */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-0 items-stretch">
          {/* Columns 1-3 combined as one green block */}
          <div className="md:col-span-3 bg-[#7CC245] min-h-[340px] md:min-h-[400px] flex items-center relative z-0">
            <div className="px-6 md:px-10 max-w-2xl">
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
          <div className="md:col-span-1 bg-white">
            <div className="relative mt-8 md:mt-12 lg:mt-16 mb-12 md:mb-12 lg:mb-16 -ml-8 md:-ml-20 lg:-ml-24 h-[300px] md:h-[360px] overflow-hidden z-10 shadow-[0_12px_24px_rgba(0,0,0,0.15)] rounded">
              <img
                src="/Why_choose_us-1.jpg"
                alt="Athlete training with EMS"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Footer green strip under the left block */}
        {/* <div className="mt-3 h-6 w-56 bg-[#7CC245]"></div> */}
      </div>
    </section>
  );
}